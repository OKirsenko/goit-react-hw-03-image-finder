import { BallTriangle } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.loader}>
      <BallTriangle heigth="100" width="100" color="blue" ariaLabel="loading" />
    </div>
  );
}
