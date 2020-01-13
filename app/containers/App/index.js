/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Leaderboard from 'containers/Leaderboard';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <React.Fragment>
      <Helmet
        titleTemplate="Leaderboard Rock Scissor Paper"
        defaultTitle="Leaderboard Rock Scissor Paper"
      >
        <meta name="description" content="A Rock Scissor Paper Leaderboard" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Leaderboard} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
