type PropsTypes = {
  buttonClickHandler: () => void;
};

function ShowMoreButton({ buttonClickHandler }: PropsTypes): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={buttonClickHandler}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
