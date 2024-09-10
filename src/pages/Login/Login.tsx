import React, {useEffect, useState} from "react";
import styles from "./Login.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {authSelector, clearState, loginUser} from "../../util/slices/authSlice";
import {useNavigate} from "react-router-dom";
import {isPasswordValid, isValidEmail} from "../../util/helpers";
import {ROUTES} from "../../common/routes";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('dim040489@gmail.com');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('w1934skd');
  const [passwordError, setPasswordError] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const {isSuccess, isError} = useSelector(authSelector);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
    }

    if (isSuccess) {
      console.log(isSuccess)
      navigate(ROUTES.todolist);
    }
  }, [isError, isSuccess, dispatch]);

  function handleSubmit() {
    // @ts-ignore
    dispatch(loginUser({email, password, rememberMe}));
  }
  console.log(isPasswordValid(password))
  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')

    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if (!isPasswordValid(password)) {
      setPasswordError('Please enter a password')
      return
    }
    if (isValidEmail(email) && isPasswordValid(password) && rememberMe) {
      console.log(isPasswordValid(password))
      handleSubmit()
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
      <div>
        <input type='checkbox'
               className={styles.inputChecked}
               checked={rememberMe}
               onChange={() => setRememberMe(!rememberMe)}/>
        <p>RememberMe</p>
      </div>
      <br/>
      <div className={styles.inputContainer}>
        <input className={styles.inputButton} type="button" onClick={onButtonClick} value={'Log in'}/>
      </div>
    </div>
  );
}

