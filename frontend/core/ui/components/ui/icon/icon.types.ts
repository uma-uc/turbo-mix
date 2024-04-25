import React from "react";

export type IconProps = {
  /**
   * @remarks The size of the icon
   * @example "1em", "100px"
   * @defaultValue "1em"
   */
  size?: string | number;
  /**
   * @remarks The color of the icon
   * @example "red.500", "green.300", "red"
   * @defaultValue "currentColor"
   */
  color?: string;
  /**
   * @remarks prop to allow the icon to use chakra ui icons from "@chakra-ui/icons";
   * @example <Icon as={AddIcon} />
   */
  As?: React.ElementType;
  /**
   * @remarks prop to allow the icon to use icomoon icons from "./IcoMoon";
   * @example <Icon icon={"IcoMoonIcon"}  />
   */
  icon?: string;
} & Record<string, any>;
