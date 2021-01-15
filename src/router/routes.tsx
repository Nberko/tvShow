import { Route, Switch } from 'react-router'
import Home from '../components/mainPage'
import Episode from '../components/tvEpisode'

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:season/:id/:title" component={Episode} />
  </Switch>
);

export default routes;