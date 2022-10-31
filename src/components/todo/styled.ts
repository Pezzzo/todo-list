import { defaultTheme } from './../../theme/default';
import styled from 'styled-components';

interface TextProps {
  status: boolean
}

export const Item = styled.li`
list-style: none;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 10px;
border-bottom: 1px solid ${defaultTheme.colorGrey};
`

export const Text = styled.span<TextProps>`
display: block;
margin-left: 26px;
font-size: 24px;
text-decoration: ${({ status }) => status ? 'line-through' : 'none'};
color: ${({ status }) => status ? defaultTheme.colorGrey : defaultTheme.colorBlack};
`
export const Label = styled.label`
display: flex;
align-items: center;
text-align: center;
font-size: 29px;
cursor: pointer;

&::before {
  content: '';
  border: 1px solid ${defaultTheme.colorGrey};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${defaultTheme.colorGreen};
}
`

export const Input = styled.input`
cursor: pointer;
opacity: 0;
position: absolute;

&:checked {
  &+label::before {
    content: '✓';
    border: 1px solid ${defaultTheme.colorGreen};
  }
}

&:focus {
  &+label::before {
    border: 1px solid ${defaultTheme.colorGreen};
  }

}
`
export const DelTodoButton = styled.button`
border: none;
background-color: inherit;
cursor: pointer;
margin-right: 16px;
font-size: 42px;
transition: all 0.2s ease-in-out;
color: ${defaultTheme.colorRed};
opacity: 0.3;

&:hover {
  opacity: 1;
}
`
