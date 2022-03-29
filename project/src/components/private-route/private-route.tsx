import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAuthStatusSelector } from '../../hooks/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAuthStatusSelector();
  return authorizationStatus === AuthorizationStatus.Auth ? props.children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRoute;
