import styled, { css } from 'styled-components';

type StylesProps = {
  type: 'bottom' | 'top' | 'right' | 'left';
};

export const ToolTipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &:hover > div {
    visibility: visible;
  }
`;

/* ${(props) =>
    (props.type === 'bottom' || props.type === 'top') &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    (props.type === 'right' || props.type === 'left') &&
    css`
      align-items: center;
    `} */

export const ToolTip = styled.div<StylesProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  visibility: hidden;

  ${(props) =>
    props.type === 'bottom' &&
    css`
      transform: translateY(110%);
    `}
  ${(props) =>
    props.type === 'top' &&
    css`
      transform: translateY(-110%);
    `}
  ${(props) =>
    props.type === 'right' &&
    css`
      transform: translateX(90%);
    `}
  ${(props) =>
    props.type === 'left' &&
    css`
      transform: translateX(-90%);
    `} 
  &::after {
    content: '';
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #595959;
    opacity: 0.8;
    z-index: -1;
  }
`;

export const ToolTipText = styled.span`
  font-size: 12px;
  color: white;
`;
