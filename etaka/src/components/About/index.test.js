
import React from 'react';
import { render } from '@testing-library/react';
import { About } from '.';


describe('About Component', () => {
  it('should render without errors', () => {
    const { getByText, getAllByText } = render(<About />);
    
    const titleElement = getByText(/About Us/i);
    expect(titleElement).toBeInTheDocument();
    
    const visionElement = getByText(/Vision/i);
    expect(visionElement).toBeInTheDocument();
    
    const coreValuesElement = getByText(/Core Values/i);
    expect(coreValuesElement).toBeInTheDocument();
    
    const vCutoutElements = getAllByText(/Customer Satisfaction|Community Engagement|Sustainabilty/i);
    expect(vCutoutElements.length).toBe(3); 
    
  });
});
