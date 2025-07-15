import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedLogoWrapperProps {
  className?: string;
}

const AnimatedLogoWrapper = ({ className = "" }: AnimatedLogoWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add keyframe animations to the document
    const style = document.createElement("style");
    style.textContent = `
      @keyframes svgFadeInPath {
        from {
          opacity: 0;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        to {
          opacity: 1;
          stroke-dashoffset: 0;
        }
      }
      
      @keyframes svgScaleIn {
        from {
          transform: scale(0);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
      
      @keyframes svgRotateIn {
        from {
          transform: rotate(-180deg) scale(0);
          opacity: 0;
        }
        to {
          transform: rotate(0deg) scale(1);
          opacity: 1;
        }
      }
      
      @keyframes svgPulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
    `;
    document.head.appendChild(style);
    
    const loadAndAnimateSvg = async () => {
      if (!containerRef.current) return;
      
      try {
        const response = await fetch("/logo.svg");
        const svgText = await response.text();
        
        // Create a temporary container to parse SVG
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = svgText;
        const svgElement = tempDiv.querySelector("svg");
        
        if (!svgElement) return;
        
        // Add class for overall animation
        svgElement.classList.add("animated-svg");
        
        // Ensure SVG maintains proper sizing
        svgElement.style.width = "100%";
        svgElement.style.height = "auto";
        svgElement.style.display = "block";
        
        // Add animation classes to different elements
        const paths = svgElement.querySelectorAll("path");
        const circles = svgElement.querySelectorAll("circle");
        const rects = svgElement.querySelectorAll("rect");
        const ellipses = svgElement.querySelectorAll("ellipse");
        const polygons = svgElement.querySelectorAll("polygon");
        
        // Add stagger animation to paths
        paths.forEach((path, index) => {
          path.style.opacity = "0";
          path.style.animation = `svgFadeInPath 0.15s ease-out ${index * 0.003}s forwards`;
        });
        
        // Add scale animation to circles
        circles.forEach((circle, index) => {
          circle.style.transformOrigin = "center";
          circle.style.animation = `svgScaleIn 0.15s ease-out ${index * 0.005}s forwards`;
        });
        
        // Add rotate animation to rectangles
        rects.forEach((rect, index) => {
          rect.style.transformOrigin = "center";
          rect.style.animation = `svgRotateIn 0.2s ease-out ${index * 0.005}s forwards`;
        });
        
        // Add pulse animation to ellipses
        ellipses.forEach((ellipse, index) => {
          ellipse.style.transformOrigin = "center";
          ellipse.style.animation = `svgScaleIn 0.15s ease-out ${index * 0.004}s forwards, svgPulse 1.5s ease-in-out ${index * 0.02}s infinite`;
        });
        
        // Add animation to polygons
        polygons.forEach((polygon, index) => {
          polygon.style.transformOrigin = "center";
          polygon.style.animation = `svgRotateIn 0.15s ease-out ${index * 0.005}s forwards`;
        });
        
        // Clear and append the animated SVG
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(svgElement);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };
    
    loadAndAnimateSvg();
    
    // Cleanup
    return () => {
      const styles = document.querySelectorAll("style");
      styles.forEach(s => {
        if (s.textContent?.includes("svgFadeInPath")) {
          s.remove();
        }
      });
    };
  }, []);
  
  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{
        opacity: { duration: 0.15 },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    />
  );
};

export default AnimatedLogoWrapper;