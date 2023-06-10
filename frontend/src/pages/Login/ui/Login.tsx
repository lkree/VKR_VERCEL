import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { preventDefault } from '~/shared/lib/helpers';
import { useActions } from '~/shared/lib/hooks';
import type { noop } from '~/shared/lib/ts';

import { actions, selectEmailPassword } from '../model';

import css from './Login.module.sass';

export const Login = () => {
  const { email, password } = useSelector(selectEmailPassword);
  const { submit, setEmail, setPassword } = useActions(actions);

  return (
    <Container fluid className="justify-content-center align-items-center vh-100 vw-100 d-flex bg-dark text-white">
      <Form className={css.wrapper} onSubmit={preventDefault}>
        <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextEmail">
          <Col xs="4">
            <Form.Label column>Email</Form.Label>
          </Col>

          <Col>
            <Form.Control
              placeholder="email@email.ru"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextPassword">
          <Col xs="4">
            <Form.Label column>Пароль</Form.Label>
          </Col>

          <Col>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </Col>
        </Form.Group>

        <Row>
          <Col>
            <Button variant="primary" type="submit" onClick={submit as noop}>
              Авторизоваться
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
