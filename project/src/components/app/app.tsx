import MainPage from '../main-page/main-page';
import FilmCard from '../film-card/film-card';

type PropsTypes = {
  emptyAnchor: string;
  filmsDefaultQuantity: number;
  promoProps: {
    [props: string]: string;
  }
};

function App(props: PropsTypes): JSX.Element {
  return (
    <MainPage
      logoAnchor={props.emptyAnchor}
      userAnchor={props.emptyAnchor}
      promoProps={props.promoProps}
    >
      {Array.from({ length: props.filmsDefaultQuantity }, FilmCard)}
    </MainPage>
  );
}

export default App;
