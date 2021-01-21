import React, {Component} from "react";
import InputFormGroup from "../../components/form-group/input-form-group";
import {Formik} from "formik";
import * as Yup from "yup";
import {Button, Form, Modal, ModalBody, ModalFooter, ModalHeader,} from "reactstrap";

class LoginModal extends Component {
  state = {open: false, executing: false};

  open(task = null) {
    this.setState({open: true, executing: false});
  }

  async executeLogin({phone, pin}) {
    let {executing} = this.state;
    if (executing) {
      return
    }

    let loginPayload = {
      PHONE: phone,
      PIN: pin,
    };

    // SERVER REQUEST

    this.setState({open: false});
  }

  render() {
    let {open} = this.state;

    return (
      <Modal isOpen={open} toggle={() => this.setState({open: !open})} centered>
        <Formik
          onSubmit={this.executeLogin.bind(this)}
          validationSchema={Yup.object().shape({
            phone: Yup.string().required("Phone is required"),
            pin: Yup.string().required("pin is required"),
          })}
          initialValues={{
            phone: "",
            pin: "",
          }}
        >
          {(formikOptions) => {
            let {handleSubmit} = formikOptions;

            return (
              <Form onSubmit={handleSubmit}>
                <ModalHeader toggle={() => this.setState({open: !open})}>
                  Login
                </ModalHeader>

                <ModalBody>
                  <InputFormGroup label="Phone" name="phone" options={formikOptions}/>
                  <InputFormGroup label="Pin" name="pin" options={formikOptions}/>
                </ModalBody>

                <ModalFooter>
                  <Button
                    type="button"
                    color="secondary"
                    onClick={() => this.setState({open: false})}
                  >
                    Cancel
                  </Button>

                  <Button color="primary" type="submit">
                    Login
                  </Button>
                </ModalFooter>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    );
  }
}

export default LoginModal;
