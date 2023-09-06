import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { VCutout } from '.';

describe('VCutout Component', () => {
  it('renders the component with given props', () => {
    const props = {
      triangleColor: 'red',
      imageUrl: 'example.jpg',
      h1: 'Heading',
      text: 'Some text',
      fontSize: '16px',
    };

    const { container, getByText } = render(<VCutout {...props} />);

    const vCutout = container.querySelector('.vCutout');
    expect(vCutout).toBeInTheDocument();

    const image = container.querySelector('.imageStyle');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'example.jpg');
    expect(image).toHaveAttribute('alt', 'VCutout');

    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();

    const textElement = getByText('Some text');
    expect(textElement).toBeInTheDocument();

   
  });

  it('renders the component without an image when imageUrl is not provided', () => {
    const props = {
      triangleColor: 'red',
      h1: 'Heading',
      text: 'Some text',
    };

    const { container } = render(<VCutout {...props} />);

    const image = container.querySelector('.imageStyle');
    expect(image).not.toBeInTheDocument();
  });
});
