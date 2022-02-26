import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type PropsTypes = {
  isLogoLight?: boolean;
};

function Logo({ isLogoLight = false }: PropsTypes): JSX.Element {
  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={`logo__link ${isLogoLight ? 'logo__link--light' : ''}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
