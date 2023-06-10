import { ChangeEvent, FormEvent, memo, useCallback, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { selectMinimalLeftoversListIsEmpty } from '~/entities/MinimalLeftoversAndOrderingEdit';

import { getPromiseAndResRej } from '~/shared/lib/helpers';
import { isObject } from '~/shared/lib/helpers/typeGuards';
import { useActions, useInitDownloadData } from '~/shared/lib/hooks';
import type { Nullable } from '~/shared/lib/ts';
import { actions as commonActions } from '~/shared/models/commonStores';

import { formatter } from '../const';
import { computeResponsibleNotifyModalProps, computeDeleteModalProps } from '../lib/helpers';
import { selectFileUploadDate, actions, selectIsFileUploading, selectIsLastUpdatedEqualUploadDate } from '../model';

export const FileUpload = memo(() => {
  const formRef = useRef<Nullable<HTMLFormElement>>(null);
  const [file, setFile] = useState<Nullable<File>>(null);

  const fileUploadDate = useSelector(selectFileUploadDate);
  const isLastUpdatedEqualUploadDate = useSelector(selectIsLastUpdatedEqualUploadDate);
  const isFileUploading = useSelector(selectIsFileUploading);
  const isMinimalLeftoversListEmpty = useSelector(selectMinimalLeftoversListIsEmpty);

  const formattedFileUploadDate = fileUploadDate ? formatter.format(new Date(fileUploadDate)) : null;

  const { getUploadDate, uploadFile, acceptFile, deleteAllLeftovers } = useActions(actions);
  const { addAlertsSettings, addModalSettings } = useActions(commonActions);

  const onFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (file)
        void uploadFile(file)
          .unwrap()
          .then(() => {
            setFile(null);
            formRef.current?.reset();
            addAlertsSettings({ variant: 'success', children: 'Файл успешно загружен' });
          });
    },
    [file]
  );

  const onUpdateLeftoversClick = useCallback(() => {
    const { promise, resolve } = getPromiseAndResRej<boolean>();

    addModalSettings(
      computeResponsibleNotifyModalProps({
        onAccept: () => resolve(true),
        onDecline: () => resolve(false),
      })
    );

    void promise.then(r =>
      acceptFile(r)
        .unwrap()
        .then(() => addAlertsSettings({ variant: 'success', children: 'Все остатки успешно обновлены' }))
    );
  }, []);

  const onFileAdd = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    if (isObject(target) && 'files' in target && target.files?.[0]) {
      setFile(target.files[0]);
    }
  }, []);

  const onLeftoversDelete = useCallback(() => {
    addModalSettings(
      computeDeleteModalProps({
        onAccept: () =>
          void deleteAllLeftovers()
            .unwrap()
            .then(() => addAlertsSettings({ variant: 'success', children: 'Все остатки успешно удалены' })),
      })
    );
  }, []);

  useInitDownloadData({ data: fileUploadDate, downloadFn: getUploadDate });

  return (
    <Form ref={formRef} onSubmit={onFormSubmit}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>
          <div>
            <div>Загрузить можно .html файл (специально выгруженный из 1с)</div>
            {formattedFileUploadDate && (
              <div>
                Дата последней загрузки файла: <strong>{formattedFileUploadDate}</strong>
              </div>
            )}
          </div>
        </Form.Label>

        <Form.Control onChange={onFileAdd} type="file" accept=".html" />
      </Form.Group>

      <div className="d-flex gap-3">
        <Button disabled={!file || isFileUploading} type="submit">
          Загрузить
        </Button>

        <Button
          type="button"
          variant="success"
          onClick={onUpdateLeftoversClick}
          disabled={isFileUploading || isLastUpdatedEqualUploadDate || !fileUploadDate}
        >
          Обновить
        </Button>

        <Button variant="danger" type="button" disabled={isMinimalLeftoversListEmpty} onClick={onLeftoversDelete}>
          Удалить все остатки
        </Button>
      </div>
    </Form>
  );
});
