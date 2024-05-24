import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../src/routes';
import DefaultLayout from '../src/layouts';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setAuthToken } from './utils';
import { store } from './redux/store';
import Loading from './components/Loading';
import { logout } from './redux/auth/actions';

if (localStorage.headers) {
  const headers = JSON.parse(localStorage.headers);

  if (headers) {
    setAuthToken(headers);
  } else {
    setAuthToken({});
    store.dispatch(logout());
  }
} else {
  setAuthToken({});
}

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const authSelector = useSelector(({ auth } : any) => auth);
  const checkUserLoggedIn = () => authSelector.authenticated ? true : false
  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const isLoggedIn = await checkUserLoggedIn();
        setUserLogin(isLoggedIn);
      } catch (error) {
        console.error('Error checking user login:', error);
      }
    };

    checkUserLogin();
  }, [authSelector.authenticated]);
    
  return (
    <Router>
      <Loading isLoading={authSelector.loading}/>
      <div className="App">
        <Routes>
            {userLogin &&
                privateRoutes.map((routes, index) => {
                    return (
                        <Route
                            key={index}
                            path={routes.path}
                            element={
                                <DefaultLayout>
                                    <routes.component />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            {!userLogin &&
                publicRoutes.map((routes, index) => {
                    return (
                        <Route
                            key={index}
                            path={routes.path}
                            element={
                                <DefaultLayout>
                                    <routes.component />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    </Router>
  );
}

export default App;
