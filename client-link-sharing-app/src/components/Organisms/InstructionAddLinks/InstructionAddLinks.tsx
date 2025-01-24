import { FC, useEffect, useRef, useState } from 'react';

import { Container, StyledHeading, StyledPara } from './InstructionAddLinks.style';
import { IllustrationAddLinks } from '../../Atoms/SVGs/IllustrationAddLinks/IllustrationAddLinks';

interface InstructionAddLinksProps {}
export const InstructionAddLinks: FC<InstructionAddLinksProps> = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [svgSize, setSvgSize] = useState({ width: 120, height: 100 });

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current) {
        const parentWidth = parentRef.current.offsetWidth;
        const parentHeight = parentRef.current.offsetHeight;

        // Adjust SVG size based on parent size
        const calculatedWidth = parentWidth * 0.8; // Example: 50% of parent width
        const calculatedHeight = parentHeight * 0.8; // Example: 50% of parent height

        setSvgSize({
          width: Math.min(calculatedWidth, 300), // Limit maximum width
          height: Math.min(calculatedHeight, 200), // Limit maximum height
        });
      }
    };

    // Run on mount
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Container ref={parentRef}>
      <IllustrationAddLinks
        viewBox="0 0 120 100"
        width={`${svgSize.width}px`}
        height={`${svgSize.height}px`}
      />
      <StyledHeading textLevel="h2" role="heading" aria-level={2}>
        Lets get you started
      </StyledHeading>
      <StyledPara>
        Use the "Add new link" button to get started. Once you have more than one link, you can
        reorder and edit them. We're here to help you share your profiles with everyone!
      </StyledPara>
    </Container>
  );
};
