import styled from 'styled-components';
import {device} from "../../../../styles/device";

interface Props {
    align?: string;
    fontSize?: string;
    color?: string;
    weight?: string
}

export const Typography = styled.p<Props>`
  color: ${p => p.color ? p.color : 'var(--color)'};
  text-align: ${p => p.align ? p.align : 'center'};
  padding: 2px;
  font-weight: ${p => p.weight ? p.weight : '400'};
  font-family: var(--Ubuntu--FontFamily);
  font-size: ${p => p.fontSize ? p.fontSize : '20px'};

  @media ${device.mobileM} {
    font-size: 16px;
  }
`