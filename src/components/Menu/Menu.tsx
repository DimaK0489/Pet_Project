import React from "react";
import todo from '../../images/todo.png'
import './Menu.scss'
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../common/routes";
import LogoutIcon from '@mui/icons-material/Logout';
import {logout} from "../../util/slices/authSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {getToken} from "../../util/api";

export const Menu: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  let authenticated = !!getToken();

  const handleToTodolist = () => {
    authenticated ? navigate(ROUTES.todolist) : alert('You are not authorized')
  }

  return (
    <div className='tl-menu'>
      <div className='tl-menu__body'>
        <div className='tl-menu__left'>
          <div className='tl-menu__logo' onClick={handleToTodolist}>
            <p className='tl-menu__titleLogo'> Todolist</p>
            <img className={"tl-menu__icon"} src={todo} alt={'todo'}/>
          </div>
        </div>
        <ul className='tl-menu__listItems'>
          <li className='tl-menu__item'>Calendar</li>
          <li className='tl-menu__item'>Profile</li>
          <li className='tl-menu__item'>Settings</li>
        </ul>
        <div className='tl-menu__logOut'>
          <LogoutIcon onClick={() => dispatch(logout())}/>
        </div>
      </div>
    </div>
  );
}
