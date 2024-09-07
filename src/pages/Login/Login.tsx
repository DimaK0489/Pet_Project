import React, {useState} from "react";
import styles from "./Login.module.scss"

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')

    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }

  }
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div>Login</div>
      </div>
      <br/>
      <div className={styles.inputContainer}>
        <input value={email}
               className={styles.inputBox}
               placeholder={'Enter your email here'}
               onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <label className={styles.errorLabel}>{emailError}</label>
      </div>
      <br/>
      <div className={styles.inputContainer}>
        <input value={password}
               className={styles.inputBox}
               placeholder={'Enter your password here'}
               onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <label className={styles.errorLabel}>{passwordError}</label>
      </div>
      <br/>
      <div className={styles.inputContainer}>
        <input className={styles.inputButton} type="button" onClick={onButtonClick} value={'Log in'}/>
      </div>
    </div>
  );
}
