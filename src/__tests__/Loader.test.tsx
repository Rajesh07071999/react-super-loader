import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../index';

describe('Loader Component', () => {
  beforeEach(() => {
    // Clear any existing styles
    const existingStyles = document.querySelectorAll('style');
    existingStyles.forEach(style => style.remove());
  });

  it('renders with default props', () => {
    render(<Loader />);
    const loader = screen.getByText('Loading...');
    expect(loader).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<Loader text="Please wait..." />);
    const loader = screen.getByText('Please wait...');
    expect(loader).toBeInTheDocument();
  });

  it('does not render when visible is false', () => {
    render(<Loader visible={false} />);
    const loader = screen.queryByText('Loading...');
    expect(loader).not.toBeInTheDocument();
  });

  it('does not render text when showText is false', () => {
    render(<Loader showText={false} />);
    const loader = screen.queryByText('Loading...');
    expect(loader).not.toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Loader className="custom-loader" />);
    const container = screen.getByText('Loading...').parentElement;
    expect(container).toHaveClass('custom-loader');
  });

  it('renders with custom style', () => {
    render(<Loader style={{ backgroundColor: 'red' }} />);
    const container = screen.getByText('Loading...').parentElement;
    expect(container).toHaveStyle({ backgroundColor: 'red' });
  });

  it('renders different loader types', () => {
    const types = ['spinner', 'dots', 'pulse', 'wave', 'bounce', 'fade', 'ring', 'cube', 'bars', 'grid'];
    
    types.forEach(type => {
      const { unmount } = render(<Loader type={type as any} />);
      const container = screen.getByText('Loading...').parentElement;
      expect(container).toBeInTheDocument();
      unmount();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['small', 'medium', 'large', 'xlarge'];
    
    sizes.forEach(size => {
      const { unmount } = render(<Loader size={size as any} />);
      const container = screen.getByText('Loading...').parentElement;
      expect(container).toBeInTheDocument();
      unmount();
    });
  });

  it('applies custom colors', () => {
    render(<Loader color="#ff0000" textColor="#00ff00" />);
    const container = screen.getByText('Loading...').parentElement;
    expect(container).toHaveStyle({ color: '#00ff00' });
  });

  it('applies custom dimensions', () => {
    render(<Loader width="200px" height="100px" />);
    const container = screen.getByText('Loading...').parentElement;
    expect(container).toHaveStyle({ width: '200px', height: '100px' });
  });

  it('applies custom text size', () => {
    render(<Loader textSize="20px" />);
    const text = screen.getByText('Loading...');
    expect(text).toHaveStyle({ fontSize: '20px' });
  });
}); 