import { FC } from 'react';
import { CustomSvgIcon } from '../CustomSVGIcons/CustomSVGIcons';

type Props = {
  primaryColor?: ColorGamut;
  color?: string;
  width?: string;
  height?: string;
};

export const IconArrowRight: FC<Props> = () => (
  <CustomSvgIcon viewBox="-5 -5 30 20" width="30" height="20" title="arrow right" id="arrowRight">
    <path
      fill="#fff"
      d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
    />
  </CustomSvgIcon>
);
