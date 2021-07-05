import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact>
       <AllMeetups />
     </Route>
      <Route path='/favorites'>
        <Favorites/>
      </Route>
      <Route path='/newmeetup'>
        <NewMeetup/>
      </Route>
    </Switch>
  </div>;

}

export default App;
