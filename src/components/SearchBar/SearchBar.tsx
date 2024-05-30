import { Formik, Form, Field, FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
import { SearchValue, SearchBarProps } from "./searchBarTypes";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (
    value: SearchValue,
    actions: FormikHelpers<SearchValue>
  ) => {
    !value.name
      ? toast("Text must be entered to search for images")
      : onSearch(value.name);

    actions.resetForm();
  };
  return (
    <header className={css.container}>
      <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            autoComplete="off"
            autoFocus
            type="text"
            name="name"
            placeholder="Search images and photos"
          />

          <button className={css.btn} type="submit">
            <FcSearch />
          </button>
          <Toaster position="top-right" />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
