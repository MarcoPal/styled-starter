import {darken} from 'polished'
import {colors} from "./colors";


export const typography = {

  baseColor         : colors.primary,
  baseFontFamily    : "'Hind Madurai', sans-serif;",
  baseFontSize      : "1.6rem",
  baseFontWeight    : 400,
  baseFontWeightBold: 700,
  baseLineHeight    : 1.4,

  headingsFontFamily  : "'Montserrat', sans-serif",
  h1FontSize          : [20, 30, 40, 50], // small, medium, large, huge (from ./breakpoint.js)
  h2FontSize          : [18, 27, 36],
  h3FontSize          : [16, 24, 32],
  h4FontSize          : [14, 21, 28],
  h5FontSize          : [12, 18, 24],
  h6FontSize          : [10, 15, 20],
  headingsMarginBottom: "1.6rem",
  headingsFontWeight  : 800,

  paragraphMarginBottom: "1.6rem",

  linkColor          : colors.primary,
  linkDecoration     : "underline",
  linkFontWeight     : 500,
  linkHoverColor     : darken(.1, colors.primary),
  linkHoverDecoration: "underline"
};

