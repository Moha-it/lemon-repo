import { render, screen } from '@testing-library/react';
import App from './App';
import Heading from './components/site-pages-sections/head/Heading';

test('renders learn react link', () => {
  render(<Heading />);
  const heading = screen.getByTestId("chead-reserve"); 
  const btn = screen.getByTestId("tbl-reserve"); 
  fireEvent.click(btn); 
  // expect(linkElement).toBeInTheDocument();
  expect(heading).toHaveTextContent("Reserve a table");
});
