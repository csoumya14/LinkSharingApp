import { FC } from 'react';
import { CustomSvgIcon } from '../CustomSVGIcons/CustomSVGIcons';

type Props = {
  primaryColor?: ColorGamut;
  color?: string;
  width?: string;
  height?: string;
};

export const Hashnode: FC<Props> = ({ color }) => (
  <CustomSvgIcon viewBox="-5 -5 30 20" width="30" height="20" title="hashnode logo" id="hashnode">
    <g clipPath="url(#a)">
      <path
        fill={color}
        d="M1.1 5.347c-1.466 1.438-1.466 3.84 0 5.306L5.346 14.9c1.437 1.466 3.84 1.466 5.306 0l4.247-4.247c1.465-1.465 1.465-3.868 0-5.306L10.653 1.1C9.187-.366 6.784-.366 5.347 1.1L1.099 5.347ZM9.86 9.86a2.63 2.63 0 0 1-3.716 0 2.624 2.624 0 0 1 0-3.716 2.624 2.624 0 0 1 3.715 0 2.63 2.63 0 0 1 0 3.716Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </CustomSvgIcon>
);
