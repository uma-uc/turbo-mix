import {Button as RadixButton, type ButtonProps as RadixButtonProps} from '@radix-ui/themes';
import type {IconType} from './icon';
import {Icon as ButtonIcon} from './icon';

export type ButtonProps = RadixButtonProps & {
  label?: string;
  icon?: IconType;
  position?: 'left' | 'right';
}
export const Button = ({label, icon,  position, children, ...props}: ButtonProps) => {
  if (icon) {
    const Icon = <ButtonIcon icon={icon} />;
    return (position==='right') ? <RadixButton {...props}>{label??children}{Icon}</RadixButton> :<RadixButton {...props}>{Icon}{label??children}</RadixButton>; 
  }
  if (!label || !children) {
    return <RadixButton {...props}>{label} {children}</RadixButton>;
  }
  return (position==='right') ? <RadixButton {...props}>{children}{label}</RadixButton> :<RadixButton {...props}>{children}{label}</RadixButton>; 
}