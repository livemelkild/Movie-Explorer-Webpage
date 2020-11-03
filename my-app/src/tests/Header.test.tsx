
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../store'

const TestRenderer = require('react-test-renderer'); // ES5 with npm

import Header from "../components/Header/Header.tsx"

test('Header snapshot test', () => {

    const tree = renderer.create(<Header/>)

    expect(tree).toMatchSnapshot()
});