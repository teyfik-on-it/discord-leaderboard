import { Redirect, Route, Switch } from 'react-router-dom';
import Leaderboard from './Routes/Leaderboard';
import NotFound from './Routes/NotFound';

const Routes = () => {
  return (
    <div className="h-full max-w-3xl mx-auto flex items-center">
      <div className={'w-full px-4'}>
        <Switch>
          <Route path={'/leaderboard'} component={Leaderboard}/>
          <Route path={'/'} exact>
            <Redirect to={'/leaderboard'}/>
          </Route>
          <Route path={'*'} component={NotFound}/>
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
