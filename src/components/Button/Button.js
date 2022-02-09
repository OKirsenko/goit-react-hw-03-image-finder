import './Button.css';
export default function Button({ handleLoadMore }) {
  return (
    <button className="button" type="button" onClick={handleLoadMore}>
      Load more
    </button>
  );
}
