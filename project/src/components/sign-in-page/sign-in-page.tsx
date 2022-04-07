import { FormEventHandler, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import { makeUserLogIn } from '../../store/api-actions';

function SignInPage(): JSX.Element {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onFormSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();
    if (emailRef.current && passwordRef.current) {
      dispatch(makeUserLogIn({ login: emailRef.current.value, password: passwordRef.current.value }));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onFormSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password (digits and letters)" name="user-password" id="user-password" pattern='\D+\d+' required />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;
