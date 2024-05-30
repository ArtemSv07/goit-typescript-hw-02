import css from "./ErrorMessage.module.css";

const ErrorMessage = (): JSX.Element => {
  return <p className={css.text}>Oops, an error occurred...</p>;
};
export default ErrorMessage;
