import { FC } from 'react';
import { CustomSvgIcon } from '../CustomSVGIcons/CustomSVGIcons';

type Props = {
  primaryColor?: ColorGamut;
  color?: string;
  width?: string;
  height?: string;
};

export const Drag: FC<Props> = () => (
  <CustomSvgIcon viewBox="0 0 20 10" width="20" height="10" title="drag field" id="drag-field">
    <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
  </CustomSvgIcon>
);
