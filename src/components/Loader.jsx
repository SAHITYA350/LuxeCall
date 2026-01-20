import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [theme, setTheme] = useState('golden');
  const themes = ['black', 'silver', 'silk', 'white', 'golden'];

  useEffect(() => {
    // Cycle through themes every 2 seconds (optional - remove if you want static theme)
    const interval = setInterval(() => {
      setTheme(prev => {
        const currentIndex = themes.indexOf(prev);
        return themes[(currentIndex + 1) % themes.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledWrapper theme={theme}>
      {/* Premium Glassmorphism Background */}
      <div className="glass-background"></div>
      
      {/* Animated Gradient Background */}
      <div className="gradient-background"></div>
      
      {/* Geometric Patterns */}
      <div className="geometric-patterns">
        <div className="pattern pattern-1"></div>
        <div className="pattern pattern-2"></div>
        <div className="pattern pattern-3"></div>
      </div>

      {/* Loader Content */}
      <div className="loader-content">
        <div className="earth-container">
          {/* Premium Globe */}
          <div className="premium-globe">
            <div className="globe-sphere">
              {/* Continent Patterns */}
              <div className="continent continent-1"></div>
              <div className="continent continent-2"></div>
              <div className="continent continent-3"></div>
              <div className="continent continent-4"></div>
              <div className="continent continent-5"></div>
              
              {/* Grid Lines */}
              <div className="grid-line horizontal"></div>
              <div className="grid-line vertical"></div>
              <div className="grid-line meridian"></div>
              
              {/* Atmospheric Glow */}
              <div className="atmosphere"></div>
              
              {/* Rotating Rings */}
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
            
            {/* Orbiting Satellites */}
            <div className="satellite satellite-1"></div>
            <div className="satellite satellite-2"></div>
            <div className="satellite satellite-3"></div>
            
            {/* Shining Stars */}
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
          </div>
          
          {/* Connection Dots */}
          <div className="connection-dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
          </div>
          
          {/* Status Text with Theme Indicator */}
          <div className="status-container">
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

// Animations
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

const orbit = keyframes`
  0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /* Theme-based color variables */
  --theme-primary: ${props => {
    switch(props.theme) {
      case 'black': return '#1a1a1a';
      case 'silver': return '#c0c0c0';
      case 'silk': return '#f0e6d2';
      case 'white': return '#ffffff';
      case 'golden': return '#ffd700';
      default: return '#ffd700';
    }
  }};
  
  --theme-secondary: ${props => {
    switch(props.theme) {
      case 'black': return '#333333';
      case 'silver': return '#e8e8e8';
      case 'silk': return '#d4c4a8';
      case 'white': return '#f0f0f0';
      case 'golden': return '#ffed4e';
      default: return '#ffed4e';
    }
  }};
  
  --theme-accent: ${props => {
    switch(props.theme) {
      case 'black': return '#4a4a4a';
      case 'silver': return '#a0a0a0';
      case 'silk': return '#b8a992';
      case 'white': return '#d0d0d0';
      case 'golden': return '#b8860b';
      default: return '#b8860b';
    }
  }};
  
  --theme-glow: ${props => {
    switch(props.theme) {
      case 'black': return 'rgba(74, 74, 74, 0.3)';
      case 'silver': return 'rgba(192, 192, 192, 0.3)';
      case 'silk': return 'rgba(240, 230, 210, 0.3)';
      case 'white': return 'rgba(255, 255, 255, 0.3)';
      case 'golden': return 'rgba(255, 215, 0, 0.3)';
      default: return 'rgba(255, 215, 0, 0.3)';
    }
  }};

  /* Ultra Premium Glassmorphism Background */
  .glass-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => {
      switch(props.theme) {
        case 'black': return 'rgba(10, 10, 10, 0.95)';
        case 'silver': return 'rgba(32, 32, 32, 0.95)';
        case 'silk': return 'rgba(30, 25, 20, 0.95)';
        case 'white': return 'rgba(255, 255, 255, 0.95)';
        case 'golden': return 'rgba(20, 15, 0, 0.95)';
        default: return 'rgba(20, 15, 0, 0.95)';
      }
    }};
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    z-index: 1;
  }

  /* Animated Gradient Background */
  .gradient-background {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${props => {
      switch(props.theme) {
        case 'black': 
          return 'linear-gradient(45deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%, #0a0a0a 100%)';
        case 'silver':
          return 'linear-gradient(45deg, #202020 0%, #404040 25%, #606060 50%, #404040 75%, #202020 100%)';
        case 'silk':
          return 'linear-gradient(45deg, #1e1914 0%, #2e2924 25%, #3e3934 50%, #2e2924 75%, #1e1914 100%)';
        case 'white':
          return 'linear-gradient(45deg, #ffffff 0%, #f5f5f5 25%, #e8e8e8 50%, #f5f5f5 75%, #ffffff 100%)';
        case 'golden':
          return 'linear-gradient(45deg, #140f00 0%, #241f10 25%, #342f20 50%, #241f10 75%, #140f00 100%)';
        default:
          return 'linear-gradient(45deg, #140f00 0%, #241f10 25%, #342f20 50%, #241f10 75%, #140f00 100%)';
      }
    }};
    animation: ${shimmer} 20s linear infinite;
    opacity: 0.3;
    z-index: 0;
  }

  /* Geometric Patterns */
  .geometric-patterns {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    
    .pattern {
      position: absolute;
      background: var(--theme-glow);
      border-radius: 50%;
      
      &.pattern-1 {
        top: 10%;
        left: 10%;
        width: 100px;
        height: 100px;
        animation: ${float} 8s ease-in-out infinite;
      }
      
      &.pattern-2 {
        bottom: 15%;
        right: 15%;
        width: 150px;
        height: 150px;
        animation: ${float} 10s ease-in-out infinite reverse;
      }
      
      &.pattern-3 {
        top: 50%;
        left: 80%;
        width: 80px;
        height: 80px;
        animation: ${float} 12s ease-in-out infinite;
      }
    }
  }

  .loader-content {
    position: relative;
    z-index: 10;
    text-align: center;
    width: 100%;
    max-width: 600px;
  }

  .earth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  /* Premium Globe */
  .premium-globe {
    position: relative;
    width: 300px;
    height: 300px;
    
    .globe-sphere {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      background: ${props => {
        switch(props.theme) {
          case 'black': return 'radial-gradient(circle at 30% 30%, #1a1a1a, #000000)';
          case 'silver': return 'radial-gradient(circle at 30% 30%, #c0c0c0, #808080)';
          case 'silk': return 'radial-gradient(circle at 30% 30%, #f0e6d2, #d4c4a8)';
          case 'white': return 'radial-gradient(circle at 30% 30%, #ffffff, #e8e8e8)';
          case 'golden': return 'radial-gradient(circle at 30% 30%, #ffd700, #b8860b)';
          default: return 'radial-gradient(circle at 30% 30%, #ffd700, #b8860b)';
        }
      }};
      border-radius: 50%;
      box-shadow: 
        0 0 100px var(--theme-glow),
        inset 0 0 50px rgba(255, 255, 255, 0.1);
      animation: ${rotate} 20s linear infinite;
      
      /* Continents */
      .continent {
        position: absolute;
        background: ${props => {
          switch(props.theme) {
            case 'black': return '#333333';
            case 'silver': return '#a0a0a0';
            case 'silk': return '#d4c4a8';
            case 'white': return '#f0f0f0';
            case 'golden': return '#ffed4e';
            default: return '#ffed4e';
          }
        }};
        border-radius: 10px;
        
        &.continent-1 {
          top: 30%;
          left: 40%;
          width: 40px;
          height: 20px;
        }
        
        &.continent-2 {
          top: 50%;
          right: 30%;
          width: 50px;
          height: 30px;
        }
        
        &.continent-3 {
          bottom: 35%;
          left: 35%;
          width: 45px;
          height: 25px;
        }
        
        &.continent-4 {
          top: 20%;
          right: 20%;
          width: 35px;
          height: 15px;
        }
        
        &.continent-5 {
          bottom: 25%;
          right: 40%;
          width: 30px;
          height: 20px;
        }
      }
      
      /* Grid Lines */
      .grid-line {
        position: absolute;
        background: rgba(255, 255, 255, 0.1);
        
        &.horizontal {
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
        }
        
        &.vertical {
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
        }
        
        &.meridian {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          top: 0;
          left: 0;
          transform: rotate(45deg);
        }
      }
    }
    
    /* Atmosphere */
    .atmosphere {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 220px;
      height: 220px;
      border: 2px solid var(--theme-glow);
      border-radius: 50%;
      box-shadow: 0 0 60px var(--theme-glow);
      animation: ${pulse} 3s ease-in-out infinite;
    }
    
    /* Rings */
    .ring {
      position: absolute;
      top: 50%;
      left: 50%;
      border: 1px solid var(--theme-accent);
      border-radius: 50%;
      opacity: 0.3;
      
      &.ring-1 {
        width: 240px;
        height: 240px;
        animation: ${rotate} 15s linear infinite;
      }
      
      &.ring-2 {
        width: 260px;
        height: 260px;
        animation: ${rotate} 20s linear infinite reverse;
      }
      
      &.ring-3 {
        width: 280px;
        height: 280px;
        animation: ${rotate} 25s linear infinite;
      }
    }
    
    /* Satellites */
    .satellite {
      position: absolute;
      width: 8px;
      height: 8px;
      background: var(--theme-primary);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--theme-primary);
      
      &.satellite-1 {
        animation: ${orbit} 10s linear infinite;
      }
      
      &.satellite-2 {
        animation: ${orbit} 15s linear infinite reverse;
      }
      
      &.satellite-3 {
        animation: ${orbit} 20s linear infinite;
      }
    }
    
    /* Stars */
    .star {
      position: absolute;
      background: var(--theme-primary);
      border-radius: 50%;
      animation: ${twinkle} 2s ease-in-out infinite;
      
      &.star-1 {
        top: 10%;
        left: 20%;
        width: 3px;
        height: 3px;
        animation-delay: 0s;
      }
      
      &.star-2 {
        top: 20%;
        right: 30%;
        width: 4px;
        height: 4px;
        animation-delay: 0.5s;
      }
      
      &.star-3 {
        bottom: 30%;
        left: 15%;
        width: 2px;
        height: 2px;
        animation-delay: 1s;
      }
      
      &.star-4 {
        bottom: 20%;
        right: 20%;
        width: 3px;
        height: 3px;
        animation-delay: 1.5s;
      }
      
      &.star-5 {
        top: 40%;
        left: 10%;
        width: 2px;
        height: 2px;
        animation-delay: 2s;
      }
    }
  }

  /* Connection Dots */
  .connection-dots {
    display: flex;
    gap: 15px;
    margin-top: 20px;
    
    .dot {
      width: 12px;
      height: 12px;
      background: var(--theme-primary);
      border-radius: 50%;
      animation: ${pulse} 1.5s ease-in-out infinite;
      
      &.dot-1 { animation-delay: 0s; }
      &.dot-2 { animation-delay: 0.3s; }
      &.dot-3 { animation-delay: 0.6s; }
      &.dot-4 { animation-delay: 0.9s; }
      &.dot-5 { animation-delay: 1.2s; }
    }
  }

  /* Status Container */
  .status-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    
    .connecting-text {
      color: var(--theme-primary);
      font-size: 1.5em;
      font-weight: 300;
      letter-spacing: 2px;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      text-transform: uppercase;
      background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: ${pulse} 2s ease-in-out infinite;
    }
    
    .theme-indicator {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--theme-secondary);
      font-size: 0.9em;
      font-weight: 300;
      letter-spacing: 1px;
      
      .theme-value {
        color: var(--theme-primary);
        font-weight: 600;
        padding: 2px 8px;
        border: 1px solid var(--theme-accent);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
      }
    }
    
    .progress-bar {
      width: 200px;
      height: 3px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
      margin-top: 10px;
      
      .progress-fill {
        width: 30%;
        height: 100%;
        background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary));
        animation: ${shimmer} 2s infinite linear;
        border-radius: 3px;
      }
    }
  }

  /* Premium Responsive Design */
  @media (max-width: 1200px) {
    .premium-globe {
      width: 250px;
      height: 250px;
      
      .globe-sphere {
        width: 180px;
        height: 180px;
      }
      
      .atmosphere {
        width: 200px;
        height: 200px;
      }
      
      .ring {
        &.ring-1 {
          width: 210px;
          height: 210px;
        }
        
        &.ring-2 {
          width: 230px;
          height: 230px;
        }
        
        &.ring-3 {
          width: 250px;
          height: 250px;
        }
      }
    }
    
    .status-container .connecting-text {
      font-size: 1.3em;
    }
  }

  @media (max-width: 768px) {
    .premium-globe {
      width: 200px;
      height: 200px;
      
      .globe-sphere {
        width: 150px;
        height: 150px;
        
        .continent {
          &.continent-1 { width: 30px; height: 15px; }
          &.continent-2 { width: 40px; height: 25px; }
          &.continent-3 { width: 35px; height: 20px; }
          &.continent-4 { width: 25px; height: 10px; }
          &.continent-5 { width: 20px; height: 15px; }
        }
      }
      
      .atmosphere {
        width: 170px;
        height: 170px;
      }
      
      .ring {
        &.ring-1 {
          width: 180px;
          height: 180px;
        }
        
        &.ring-2 {
          width: 200px;
          height: 200px;
        }
        
        &.ring-3 {
          width: 220px;
          height: 220px;
        }
      }
      
      .satellite {
        width: 6px;
        height: 6px;
      }
    }
    
    .connection-dots {
      gap: 12px;
      
      .dot {
        width: 10px;
        height: 10px;
      }
    }
    
    .status-container {
      .connecting-text {
        font-size: 1.1em;
        letter-spacing: 1px;
      }
      
      .progress-bar {
        width: 180px;
      }
    }
  }

  @media (max-width: 480px) {
    .premium-globe {
      width: 160px;
      height: 160px;
      
      .globe-sphere {
        width: 120px;
        height: 120px;
        
        .continent {
          &.continent-1 { width: 25px; height: 12px; }
          &.continent-2 { width: 30px; height: 20px; }
          &.continent-3 { width: 28px; height: 16px; }
          &.continent-4 { width: 20px; height: 8px; }
          &.continent-5 { width: 16px; height: 12px; }
        }
      }
      
      .atmosphere {
        width: 140px;
        height: 140px;
      }
      
      .ring {
        &.ring-1 {
          width: 150px;
          height: 150px;
        }
        
        &.ring-2 {
          width: 170px;
          height: 170px;
        }
        
        &.ring-3 {
          width: 190px;
          height: 190px;
        }
      }
    }
    
    .connection-dots {
      gap: 10px;
      
      .dot {
        width: 8px;
        height: 8px;
      }
    }
    
    .status-container {
      .connecting-text {
        font-size: 1em;
        letter-spacing: 0.5px;
      }
      
      .theme-indicator {
        font-size: 0.8em;
      }
      
      .progress-bar {
        width: 150px;
      }
    }
  }

  @media (max-width: 320px) {
    .premium-globe {
      width: 140px;
      height: 140px;
      
      .globe-sphere {
        width: 100px;
        height: 100px;
      }
      
      .atmosphere {
        width: 120px;
        height: 120px;
      }
    }
    
    .status-container {
      .connecting-text {
        font-size: 0.9em;
      }
      
      .progress-bar {
        width: 130px;
      }
    }
  }

  /* High-resolution displays */
  @media (min-width: 1920px) {
    .premium-globe {
      width: 350px;
      height: 350px;
      
      .globe-sphere {
        width: 250px;
        height: 250px;
      }
      
      .atmosphere {
        width: 270px;
        height: 270px;
      }
      
      .ring {
        &.ring-1 {
          width: 290px;
          height: 290px;
        }
        
        &.ring-2 {
          width: 310px;
          height: 310px;
        }
        
        &.ring-3 {
          width: 330px;
          height: 330px;
        }
      }
    }
    
    .status-container .connecting-text {
      font-size: 1.8em;
    }
  }
`;

export default Loader;