import type { FC } from 'react';
import { Form, Row } from 'react-bootstrap';

import { UserCreation } from '~/entities/ResponsiblePersonsEdit/ui/UserCreation/UserCreation';

import type { ResponsiblePerson, ResponsiblePersonWithPassword } from '../../types';
import { NotificationEdit } from '../NotificationEdit';

import css from './FormField.module.sass';

interface Props {
  person: ResponsiblePerson;
  onSave: (responsiblePerson: ResponsiblePersonWithPassword) => void;
  onTestEmail: (email: string) => void;
}

export const FormField: FC<Props> = ({ person, onSave, onTestEmail }) => (
  <div className="d-flex flex-column gap-2">
    <Form.Group key={person.cityName} as={Row}>
      <Form.Label column sm={12}>
        <strong>{person.cityName}</strong>
      </Form.Label>
    </Form.Group>

    <NotificationEdit onTestEmail={onTestEmail} onSave={onSave} person={person} className={css.notifyField} />

    <UserCreation person={person} onSave={onSave} className={css.notifyField} />
  </div>
);
