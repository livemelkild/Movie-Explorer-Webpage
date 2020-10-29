import React from 'react';
import renderer from 'react-test-renderer';
//const renderer = require('react-test-renderer')

import Movie from '../Components/Movie/Movie'; 

test('Movie snapshot test', () => {

    const tree = renderer.create(<Movie/>).toJSON()

    expect(tree).toMatchSnapshot()

})


