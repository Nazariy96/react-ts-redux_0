import { render } from '@testing-library/react';
import Home from '../pages/home/Home'



test('renders home component', () => {
  render(<Home/>);
});
test('img exist in home component', () => {
  const {getByAltText} = render(<Home/>)
  const img = getByAltText("logo redux")
  expect(img).toBeTruthy()
});
test('renders a message', () => {
  const {container,getByText} = render(<Home/>)
  expect(getByText('Home...just filling for test')).toBeInTheDocument()
  expect(container.querySelector("h1")).toMatchInlineSnapshot(`
  <h1>
    Home...just filling for test
  </h1>
  `)
})
test('renders a image', () => {
  const {container,getByRole} = render(<Home/>)
  expect(getByRole('img', { name: 'logo redux'})).toBeInTheDocument()
  expect(container.querySelector("img"))
})