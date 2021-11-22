/* eslint-disable jsx-a11y/control-has-associated-label */
import { memo } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeStudent } from "../../store/student";
import { Student } from "../../services/jsonPlaceholder";
import styles from "./styles.module.scss";

interface Props {
  items: Student[];
}
function List({ items }: Props): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Card className={styles.StudentsList}>
      <CardBody>
        <Button
          color="success"
          size="sm"
          onClick={() => history.push("/addStudent")}
        >
          Add Student
        </Button>
        <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Course</th>
            <th>Hours</th>
            <th>Price</th>
            <th />
            <th />
          </tr>
          {items.map(
            ({ id, firstName, lastName, birthday, course, hours, price }) => (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{birthday}</td>
                <td>{course}</td>
                <td>{hours}</td>
                <td>{price}</td>
                <td>
                  {" "}
                  <Button
                    block
                    color="success"
                    outline
                    size="sm"
                    onClick={() =>
                      history.push({
                        pathname: "/addStudent",
                        state: { id, firstName, lastName, birthday, course, hours, price } as Student,
                      })
                    }
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  {" "}
                  <Button
                    block
                    color="success"
                    outline
                    size="sm"
                    onClick={() => dispatch(removeStudent(id))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )
          )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default memo(List);
