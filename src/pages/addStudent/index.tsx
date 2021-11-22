import loadable from "@loadable/component";
import { RouteComponentProps } from "react-router-dom";
import { Loading } from "../../components";

const StudentForm = loadable(() => import("../../components/studentForm"), {
  fallback: <Loading />,
});

export type Props = RouteComponentProps<{ id: string }>;

const AddStudent = (): JSX.Element => <StudentForm />;
export { AddStudent };
