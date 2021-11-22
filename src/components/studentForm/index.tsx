import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Student } from "../../services/jsonPlaceholder";
import { addStudent, updateStudent } from "../../store/student";
import styles from "./styles.module.scss";

function StudentForm(): JSX.Element {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Student>();
  React.useEffect(() => {
    if (location.state) {
      const user: Student = location.state as Student;
      setValue("lastName", user.lastName);
      setValue("firstName", user.firstName);
      setValue("birthday", user.birthday);
      setValue("course", user.course);
      setValue("hours", user.hours);
      setValue("price", user.price);
    }
  }, [location.state, setValue]);
  const onSubmit: SubmitHandler<Student> = (data) => {
    if (location.state) {
      dispatch(updateStudent(data));
    } else {
      dispatch(addStudent(data));
    }
    history.push("/");
  };
  return (
    <Card className={styles.addStudent}>
      <CardBody className={styles.cardBody}>
        <CardTitle tag="h4">
          {location.state ? "Update Student " : "Add Student "}
        </CardTitle>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.StudentForm}>
          <Row>
            <Col md={2}>
              <FormGroup className="BordCard">
                <Label className="font-medium-1">First Name</Label>
                <input
                  placeholder="Malek"
                  className={classNames(
                    "form-control",
                    errors?.firstName && "is-invalid"
                  )}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <span>This field is required</span>}
              </FormGroup>
            </Col>

            <Col md={2}>
              <FormGroup className="BordCard">
                <Label className="font-medium-1">Last Name</Label>
                <input
                  placeholder="Mliki"
                  className={classNames(
                    "form-control",
                    errors?.lastName && "is-invalid"
                  )}
                  aria-invalid={errors.lastName ? "true" : "false"}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <span>This field is required</span>}
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup className="BordCard">
                <Label className="font-medium-1">Date of Birth</Label>
                <input
                  placeholder="26/02/1996"
                  className={classNames(
                    "form-control",
                    errors?.birthday && "is-invalid"
                  )}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  {...register("birthday", {
                    required: true,
                    pattern: /^\d{2}\/\d{2}\/\d{4}$/,
                  })}
                />
                {errors.birthday && <span>This field is required</span>}
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup className="BordCard">
                <Label className="font-medium-1">Course name</Label>
                <input
                  placeholder="JavaScript"
                  className={classNames(
                    "form-control",
                    errors?.course && "is-invalid"
                  )}
                  aria-invalid={errors.course ? "true" : "false"}
                  {...register("course", { required: true })}
                />
                {errors.course && <span>This field is required</span>}
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup className="BordCard">
                <Label className="font-medium-1">Hours</Label>
                <input
                  placeholder="50"
                  type="number"
                  className={classNames(
                    "form-control",
                    errors?.hours && "is-invalid"
                  )}
                  aria-invalid={errors.hours ? "true" : "false"}
                  {...register("hours", { required: true, min: 1 })}
                />
                {errors.hours && <span>This field is required</span>}
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup className="BordCard">
                <Label className="font-medium-1">Price €</Label>
                <input
                  placeholder="3000"
                  className={classNames(
                    "form-control",
                    errors?.price && "is-invalid"
                  )}
                  type="number"
                  aria-invalid={errors.price ? "true" : "false"}
                  {...register("price", { required: true, min: 1 })}
                />
                {errors.price && <span>This field is required</span>}
              </FormGroup>
            </Col>
          </Row>
          <Row md={12} className={styles.StudentFormBottom}>
            <Col md={10} />
            <Col md={2}>
              <Button className={styles.button} color="success" type="submit">
                {location.state ? "save" : "Ajouter"}
              </Button>
            </Col>
          </Row>
        </form>
      </CardBody>
    </Card>
  );
}

export default StudentForm;
