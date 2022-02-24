import Logo from '../logo/logo';
import Footer from '../footer/footer';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLogoLight={false} />
      </header>

      <div className="user-page__content">
        <h1 className="page-title user-page__title">404 page not found</h1>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
