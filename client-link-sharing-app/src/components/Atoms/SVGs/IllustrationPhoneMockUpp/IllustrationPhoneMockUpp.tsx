import { FC } from 'react';
import { CustomSvgIcon } from '../CustomSVGIcons/CustomSVGIcons';
import { LinkFieldValues } from '../../../../types/formValues';
import { PreviewLinkList } from '../../../Molecules/PreviewLinkList/PreviewLinkList';

type Props = {
  primaryColor?: ColorGamut;
  color?: string;
  width: string;
  height: string;
  viewBox: string;
  links: LinkFieldValues['links'];
  profileImage?: string; // Profile image URL
  firstNameLastName?: string; // Concatenated firstName and lastName
  email?: string; // Email address
};

export const IllustrationPhoneMockUpp: FC<Props> = ({
  width,
  height,
  viewBox,
  links,
  profileImage,
  firstNameLastName,
  email,
}) => {
  const rectYStart = 278; // Starting y-coordinate for the first rect
  const rectHeight = 44; // Height of each rect
  const rectWidth = 237;
  const rectGap = 64; // Gap between rectangles
  const maxRects = 5; // Maximum number of rectangles visible
  console.log('imageinsvg', profileImage);
  return (
    <CustomSvgIcon
      viewBox={viewBox}
      width={width}
      height={height}
      title="Illustration of a  phone mock up"
      id="illustration-phone-mockup"
    >
      <path
        stroke="#737373"
        d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
      />
      <path
        fill="#fff"
        stroke="#737373"
        d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
      />

      {profileImage ? (
        <>
          <circle
            cx="153.5"
            cy="112"
            r="52" // Slightly larger than the image circle (48)
            fill="none"
            stroke="#633cff" // Border color
            strokeWidth="4" // Thickness of the border
          />
          <image
            href={profileImage}
            x="105" // Adjusted to align the image properly
            y="64" // Adjusted to align the image properly
            width="96"
            height="96"
            clipPath="circle(48px at center)"
          />
        </>
      ) : (
        <circle cx="153.5" cy="112" r="48" fill="#EEE" />
      )}

      {firstNameLastName ? (
        <text
          x="105" // Align text inside the rectangle
          y="185" // Adjust for vertical alignment
          fontSize="15"
          fontWeight={600}
          fill="#000"
          style={{ whiteSpace: 'pre' }}
        >
          {firstNameLastName}
        </text>
      ) : (
        <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
      )}

      {email ? (
        <text
          x="105" // Align text inside the rectangle
          y="205" // Adjust for vertical alignment
          fontSize="12"
          fill="#000"
          rx="4"
        >
          {email}
        </text>
      ) : (
        <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />
      )}
      {/* Dynamic Rectangles and Content */}
      {Array.from({ length: maxRects }).map((_, index) => (
        <g key={index}>
          {/* Render the rectangle */}
          <rect
            width={rectWidth}
            height={rectHeight}
            x="35"
            y={rectYStart + index * rectGap}
            fill="#EEE"
            rx="8"
          />
          {/* Render the link content if available */}
          {links[index] && (
            <foreignObject
              x="35" // Adjusted slightly for padding
              y={rectYStart + index * 64} // Center the content vertically
              width={rectWidth} // Width of the content area inside the rectangle
              height={rectHeight} // Slight padding
            >
              <div>
                <PreviewLinkList link={links[index]} />
              </div>
            </foreignObject>
          )}
        </g>
      ))}
    </CustomSvgIcon>
  );
};
