import {createGlobalStyle, css} from "styled-components";
import {normalize} from "polished";
import media from "styled-media-query";
import {screens} from './config/breakpoints';
import {fontsImport} from "./config/fontImport";


export const Style = createGlobalStyle`
  ${fontsImport}
  ${normalize()}
  
  ${({theme}) => css`
    
    html{
          font-size: 62.5%
      }  
      
    body{
      
      font-family: ${theme.typography.baseFontFamily};
      font-size: ${theme.typography.baseFontSize};
      font-weight: ${theme.typography.baseFontWeight};
      line-height: ${theme.typography.baseLineHeight};
      color: ${theme.typography.baseColor};
      background-color: ${theme.bodyBg};   

    }
    
    b, strong{
      font-weight: ${theme.typography.baseFontWeightBold};
    }
    
    h1, h2, h3, h4, h5, h6{
      margin-top: 0;
      font-family: ${theme.typography.headingsFontFamily};
      margin-bottom: ${theme.typography.headingsMarginBottom};
      font-weight: ${theme.typography.headingsFontWeight};
    }
    
    h1{
      font-size: 17px;
      ${mediaFontSize(theme.typography.h1FontSize)}
    }    
    
    h2{
      ${mediaFontSize(theme.typography.h2FontSize)}
    }

    h3{
      ${mediaFontSize(theme.typography.h3FontSize)}
    }

    h4{
      ${mediaFontSize(theme.typography.h4FontSize)}
    }

    h5{
      ${mediaFontSize(theme.typography.h5FontSize)}
    }

    h6{
      ${mediaFontSize(theme.typography.h6FontSize)}
    }
    
    p{
      margin-top: 0;
      margin-bottom: ${theme.typography.paragraphMarginBottom};
    }
    
    a{
      color: ${theme.typography.linkColor};
      text-decoration: ${theme.typography.linkDecoration};
      font-weight: ${theme.typography.linkFontWeight};
      &:hover{
        color: ${theme.typography.linkHoverColor};
        text-decoration: ${theme.typography.linkHoverDecoration};
      }
    }
    
    *{
      box-sizing: border-box;
    }

  `}
`;


function mediaFontSize (sizes) {
  if (typeof sizes !== 'object') return sizes;

  const screensKeys = Object.keys(screens);
  screensKeys.splice(0, 1);

  const base = css`font-size: ${sizes[0] / 10}rem`;
  sizes.splice(0, 1);

  const queries = sizes.map((size, i) => {
    return css`
      ${media.greaterThan(screensKeys[i])`
        font-size: ${size / 10}rem;
      `}
    `.join('');
  });

  return base.concat(queries.join(''));
}