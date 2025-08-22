# React Super Loader 🚀

A beautiful, customizable loading component for React applications with multiple animation styles. Perfect for modern web applications that need elegant loading states.

![React Super Loader](https://img.shields.io/badge/React-18+-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)
![NPM](https://img.shields.io/badge/NPM-Package-orange?logo=npm)
![Downloads](https://img.shields.io/npm/dw/react-super-loader)
![Version](https://img.shields.io/npm/v/react-super-loader)

## ✨ Features

- 🎨 **10 Beautiful Animation Types**: spinner, dots, pulse, wave, bounce, fade, ring, cube, bars, grid
- 📏 **4 Size Options**: small, medium, large, xlarge
- 🎨 **Fully Customizable**: colors, speed, text, dimensions
- 📱 **Responsive**: Works on all screen sizes
- ⚡ **Lightweight**: No external dependencies
- 🔧 **TypeScript**: Full TypeScript support
- 🎯 **Accessible**: Proper ARIA attributes and keyboard navigation
- 🚀 **Modern**: Built with React 18+ and modern JavaScript
- 🔝 **Top Position**: Google-style top loader with smooth animations

## 📦 Installation

```bash
npm install react-super-loader
```

or

```bash
yarn add react-super-loader
```

## 🚀 Quick Start

```jsx
import { Loader } from 'react-super-loader';

function App() {
  return (
    <div>
      <Loader type="spinner" size="medium" />
    </div>
  );
}
```

## 📖 Usage Examples

### Basic Usage

```jsx
import { Loader } from 'react-super-loader';

// Default spinner
<Loader />

// Different types
<Loader type="dots" />
<Loader type="pulse" />
<Loader type="wave" />
<Loader type="bounce" />
<Loader type="fade" />
<Loader type="ring" />
<Loader type="cube" />
<Loader type="bars" />
<Loader type="grid" />
```

### Customization

```jsx
// Custom colors and size
<Loader 
  type="spinner"
  size="large"
  color="#ff6b6b"
  backgroundColor="#f8f9fa"
/>

// Custom speed and text
<Loader 
  type="wave"
  speed={2}
  text="Please wait..."
  textColor="#333"
/>

// Custom dimensions
<Loader 
  type="cube"
  width="200px"
  height="200px"
  showText={false}
/>

// With custom styling
<Loader 
  type="pulse"
  className="my-custom-loader"
  style={{ 
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}
/>

// Google-style top loader
<Loader 
  type="wave"
  size="small"
  color="#4285f4"
  text="Searching..."
  position="top"
/>
```

### Conditional Loading

```jsx
import { useState } from 'react';
import { Loader } from 'react-super-loader';

function DataComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(data => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <Loader 
          type="dots" 
          size="large"
          text="Loading data..."
          color="#007bff"
        />
      </div>
    );
  }

  return <div>{/* Your data content */}</div>;
}
```

### Multiple Loaders

```jsx
function LoaderShowcase() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      <Loader type="spinner" text="Spinner" />
      <Loader type="dots" text="Dots" />
      <Loader type="pulse" text="Pulse" />
      <Loader type="wave" text="Wave" />
      <Loader type="bounce" text="Bounce" />
      <Loader type="fade" text="Fade" />
      <Loader type="ring" text="Ring" />
      <Loader type="cube" text="Cube" />
      <Loader type="bars" text="Bars" />
      <Loader type="grid" text="Grid" />
    </div>
  );
}
```

## 🎨 Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `LoaderType` | `'spinner'` | Animation type |
| `size` | `LoaderSize` | `'medium'` | Size of the loader |
| `color` | `string` | `'#007bff'` | Color of the loader |
| `backgroundColor` | `string` | `'transparent'` | Background color |
| `className` | `string` | `''` | Custom CSS class |
| `style` | `CSSProperties` | `{}` | Custom inline styles |
| `text` | `string` | `'Loading...'` | Text to display |
| `visible` | `boolean` | `true` | Whether to show the loader |
| `speed` | `number` | `1` | Animation speed in seconds |
| `width` | `string \| number` | `'auto'` | Container width |
| `height` | `string \| number` | `'auto'` | Container height |
| `showText` | `boolean` | `true` | Whether to show text |
| `textColor` | `string` | `color` | Text color |
| `textSize` | `string` | `'14px'` | Text font size |
| `position` | `'inline' \| 'top'` | `'inline'` | Position of the loader |

## 🎯 Loader Types

- **spinner**: Classic rotating spinner
- **dots**: Three bouncing dots
- **pulse**: Pulsing circle
- **wave**: Animated wave bars
- **bounce**: Bouncing ball
- **fade**: Fading circle
- **ring**: Rotating ring
- **cube**: 3D rotating cube
- **bars**: Animated bars
- **grid**: Grid of fading squares

## 🔝 Position Options

- **inline**: Normal flow positioning (default)
- **top**: Fixed overlay at the top of the page (Google-style)

## 📏 Size Options

- **small**: 20px
- **medium**: 40px
- **large**: 60px
- **xlarge**: 80px

## 🌟 Why Choose React Super Loader?

- **🎨 Beautiful Animations**: 10 different animation types to choose from
- **🔝 Google-Style Top Loader**: Perfect for search operations and page transitions
- **⚡ Lightweight**: No external dependencies, pure React and CSS
- **🔧 TypeScript Ready**: Full TypeScript support with comprehensive types
- **📱 Responsive**: Works perfectly on all devices and screen sizes
- **🎯 Highly Customizable**: Colors, sizes, speeds, and more
- **🚀 Modern**: Built with React 18+ and modern JavaScript
- **📦 Easy to Use**: Simple API with sensible defaults

## 🛠️ Development

### Prerequisites

- Node.js 14+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/Rajesh07071999/react-super-loader.git
cd react-super-loader

# Install dependencies
npm install

# Start development mode
npm run dev

# Build the package
npm run build

# Run tests
npm test

# Run Storybook
npm run storybook
```

### Scripts

- `npm run build` - Build the package
- `npm run dev` - Development mode with watch
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern loading patterns
- Built with React and TypeScript
- Styled with CSS animations

