import React from "react";
import todo from '../../images/todo.png'
import './Menu.scss'
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../common/routes";
import LogoutIcon from '@mui/icons-material/Logout';

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='tl-menu'>
      <div className='tl-menu__body'>
        <div className='tl-menu__left'>
          <div className='tl-menu__logo' onClick={() => navigate(ROUTES.todolist)}>
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
          <LogoutIcon onClick={() => navigate(ROUTES.login)}/>
        </div>
      </div>
    </div>
  );
}
