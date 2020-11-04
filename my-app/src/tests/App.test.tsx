import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux'
import store from '../store'
import renderer from 'react-test-renderer'

test('renders learn react link', () => {
  const app = renderer.create(<Provider store={store}><App /></Provider>);
  expect(app).toMatchSnapshot()
});
