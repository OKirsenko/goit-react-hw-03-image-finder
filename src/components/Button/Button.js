import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ handleLoadMore }) {
  return (
    <button className={s.button} type="button" onClick={handleLoadMore}>
      Load more
    </button>
  );
}
Button.propTypes = {
  handleLoadMore: PropTypes.func,
};
