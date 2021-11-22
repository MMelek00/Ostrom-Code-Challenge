import { FC, memo } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { AppState } from "../../store";
import { StudentList } from "../../components";
import styles from "./styles.module.scss";

export type Props = RouteComponentProps;

const Home: FC<Props> = (): JSX.Element => {
  const studentsList = useSelector(
    (state: AppState) => state.studentList,
    shallowEqual
  );
  const renderList = () => <StudentList items={studentsList} />;

  return (
    <div className={styles.Home}>
      <Helmet title="Home" />
      {renderList()}
    </div>
  );
};
export default memo(Home);
