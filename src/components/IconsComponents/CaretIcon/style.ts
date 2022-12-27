import styled, { css } from 'styled-components';

interface CaretProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  direction?: 'left';
}

export const Caret = styled.svg<CaretProps>`
  width: ${({ size }) => (size ? `${size}px` : '14px')};

  path {
    stroke-width: ${({ strokeWidth }) => strokeWidth ?? 1};
    stroke: ${({ color }) => color ?? null};
  }

  ${({ direction }) =>
    direction === 'left' &&
    css`
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    `}
`;
