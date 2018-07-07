import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import LintersTable from '../linters-table/linters-table';
import {AboutPage} from '../about-page/about-page';
import {MainHeader} from '../main-header/main-header';

export default () =>
  <div>
    <MainHeader/>
    <Switch>
      <Route exact={false} path="/catalog/:sortType/:sortDirection" component={LintersTable}/>
      <Route path="/about" component={AboutPage}/>
      <Redirect to="/catalog/name/asc"/>
    </Switch>
  </div>;
