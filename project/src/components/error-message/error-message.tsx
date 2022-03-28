import { useHttpErrorMessageSelector } from '../../hooks/selectors';

function ErrorMessage(): JSX.Element | null {

  const error = useHttpErrorMessageSelector();

  if (!error) {
    return null;
  }

  return (
    <div
      className="user-page__content"
      style={{
        top: '30px',
        right: '30px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#d96666',
        color: 'white',
      }}
    >
      <p>{error}</p>
    </div>
  );
}

export default ErrorMessage;
