import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { idText } from 'typescript';
import Start_page from '../Components/Next_page/Start_page';
import { BrowserRouter } from 'react-router-dom';


test('Page snapshot test', () => {
    const page = renderer.create(<BrowserRouter><Start_page/></BrowserRouter>) 
    expect(page).toMatchSnapshot()

})