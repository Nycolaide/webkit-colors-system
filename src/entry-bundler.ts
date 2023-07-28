/**
 * webkit-colors-system
 * @description Kit for get color in system color scheme inspired to Apple System.
 *
 * @company Minedelve
 * @package webkit-colors-system
 * @author Laurent Grimaldi <laurent.grimaldi@minedelve.com>
 * @repository https://github.com/minedelve/webkit-colors-system
 * @copyright (c) 2023 Minedelve
 */

import { basic } from './libs/basic';
import { naming } from './libs/naming';
import { system } from './libs/system';
import { variant as variantList } from './libs/variant';

function getSystemColor(
  key: string,
  dark: boolean = false,
  variant: boolean = false,
  accessible: boolean = false,
): string | undefined {
  const name = naming.hasOwnProperty(key) && naming[key];

  if (!name) return undefined;

  let list = { ...basic, ...system };

  if (variant) list = { ...variantList, ...system };

  if (accessible) {
    if (dark) return list[name].accessibleDark;
    else return list[name].accessibleLight;
  } else {
    if (dark) return list[name].defaultDark;
    else return list[name].defaultDark;
  }
}

export { getSystemColor, naming as systemColor };
