import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClickLoadMore }) => {
  const onClickBtn = () => {
    onClickLoadMore();
  };
  return (
    <>
      <LoadMore type="button" onClick={onClickBtn}>
        Load more
      </LoadMore>
    </>
  );
};

Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};

export default Button;
