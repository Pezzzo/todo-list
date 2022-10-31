import styled from 'styled-components';
import { defaultTheme } from '../../theme/default';

interface ButtonProps {
  chosen: boolean | string;
}

export const Wrapper = styled.div`
min-height: 50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
`
export const List = styled.ul`
margin: 0;
padding: 0;
display: flex;
align-items: center;
grid-column: 2/3;
`
export const Item = styled.li`
margin: 0;
margin-right: 10px;
display: flex;
align-items: center;
`
export const P = styled.p`
margin: 0;
font-size: 14px;
margin-left: 20px;
font-weight: 200;
color: ${defaultTheme.colorGreyDark};
`
export const Button = styled.button`
margin: 0;
padding: 6px;
border: none;
background-color: inherit;
cursor: pointer;
font-size: 14px;
font-weight: 300;
color: ${defaultTheme.colorGreyDark};
border-radius: 4px;

&:hover {
  color: ${defaultTheme.colorBlack};
}
`
export const ButtonAll = styled(Button)<ButtonProps>`
outline: ${({ chosen }) => chosen === 'all' ? `1.5px solid ${defaultTheme.colorLilac}` : 'none'};
`
export const ButtonActive = styled(Button)<ButtonProps>`
outline: ${({ chosen }) => !chosen ? `1.5px solid ${defaultTheme.colorLilac}` : 'none'};
`
export const ButtonCompleted = styled(Button)<ButtonProps>`
outline: ${({ chosen }) => chosen === true ? `1.5px solid ${defaultTheme.colorLilac}` : 'none'};
`

export const ButtonWrapper = styled.div`
display: flex;
justify-self: end;
margin-right: 20px;
grid-column: 3/4;
`
