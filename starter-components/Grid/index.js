import styled from 'styled-components/macro';
import {space, width, alignItems, justifyContent} from 'styled-system';


export const Container = styled.div`
  max-width: ${props => props.expanded ? 'none' : (props.theme.maxWidth) + 'px'};
  ${space}
`;

export const Row = styled(Container)`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  ${space}  
  ${justifyContent}
  ${alignItems}
`;

export const Col = styled.div`
  width: ${props => props.width || "100%"};
  padding-left: ${props => props.pl || Math.round(props.theme.gutter / 2) + 'px'};
  padding-right: ${props => props.pr || Math.round(props.theme.gutter / 2) + 'px'};
  ${width}
  ${space}    
`;