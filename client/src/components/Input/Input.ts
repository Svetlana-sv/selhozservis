import styled from 'styled-components';
import {device} from "../../../styles/device";

interface Props {
    colorBorder?: string;
    colorInput?: string;
    colorFont?: string;
    width?: string;
    height?: string;
}

export const Input = styled.input<Props>`
  transition: .3s border-color;
  width:${p => p.width ? p.width : '400px'};
  padding:15px;
  border-radius:15px;
  border:0;
  outline: none;
  box-shadow:4px 4px 10px rgba(0,0,0,0.06);
  height:${p => p.height ? p.height : '40px'};
  &:hover,
  &:focus{
    box-shadow:0 0 4px rgba(0,0,0,0.5);
  }
  @media ${device.mobileM} {
    width: 200px;
  }
`


