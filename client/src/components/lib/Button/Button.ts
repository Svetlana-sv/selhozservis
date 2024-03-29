import styled from 'styled-components';

interface Props {
    colorBorder?: string;
    colorInput?: string;
    colorFont?: string;
    width?: string;
    height?: string;
    color?: string;
    colorBackground?: string;
    fontSize?: string;
}

export const Button = styled.button<Props>`
  width: ${(p) => (p.width ? p.width : '170px')};
  height: ${(p) => (p.height ? p.height : '40px')};
  background-color: ${(p) => (p.colorBackground ? p.colorBackground : '#994c4c')};
  border-radius: 15px;
  color: ${(p) => (p.color ? p.color : '#f5f5f5')};
  font-family: var(--Ubuntu--FontFamily);
  font-style: normal;
  font-weight: 700;
  font-size: ${(p) => (p.fontSize ? p.fontSize : '16px')};
  display: flex;
  //margin: auto;
  justify-self: center;
  align-content: center;
  justify-content: center;
  align-items: center;
  //box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  box-shadow: none;

  &:hover {
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  }

  &:focus,
  &:focus-visible {
    transition: 1s background-color;
    box-shadow: none;
    background: #834141;
  }

  @media screen and (max-width: 690px) {
    font-size: 14px;
  }
`;
