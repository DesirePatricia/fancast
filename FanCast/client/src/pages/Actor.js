import React, { Component } from 'react';

export class Actor extends Component {
  static displayName = Actor.name;

  render() {
    return (
      <div>
        <h1>Actor</h1>
        <h2>List of Top Fan Casts</h2>
        <div>
            <p>Book</p>
            <p>Rank</p>
        </div>
        <div>
            <p>Book</p>
            <p>Rank</p>
        </div>
      </div>
    );
  }
}
