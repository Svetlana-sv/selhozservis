import styled from 'styled-components';
import {device} from "../../../../styles/device";

interface Props {
    type?: 'paragraph' | 'title';
    align?: string;
    fontSize?: string;
    color?: string;
    weight?: string;
    margin?: string
}

export const Paragraphy = styled.p<Props>`
  color: ${p => p.color ? p.color : 'var(--color)'};
  text-align: ${p => p.align ? p.align : 'left'};
  margin: ${p => p.margin ? p.margin : '0px'};
  font-weight: ${p => p.weight ? p.weight : '400'};
  font-family: var(--Ubuntu--FontFamily);
  font-size: ${p => p.fontSize ? p.fontSize : '17px'};
  line-height: 20px;
  // @media ${device.mobileM} {
  //   font-size: 16px;
  // }
`

export const Text = styled.p<Props>`
  color: ${p => p.color ? p.color : 'var(--color)'};
  text-align: ${p => p.align ? p.align : 'center'};
  font-weight: ${p => p.weight ? p.weight : '400'};
  font-family: ${p => p.type == 'title' ? 'var(--Philosopher--FontFamily)' : 'var(--Ubuntu--FontFamily)'};
  font-size: ${p => p.fontSize ? p.fontSize : '18px'};
  margin: ${p => p.margin ? p.margin : '0px'};
  // @media ${device.mobileM} {
  //   font-size: 16px;
  // }
`

export const Title = styled.p<Props>`
  color: ${p => p.color ? p.color : 'var(--color)'};
  text-align: ${p => p.align ? p.align : 'center'};
  margin: ${p => p.margin ? p.margin : '0px'};
  font-weight: ${p => p.weight ? p.weight : '600'};
  font-family: var(--Philosopher--FontFamily);
  font-size: ${p => p.fontSize ? p.fontSize : '24px'};
`