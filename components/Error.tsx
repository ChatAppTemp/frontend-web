import { CenterWrapper } from "@components/Containers";
import { BigTitle, Body } from "@components/Text";
import { PageError } from "@constants/errors";

const ErrorPage = ({ err }: { err: PageError }) => {
  const [err_text, err_code] = err;
  return (
    <CenterWrapper style={{ height: "100vh" }}>
      <BigTitle>{err_code}</BigTitle>
      <Body>{err_text}</Body>
    </CenterWrapper>
  );
};

export default ErrorPage;
