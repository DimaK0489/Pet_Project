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
            <p>
              <img className={"tl-menu__icon"} src={todo} alt={'todo'}/>
            </p>
          </div>
        </div>
        <ul className='tl-menu__listItems'>
          <li className='tl-menu__item'>title</li>
          <li className='tl-menu__item'>title</li>
          <li className='tl-menu__item'>title</li>
        </ul>
        <div className='tl-menu__logOut'>
          <LogoutIcon onClick={() => navigate(ROUTES.login)}/>
        </div>
      </div>
    </div>
  );
}
