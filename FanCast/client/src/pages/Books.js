import React, { Component } from 'react';
import { BookBlurb } from '../components/BookBlurb';

export class Books extends Component {
  static displayName = Books.name;

  render() {
    return (
      <div>
        <h1>List of Books</h1>
        <BookBlurb></BookBlurb>
      </div>
    );
  }
}
