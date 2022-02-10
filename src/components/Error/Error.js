import s from './Error.module.css';
export default function Error({ error }) {
  return <h2 className={s.header}>{error}</h2>;
}
