import Icon, { iconList, IconProps as IcoMoonProps } from "react-icomoon";

import iconSet from "./icomoon/selection.json";
const iconNames =  iconSet.icons.map((icon) => icon.properties.name);
export type IconType = typeof iconNames[number];

export const IcoMoon = ({ size, icon, ...props }: IcoMoonProps) => (
  <Icon
    iconSet={iconSet}
    size={size || 16}
    icon={icon || "warning"}
    {...props}
  />
);
export const IcoMoonIconList = iconList(iconSet);
export default IcoMoon;
