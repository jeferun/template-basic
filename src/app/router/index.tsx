import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PATHS } from '../router/constants';
import Loading from '../components/Loading';
const login = lazy(() => import('../screens/Login'));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path={PATHS.LOGIN} component={login} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
