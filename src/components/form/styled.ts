import { defaultTheme } from './../../theme/default';
import styled from 'styled-components';

export const StyledForm = styled.form`
padding: 10px;
display: flex;
box-shadow: inset 0 -2px 4px 0 ${defaultTheme.colorGrey}
`
export const Input = styled.input`
border: none;
outline: none;
font-size: 24px;
width: 100%;

&::placeholder {
  color: ${defaultTheme.colorLightGrey};
  opacity: 1;
  transition: opacity 0.3s ease;
  font-style: italic;
}

&:focus {
  &::placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
    outline: none;
  }
}
`
export const Button = styled.button`
font-size: 50px;
font-weight: 200;
border: none;
padding: 0;
margin: 0;
margin-right: 20px;
cursor: pointer;
background-color: inherit;
transition: all 0.2s ease-in-out;

&:hover {
  color: ${defaultTheme.colorGreen};
}
`
