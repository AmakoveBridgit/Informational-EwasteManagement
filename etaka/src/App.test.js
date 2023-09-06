import { render} from '@testing-library/react';
import App from './App';

it('displays the About component', () => {
  const { getByText } = render(<App />);
  const aboutHeading = getByText('About Us', { exact: false }); // Use { exact: false } for partial text matching
  expect(aboutHeading).toBeInTheDocument();
});


