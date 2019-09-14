import React from 'react';
import ReactDOM from 'react-dom';
import ProfileViewComponent from './Profile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileViewComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
