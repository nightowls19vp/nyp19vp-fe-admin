import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  Container,
  InputGroup,
} from "react-bootstrap";
import LoginRoutes from "routes/LoginRoutes";
import { Formik } from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {
  return (
    <main>
      <section className="vh-100 mt-md-2 mt-lg-3 bg-soft d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col
              sm={12}
              md={10}
              lg="5"
              className="d-flex align-items-center justify-content-center"
            >
              <div
                className="signin-inner my-3 my-lg-0 bg-white shadow border rounded border-light p-4 p-lg-5 w-100"
                style={{ maxWidth: 440 }}
              >
                <h3>Quên mật khẩu?</h3>
                <Formik
                  initialValues={{
                    email: "admin@example.com",
                    submit: null,
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Email không hợp lệ")
                      .max(255)
                      .required("Bắt buộc"),
                  })}
                  onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting }
                  ) => {
                    try {
                      setStatus({ success: false });
                      setSubmitting(false);
                    } catch (err) {
                      setStatus({ success: false });
                      setErrors({ submit: err.message });
                      setSubmitting(false);
                    }
                  }}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <Form.Group id="email" className="mb-4">
                          <Form.Label></Form.Label>
                          <InputGroup>
                            <InputGroup.Text>
                              <FontAwesomeIcon icon={faEnvelope} />
                            </InputGroup.Text>
                            <Form.Control
                              className="input-out-button-group"
                              required
                              type="email"
                              value={values.email}
                              placeholder="megoo@example.com"
                              name="email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              isInvalid={!!(touched.email && errors.email)}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-100 btn-login"
                      >
                        Xác nhận
                      </Button>
                    </Form>
                  )}
                </Formik>
                <br></br>
                <p className="text-center">
                  <Card.Link
                    href={LoginRoutes.children[0].path}
                    className="text-gray-700"
                  >
                    <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Về
                    trang đăng nhập
                  </Card.Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default ForgotPassword;
