/**
 * ModernBackground component
 * A collection of modern, dynamic background effects with a consistent pattern
 */

const ModernBackground = ({ type = "default", softened = false }) => {
  // All sections will use the same base pattern with subtle variations
  // to create cohesive flow between sections
  return (
    <>
      {/* Every section uses diagonal pattern for consistency */}
      <div className={`mil-modern-bg mil-diagonal-pattern ${softened ? 'mil-softened' : ''}`}></div>
      
      {/* Add subtle secondary patterns based on section type */}
      {type === "particles" && (
        <div className="mil-modern-bg mil-particles mil-subtle">
          <div className="mil-particle"></div>
          <div className="mil-particle"></div>
          <div className="mil-particle"></div>
        </div>
      )}
      
      {type === "wave" && (
        <div className="mil-modern-bg mil-gradient-wave mil-subtle"></div>
      )}
      
      {type === "dots" && (
        <div className="mil-modern-bg mil-dotted-pattern mil-subtle"></div>
      )}
      
      {type === "diagonal" && (
        <div className="mil-modern-bg mil-diagonal-accent mil-subtle"></div>
      )}
      
      {type === "combined" && (
        <div className="mil-modern-bg mil-gradient-wave mil-subtle"></div>
      )}
    </>
  );
};

export default ModernBackground; 