import { RouteConfig, renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";

import config from "../config";
// Import your global styles here
import "normalize.css/normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.scss";

interface Route {
  route: { routes: RouteConfig[] };
}

const App = ({ route }: Route): JSX.Element => (
  <div className={styles.App}>
    <Helmet {...config.APP} />
    {renderRoutes(route.routes)}
  </div>
);

export default App;
