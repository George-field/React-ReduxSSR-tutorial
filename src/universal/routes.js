import React from 'react';
import { Switch, Route } from 'react-router';
import Home  from '../containers/home';
import AppContainer from '../containers/appContainer'

// for more details see https://reacttraining.com/react-router/web/guides/server-rendering
// specify routes with the asnyc function required to fetch the data to render the route
// IMPORTANT: the loadData function must return a Promise
export const routes = [{
  path: '/home',
  exact: true,
  component: Home,
},];

export default function Router() {
  return (
    <AppContainer>
      <Switch>
        {routes.map(route => (
          <Route key={route.path || 'notfound'} {...route} />
        ))}
      </Switch>
    </AppContainer>
  );
}
