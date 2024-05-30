import { LoadMoreBtnProps } from "./LoadMoreProps";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ nextPage }: LoadMoreBtnProps): JSX.Element => {
  return (
    <button className={css.btn} onClick={() => nextPage()}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
