import React, { Component } from 'react';

import FormsList from '../FormsList/FormsList';

export class RouteHome extends Component {
  render() {
    return (
      <main className="route-home">
        <FormsList />
      </main>
    );
  }
}
