import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserData } from '../../types/user-data';
import { makeUserLogOut } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAuthStatusSelector, useUserDataSelector } from '../../hooks/selectors';

const AUTH_TEXT_CONTENT = 'Sign out';
const NON_AUTH_TEXT_CONTENT = 'Sign in';

const getUserAvatar = (userData: UserData): JSX.Element => (
  <div className="user-block__avatar">
    <Link to={AppRoute.MyList}>
      <img src={userData.avatarUrl} alt="User avatar" width="63" height="63" />
    </Link>
  </div>
);

function Avatar(): JSX.Element {

  const authorizationStatus = useAuthStatusSelector();
  const link = authorizationStatus !== AuthorizationStatus.Auth ? AppRoute.SignIn : '#';
  const userData = useUserDataSelector();
  const dispatch = useDispatch();

  const onSingClick: MouseEventHandler = (evt) => {
    const target = evt.target as HTMLElement;
    if (target.textContent === AUTH_TEXT_CONTENT) {
      dispatch(makeUserLogOut());
    }
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        {(authorizationStatus === AuthorizationStatus.Auth) && getUserAvatar(userData)}
      </li>
      <li className="user-block__item">
        <Link onClick={onSingClick} to={link} className="user-block__link">
          {authorizationStatus === AuthorizationStatus.Auth ? AUTH_TEXT_CONTENT : NON_AUTH_TEXT_CONTENT}
        </Link>
      </li>
    </ul >
  );
}

export default Avatar;
