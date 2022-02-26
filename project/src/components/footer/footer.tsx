import Logo from '../logo/logo';

function Footer(): JSX.Element {
  const date = new Date().getFullYear();
  return (
    <footer className="page-footer">
      <Logo isLogoLight />
      <div className="copyright">
        <p>© {date} What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
