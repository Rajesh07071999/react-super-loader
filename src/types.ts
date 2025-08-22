export type LoaderType = 
  | 'spinner'
  | 'dots'
  | 'pulse'
  | 'wave'
  | 'bounce'
  | 'fade'
  | 'ring'
  | 'cube'
  | 'bars'
  | 'grid';

export type LoaderSize = 'small' | 'medium' | 'large' | 'xlarge';

export type LoaderPosition = 'inline' | 'top';

export interface LoaderProps {
  /** Type of loader animation */
  type?: LoaderType;
  /** Size of the loader */
  size?: LoaderSize;
  /** Color of the loader */
  color?: string;
  /** Background color */
  backgroundColor?: string;
  /** Custom CSS class name */
  className?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
  /** Text to display below the loader */
  text?: string;
  /** Whether the loader is visible */
  visible?: boolean;
  /** Speed of animation in seconds */
  speed?: number;
  /** Width of the loader container */
  width?: string | number;
  /** Height of the loader container */
  height?: string | number;
  /** Whether to show text */
  showText?: boolean;
  /** Text color */
  textColor?: string;
  /** Text size */
  textSize?: string;
  /** Position of the loader - 'inline' for normal flow, 'top' for fixed top overlay */
  position?: LoaderPosition;
} 