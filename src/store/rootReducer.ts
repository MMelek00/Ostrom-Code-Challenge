import { History } from "history";
import { connectRouter } from "connected-react-router";

import studentList  from "./student";
// Use inferred return type for making correctly Redux types
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (history: History) => ({
  studentList,
  router: connectRouter(history) as any,
  // Register more reducers...
});
