import PropTypes from 'prop-types';

import css from '../Button/Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button className={css.btn} onClick={loadMore} type="button">
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
