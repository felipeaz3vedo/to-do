import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.normal['base-background']};
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.normal['base-title']};
    -webkit-font-smoothing: antialiased;
  }

a {
  text-decoration: none;
  border: none;
}

button {
  cursor: pointer;
}
`;
