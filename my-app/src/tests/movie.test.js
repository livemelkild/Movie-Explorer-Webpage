import React from 'react'
import renderer from 'react-test-renderer'


import Movie from "../components/Movie/Movie"

test('Movie snapshot test', () => {

    const tree = renderer.create(<Movie />)

    expect(tree).toMatchSnapshot()

});