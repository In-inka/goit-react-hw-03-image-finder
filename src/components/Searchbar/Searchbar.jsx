import { Formik } from 'formik';
import {
  Head,
  SearchForm,
  Btn,
  Label,
  MyStyledInput,
} from './Searchbar.styled';

const initialValues = {
  name: '',
};

const Searchbar = ({ onSubmit }) => {
  const onSubmitNameSearch = (values, { resetForm }) => {
    onSubmit(values.name);
    resetForm();
  };

  return (
    <>
      <Head>
        <Formik initialValues={initialValues} onSubmit={onSubmitNameSearch}>
          <SearchForm htmlFor="name">
            <Btn type="submit">
              <Label>Search</Label>
            </Btn>

            <MyStyledInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="name"
            />
          </SearchForm>
        </Formik>
      </Head>
    </>
  );
};

export default Searchbar;
