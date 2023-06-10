import { FC, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';

import cn from 'classnames';

import { useFieldFocus } from '~/shared/lib/hooks';
import { Icon } from '~/shared/ui/Icon';

import css from './EditableField.module.sass';

interface Props {
  value: number;
  onAccept: (payload: number) => Promise<any>;
  onDelete?: () => Promise<any>;
}

export const EditableField: FC<Props> = ({ value, onAccept, onDelete }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [stateValue, setStateValue] = useState(value);

  const onAcceptClick = () => {
    setIsEditing(false);

    if (stateValue !== value) {
      setIsLoading(true);
      void onAccept(stateValue).catch(() => setIsLoading(false));
    }
  };

  const onDeleteClick = () => {
    void onDelete?.().catch(() => setIsLoading(false));
  };

  const onRowWithValueClick = useCallback(() => setIsEditing(true), []);

  useLayoutEffect(() => {
    setStateValue(value);
    setIsLoading(false);
  }, [value]);

  useFieldFocus(inputRef, isEditing);

  if (isLoading) return <Spinner />;

  return (
    <Row className="h-100">
      <Col onClick={onRowWithValueClick} className="d-flex align-items-center">
        {isEditing ? (
          <Form.Control
            ref={inputRef}
            onChange={({ target }) => setStateValue(+target.value)}
            type="number"
            value={stateValue}
          />
        ) : (
          <div className={css.valueWrapper}>{value}</div>
        )}
      </Col>
      {isEditing && (
        <>
          <Col sm="auto">
            <Button
              variant="success"
              title="Сохранить"
              className={cn(css.button, 'rounded-circle')}
              onClick={onAcceptClick}
            >
              <Icon type="Mark" className={cn(css.icon, 'text-white')} />
            </Button>
          </Col>
          {onDelete && (
            <Col sm="auto">
              <Button
                variant="danger"
                title="Удалить"
                className={cn(css.button, 'rounded-circle position-relative')}
                onClick={onDeleteClick}
              >
                <div className={css.closeButtonContent}>&times;</div>
              </Button>
            </Col>
          )}
        </>
      )}
    </Row>
  );
};
