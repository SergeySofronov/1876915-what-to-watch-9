import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type AvatarProps = {
  authorizationStatus: AuthorizationStatus;
}

const getUserAvatar = (): JSX.Element => (
  <div className="user-block__avatar">
    <Link to={AppRoute.MyList}>
      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
    </Link>
  </div>
);

function Avatar({ authorizationStatus }: AvatarProps): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Auth && getUserAvatar()}
      </li>
      <li className="user-block__item">
        <Link to={AppRoute.SignIn} className="user-block__link">{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</Link>
      </li>
    </ul>
  );
}

export default Avatar;
