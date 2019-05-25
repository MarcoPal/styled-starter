/**
 * same as styled-media-query
 */
export const screens = {
  small : 450,
  medium: 768,
  large : 1170,
  huge  : 1440
};

/**
 *  Required for styled-system
 */
export const breakpoints = Object.keys(screens).map(key => screens[key]);