import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Components from '../pages/Components/Components';

export default function Routes() {

  return (
    <Switch>
      <Route path="/#" exact component={Components} />
      <Route path="/" exact component={Components} />
      <Route
        path="*"
        component={() => (
          <img
            src="https://cdn.vortx.com.br/images/imgs/erro404.jpg"
            style={{ width: '100%' }}
            alt="not found"
          />
        )}
      />
    </Switch>
  );
}
