import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions, UserInterface, initialUser } from '../../../ducks/auth';
import Background from '../../assets/img/user.png';
import styles from './styles.module.scss';

function FormLogin() {
  const dispatch = useDispatch();

  const [user, setUser] = useState<UserInterface>(initialUser);
  const [count, setCount] = useState(0);

  const handleCapture = (e: ChangeEvent<HTMLInputElement>) => (
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return (dispatch(authActions.login(user)));
  };

  return (
    <div className={styles.container}>
      <form className={styles['login-container']} onSubmit={handleSubmit}>
        <img src={Background} alt="img-avatar" className={styles['img-avatar']} />
        <input className={styles['input-data']} onChange={handleCapture} name='name' type="text" placeholder="Usuario" />
        <input className={styles['input-data']} onChange={handleCapture} name='password' type="text" placeholder="Contraseña" />
        <button
          className={styles[count % 2 === 0 ? 'btn-on' : 'btn-on-impar']}
          // onClick={handleClick}
          onClick={() => setCount(count + 1)}
        >Entrar</button>
      </form>
    </div>
  );
}

export default FormLogin;
