import React, { useEffect, useRef } from 'react';
import { LoaderProps, LoaderType } from './types';
import { getLoaderStyles } from './styles';

const Loader: React.FC<LoaderProps> = ({
  type = 'spinner',
  size = 'medium',
  color = '#007bff',
  backgroundColor = 'transparent',
  className = '',
  style = {},
  text = 'Loading...',
  visible = true,
  speed = 1,
  width,
  height,
  showText = true,
  textColor,
  textSize,
}) => {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    // Remove existing style tag if it exists
    if (styleRef.current) {
      document.head.removeChild(styleRef.current);
    }

    // Create new style tag
    const styleTag = document.createElement('style');
    styleTag.textContent = getLoaderStyles(type, size, color, speed);
    document.head.appendChild(styleTag);
    styleRef.current = styleTag;

    // Cleanup on unmount
    return () => {
      if (styleRef.current && document.head.contains(styleRef.current)) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, [type, size, color, speed]);

  if (!visible) return null;

  const containerStyle: React.CSSProperties = {
    width: width || 'auto',
    height: height || 'auto',
    backgroundColor,
    color: textColor || color,
    ...style,
  };

  const textStyle: React.CSSProperties = {
    fontSize: textSize || '14px',
    color: textColor || color,
  };

  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return <div className="react-super-loader-spinner" />;
      
      case 'dots':
        return (
          <div className="react-super-loader-dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        );
      
      case 'pulse':
        return <div className="react-super-loader-pulse" />;
      
      case 'wave':
        return (
          <div className="react-super-loader-wave">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        );
      
      case 'bounce':
        return <div className="react-super-loader-bounce" />;
      
      case 'fade':
        return <div className="react-super-loader-fade" />;
      
      case 'ring':
        return <div className="react-super-loader-ring" />;
      
      case 'cube':
        return (
          <div className="react-super-loader-cube">
            <div className="face front" />
            <div className="face back" />
            <div className="face right" />
            <div className="face left" />
            <div className="face top" />
            <div className="face bottom" />
          </div>
        );
      
      case 'bars':
        return (
          <div className="react-super-loader-bars">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        );
      
      case 'grid':
        return (
          <div className="react-super-loader-grid">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="cell" />
            ))}
          </div>
        );
      
      default:
        return <div className="react-super-loader-spinner" />;
    }
  };

  return (
    <div
      className={`react-super-loader ${className}`}
      style={containerStyle}
    >
      {renderLoader()}
      {showText && text && (
        <p className="react-super-loader-text" style={textStyle}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader; 