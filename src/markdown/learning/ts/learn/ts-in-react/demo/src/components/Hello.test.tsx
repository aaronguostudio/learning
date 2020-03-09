import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="Aaron" />)
  expect(hello.find(".greeting").text()).toEqual("Hello Aaron1")
})

it('renders the correct text when enthusiasm level is 8', () => {
  const hello = enzyme.shallow(<Hello name="Bob" enthusiasmLevel={8} />)
  expect(hello.find('.greeting').text()).toEqual("Hello Bob8")
})

it('throws when the enthusiasm level is 0', () => {
  // const hello = 
  expect(() => {
    enzyme.shallow(<Hello name="Bob" enthusiasmLevel={0} />);
  }).toThrow();
})

it('throws when the enthusiasm level is -1', () => {
  // const hello = 
  expect(() => {
    enzyme.shallow(<Hello name="Bob" enthusiasmLevel={-1} />);
  }).toThrow();
})