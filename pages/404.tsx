import ErrorPage from "../components/Error";
import { PageErrors } from "../constants/errors";

const Custom404 = () => {
  return <ErrorPage err={PageErrors.NotFound}></ErrorPage>;
};

export default Custom404;
