import styled, { css } from 'styled-components';

interface TextProps {
  variant?: 'checked';
  size?: 'xs' | 's';
  color?: 'text' | 'placeholder';
  weight?: 400 | 600;
}

export const Text = styled.p<TextProps>`
  color: ${({ theme, color }) => theme.colors.normal[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) => theme.fontSizes[size ?? 'xs']};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  line-height: 130%;

  ${({ variant }) =>
    variant &&
    css`
      background-image: linear-gradient(${({ theme }) => theme.colors.gradient['brand-blue']});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

interface HeadingProps {
  variant?: 'checked';
  size?: 's' | 'm' | 'l' | 'xl';
  weight?: 400 | 600 | 700;
}

export const Heading = styled.h2<HeadingProps>`
  font-size: ${({ theme, size }) => theme.fontSizes[size ?? 's']};
  font-weight: ${({ weight }) => weight ?? 600};
  color: #ffffff;
  line-height: 110%;

  ${({ variant }) =>
    variant &&
    css`
      background-image: linear-gradient(${({ theme }) => theme.colors.gradient['brand-blue']});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `};
`;
