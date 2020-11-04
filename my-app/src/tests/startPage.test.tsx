import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { idText } from 'typescript';
import Start_page from '../Components/Next_page/Start_page';


test('Page snapshot test', () => {
    const page = renderer.create(<Start_page/>)
    expect(page).toMatchSnapshot()

})