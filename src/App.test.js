import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {HashRouter} from "react-router-dom";
import React from "react";

test('renders learn react link', () => {
  render(<HashRouter> <App /> </HashRouter>);
  const linkElement = screen.getByText(/Start/i);
  expect(linkElement).toBeInTheDocument();
});

test('Silly test',()=>{
  expect(2+2).toBe(4);
})

test('Button test',async ()=>{
  render(<HashRouter> <App /> </HashRouter>)

  expect(screen.getByText("pre-click"))
      .toBeInTheDocument();

  // await fireEvent.click(screen.getByTestId("btn-test"))
  //
  // expect(await screen.getByText("post-click"))
  //     .toBeInTheDocument();

})
