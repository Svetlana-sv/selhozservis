import styled from 'styled-components';
import {device} from "../../../../styles/device";

interface Props {
    colorBorder?: string;
    colorInput?: string;
    colorFont?: string;
    width?: string;
    height?: string;
}

export const Button = styled.button<Props>`
  width: ${p => p.width ? p.width : '170px'};
  height: ${p => p.height ? p.height : '40px'};
  background-color: #994C4C;
  border-color: aqua;
  border-radius: 15px;
  color: #f5f5f5;
  font-family: var(--Ubuntu--FontFamily);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  //box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  box-shadow: none;
  height: 40px;

  &:hover {
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  }

  &:focus,
  &:focus-visible {
    transition: 1s background-color;
    box-shadow: none;
    background: #834141;
  }

  @media ${device.mobileM} {
  }
`