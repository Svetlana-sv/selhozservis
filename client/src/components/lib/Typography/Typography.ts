import styled from 'styled-components';
import {device} from "../../../../styles/device";

interface Props {
    align?: string;
    fontSize?: string;
    color?: string;
}

export const Typography = styled.p<Props>`
  color: ${p => p.color ? p.color : 'var(--color)'};
  text-align: ${p => p.align ? p.align : 'center'};
  padding: 5px;
  font-size: ${p => p.fontSize ? p.fontSize : '18px'};

  @media ${device.mobileM} {
    font-size: 16px;
  }
`