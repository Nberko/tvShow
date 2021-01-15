import { ConnectedRouter } from "connected-react-router";
import { History } from 'history'
import routes from './router/routes'

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => ( /* receive history object via props */
  <ConnectedRouter history={history}>
    {routes}
  </ConnectedRouter>
)

export default App;
