import React, { Component } from 'react';

export class Books extends Component {
  static displayName = Books.name;

  render() {
    return (
      <div>
        <h1>Book</h1>
        <h2>List of Top Actors</h2>
            <h2>List for Character</h2>
                <div>
                    <p>Rank</p>
                    <p>Actor</p>
                </div>
                <div>
                    <p>Rank</p>
                    <p>Actor</p>
                </div>
      </div>
    );
  }
}
