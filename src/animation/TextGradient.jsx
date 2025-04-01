import './TextGradient.css'

export default function TextGradient({
  children,
  className = '',
  colors = ['#A88C76', '#f4f4f4', '#A88C76', '#f4f4f4', '#A88C76'], 
  animationSpeed = 8, 
  showBorder = false, 
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}