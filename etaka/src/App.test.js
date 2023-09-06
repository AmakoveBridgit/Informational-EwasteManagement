import { render} from '@testing-library/react';
import App from './App';

it('displays the Services component', () => {
  const { getByText } = render(<App />);
  const aboutHeading = getByText('Services', { exact: false }); // Use { exact: false } for partial text matching
  expect(aboutHeading).toBeInTheDocument();
});


