import { LoaderSize, LoaderType } from './types';

export const sizeMap: Record<LoaderSize, number> = {
  small: 20,
  medium: 40,
  large: 60,
  xlarge: 80,
};

export const getLoaderStyles = (
  type: LoaderType,
  size: LoaderSize,
  color: string,
  speed: number
): string => {
  const sizeValue = sizeMap[size];
  
  const baseStyles = `
    .react-super-loader {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .react-super-loader-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      color: inherit;
      margin: 0;
    }
  `;

  const loaderStyles = {
    spinner: `
      .react-super-loader-spinner {
        width: ${sizeValue}px;
        height: ${sizeValue}px;
        border: 3px solid transparent;
        border-top: 3px solid ${color};
        border-radius: 50%;
        animation: spin ${speed}s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `,
    
    dots: `
      .react-super-loader-dots {
        display: flex;
        gap: 4px;
      }
      
      .react-super-loader-dots .dot {
        width: ${sizeValue / 4}px;
        height: ${sizeValue / 4}px;
        background-color: ${color};
        border-radius: 50%;
        animation: dots ${speed}s ease-in-out infinite;
      }
      
      .react-super-loader-dots .dot:nth-child(1) { animation-delay: 0s; }
      .react-super-loader-dots .dot:nth-child(2) { animation-delay: ${speed * 0.2}s; }
      .react-super-loader-dots .dot:nth-child(3) { animation-delay: ${speed * 0.4}s; }
      
      @keyframes dots {
        0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
        40% { transform: scale(1); opacity: 1; }
      }
    `,
    
    pulse: `
      .react-super-loader-pulse {
        width: ${sizeValue}px;
        height: ${sizeValue}px;
        background-color: ${color};
        border-radius: 50%;
        animation: pulse ${speed}s ease-in-out infinite;
      }
      
      @keyframes pulse {
        0% { transform: scale(0.8); opacity: 0.5; }
        50% { transform: scale(1.2); opacity: 1; }
        100% { transform: scale(0.8); opacity: 0.5; }
      }
    `,
    
    wave: `
      .react-super-loader-wave {
        display: flex;
        gap: 3px;
      }
      
      .react-super-loader-wave .bar {
        width: 3px;
        height: ${sizeValue}px;
        background-color: ${color};
        animation: wave ${speed}s ease-in-out infinite;
      }
      
      .react-super-loader-wave .bar:nth-child(1) { animation-delay: 0s; }
      .react-super-loader-wave .bar:nth-child(2) { animation-delay: ${speed * 0.1}s; }
      .react-super-loader-wave .bar:nth-child(3) { animation-delay: ${speed * 0.2}s; }
      .react-super-loader-wave .bar:nth-child(4) { animation-delay: ${speed * 0.3}s; }
      .react-super-loader-wave .bar:nth-child(5) { animation-delay: ${speed * 0.4}s; }
      
      @keyframes wave {
        0%, 40%, 100% { transform: scaleY(0.4); }
        20% { transform: scaleY(1); }
      }
    `,
    
    bounce: `
      .react-super-loader-bounce {
        width: ${sizeValue}px;
        height: ${sizeValue}px;
        background-color: ${color};
        border-radius: 50%;
        animation: bounce ${speed}s ease-in-out infinite;
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-${sizeValue * 0.3}px); }
        60% { transform: translateY(-${sizeValue * 0.15}px); }
      }
    `,
    
    fade: `
      .react-super-loader-fade {
        width: ${sizeValue}px;
        height: ${sizeValue}px;
        background-color: ${color};
        border-radius: 50%;
        animation: fade ${speed}s ease-in-out infinite;
      }
      
      @keyframes fade {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
    `,
    
    ring: `
      .react-super-loader-ring {
        width: ${sizeValue}px;
        height: ${sizeValue}px;
        border: 3px solid transparent;
        border-top: 3px solid ${color};
        border-right: 3px solid ${color};
        border-radius: 50%;
        animation: ring ${speed}s linear infinite;
      }
      
      @keyframes ring {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `,
    
    cube: `
      .react-super-loader-cube {
        width: ${sizeValue}px;
        height: ${sizeValue}px;
        position: relative;
        transform-style: preserve-3d;
        animation: cube ${speed}s linear infinite;
      }
      
      .react-super-loader-cube .face {
        position: absolute;
        width: ${sizeValue}px;
        height: ${sizeValue}px;
        background-color: ${color};
        opacity: 0.8;
      }
      
      .react-super-loader-cube .front { transform: rotateY(0deg) translateZ(${sizeValue / 2}px); }
      .react-super-loader-cube .back { transform: rotateY(180deg) translateZ(${sizeValue / 2}px); }
      .react-super-loader-cube .right { transform: rotateY(90deg) translateZ(${sizeValue / 2}px); }
      .react-super-loader-cube .left { transform: rotateY(-90deg) translateZ(${sizeValue / 2}px); }
      .react-super-loader-cube .top { transform: rotateX(90deg) translateZ(${sizeValue / 2}px); }
      .react-super-loader-cube .bottom { transform: rotateX(-90deg) translateZ(${sizeValue / 2}px); }
      
      @keyframes cube {
        0% { transform: rotateX(0deg) rotateY(0deg); }
        100% { transform: rotateX(360deg) rotateY(360deg); }
      }
    `,
    
    bars: `
      .react-super-loader-bars {
        display: flex;
        gap: 2px;
      }
      
      .react-super-loader-bars .bar {
        width: 4px;
        height: ${sizeValue}px;
        background-color: ${color};
        animation: bars ${speed}s ease-in-out infinite;
      }
      
      .react-super-loader-bars .bar:nth-child(1) { animation-delay: 0s; }
      .react-super-loader-bars .bar:nth-child(2) { animation-delay: ${speed * 0.1}s; }
      .react-super-loader-bars .bar:nth-child(3) { animation-delay: ${speed * 0.2}s; }
      .react-super-loader-bars .bar:nth-child(4) { animation-delay: ${speed * 0.3}s; }
      
      @keyframes bars {
        0%, 40%, 100% { transform: scaleY(0.4); }
        20% { transform: scaleY(1); }
      }
    `,
    
    grid: `
      .react-super-loader-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2px;
        width: ${sizeValue}px;
        height: ${sizeValue}px;
      }
      
      .react-super-loader-grid .cell {
        background-color: ${color};
        animation: grid ${speed}s ease-in-out infinite;
      }
      
      .react-super-loader-grid .cell:nth-child(1) { animation-delay: 0s; }
      .react-super-loader-grid .cell:nth-child(2) { animation-delay: ${speed * 0.1}s; }
      .react-super-loader-grid .cell:nth-child(3) { animation-delay: ${speed * 0.2}s; }
      .react-super-loader-grid .cell:nth-child(4) { animation-delay: ${speed * 0.3}s; }
      .react-super-loader-grid .cell:nth-child(5) { animation-delay: ${speed * 0.4}s; }
      .react-super-loader-grid .cell:nth-child(6) { animation-delay: ${speed * 0.5}s; }
      .react-super-loader-grid .cell:nth-child(7) { animation-delay: ${speed * 0.6}s; }
      .react-super-loader-grid .cell:nth-child(8) { animation-delay: ${speed * 0.7}s; }
      .react-super-loader-grid .cell:nth-child(9) { animation-delay: ${speed * 0.8}s; }
      
      @keyframes grid {
        0%, 70%, 100% { transform: scale(0); opacity: 0.5; }
        35% { transform: scale(1); opacity: 1; }
      }
    `,
  };

  return baseStyles + loaderStyles[type];
}; 