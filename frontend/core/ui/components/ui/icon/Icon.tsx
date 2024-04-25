import { IcoMoon, IcoMoonIconList} from "./IcoMoon";
import { IconProps } from "./icon.types";
export type { IconType } from './IcoMoon';
export type { IconProps };

export const Icon = ({ As, icon, ...props }: IconProps) => {
  if (As) {
    return <As {...props} />;
  } 
  return <IcoMoon icon={icon??'warning'} {...props} />;
};
export { IcoMoonIconList };
export default Icon;
