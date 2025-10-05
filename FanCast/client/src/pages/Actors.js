import React, { Component } from 'react';
import { ActorBlurb } from '../components/ActorBlurb';

export class Actors extends Component {
  static displayName = Actors.name;

  render() {
    return (
      <div>
        <h1>List of Actors</h1>
            <ActorBlurb></ActorBlurb>
      </div>
    );
  }
}
