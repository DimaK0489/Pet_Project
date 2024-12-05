import React, {useState} from "react";
import styles from "./Login.module.scss"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {isPasswordValid, isValidEmail} from "../../util/helpers";
import {ROUTES} from "../../common/routes";
import {AppDispatch} from "../../store/store";
import {useLoginMutation} from "../../util/api/authApi";
import {setToken} from "../../util/api";
import {setUser} from "../../util/slices/authSlice";

export const Login = () => {
  const [login, {isLoading}] = useLoginMutation();
  const [userInfo, setUserInfo] = useState({
    email: 'dim040489@gmail.com',
    password: 'w1934skd',
    rememberMe: true,
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleLogin = async (token: string) => {
    await setToken(token);
    dispatch(setUser({token: token}));
    navigate(ROUTES.todolist)
  }

  const handleSubmit = async () => {
    try {
      const resp: any = await login(userInfo).unwrap();
      const token = await resp.data.token
      if (resp.resultCode === 0) {
        await handleLogin(token)
      }
    } catch (error) {
      console.log(error)
    }
  };

  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')

    if ('' === userInfo.email) {
      setEmailError('Please enter your email')
      return
    }

    if (!isValidEmail(userInfo.email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if (!isPasswordValid(userInfo.password)) {
      setPasswordError('Please enter a password')
      return
    }
    if (isValidEmail(userInfo.email) && isPasswordValid(userInfo.password) && userInfo.rememberMe) {
      handleSubmit()
    }

    if (userInfo.password.length < 7) {
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
        <input value={userInfo.email}
               className={styles.inputBox}
               placeholder={'Enter your email here'}
               onChange={(event) => setUserInfo({...userInfo, email: event.currentTarget.value})}
        />
        <label className={styles.errorLabel}>{emailError}</label>
      </div>
      <br/>
      <div className={styles.inputContainer}>
        <input value={userInfo.password}
               className={styles.inputBox}
               placeholder={'Enter your password here'}
               onChange={(event) => setUserInfo({...userInfo, password: event.currentTarget.value})}
        />
        <label className={styles.errorLabel}>{passwordError}</label>
      </div>
      <br/>
      <div className={styles.inputChecked}>
        <input type='checkbox'
               checked={userInfo.rememberMe}
               onChange={() => setUserInfo({...userInfo, rememberMe: !userInfo.rememberMe})}/>
        <label className={styles.checkboxTitle}>RememberMe</label>
      </div>
      <br/>
      <div className={styles.inputContainer}>
        <input className={styles.inputButton}
               type="button"
               onClick={onButtonClick}
               disabled={isLoading}
               value={'Log in'}/>
      </div>
    </div>
  );
}

