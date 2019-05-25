import {colors} from "./colors";
import {darken} from "polished";

export const buttons = {
  primary       : {
    color          : colors.white,
    backgroundColor: colors.primary,
    border         : `1px solid ${colors.primary}`,
    '&:hover'      : {
      backgroundColor: darken(.05, colors.primary)
    }
  },
  secondary     : {
    color          : colors.white,
    backgroundColor: colors.secondary,
    border         : `1px solid ${colors.secondary}`,
    '&:hover'      : {
      backgroundColor: darken(.05, colors.secondary)
    }
  },
  primaryOutline: {
    color          : colors.primary,
    backgroundColor: colors.white,
    border         : `1px solid ${colors.primary}`,
    '&:hover'      : {
      color          : colors.white,
      backgroundColor: colors.primary
    }
  }
};