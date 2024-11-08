import { FC } from 'react';

interface SvgIconProps {
  title: string;
  viewBox: string;
  id: string;
  width: string;
  height: string;
  children: React.ReactNode; // The SVG content (path, circle, etc.)
  ariaLabelledBy?: string;
}

export const CustomSvgIcon: FC<SvgIconProps> = ({
  children,
  width,
  height,
  title,
  id,
  viewBox,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}>
    <title id={id}>{title}</title>
    {children}
  </svg>
);
