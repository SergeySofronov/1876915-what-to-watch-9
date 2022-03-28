function LoadingScreen(): JSX.Element {
  return (
    <p
      style={{
        position: 'fixed',
        top: '30px',
        right: '50%',
        padding: '10px',
        backgroundColor: '#d96666',
        color: 'white',
        borderRadius: '5px',
      }}
    >
      Loading ...
    </p>
  );
}

export default LoadingScreen;
