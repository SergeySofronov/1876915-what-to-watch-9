import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeUserLogOut } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAuthStatusSelector } from '../../hooks/selectors';
import { getUserAvatarUrl } from '../../services/token';

const AUTH_TEXT_CONTENT = 'Sign out';
const NON_AUTH_TEXT_CONTENT = 'Sign in';

const getUserAvatar = (): JSX.Element => (
  <div className="user-block__avatar">
    <Link to={AppRoute.MyList}>
      <img src={getUserAvatarUrl()} alt="User avatar" width="63" height="63" />
    </Link>
  </div>
);

function Avatar(): JSX.Element {

  const authorizationStatus = useAuthStatusSelector();
  const link = authorizationStatus !== AuthorizationStatus.Auth ? AppRoute.SignIn : '#';
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
        {(authorizationStatus === AuthorizationStatus.Auth) && getUserAvatar()}
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
