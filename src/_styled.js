import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border: 1px solid red;
`;

export const DrawerStyled = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  will-change: transform;
  overflow: auto;
  background-color: aquamarine;
  transition: transform 0.25s ease;
  transform: translateX(${props => (props.isOpen ? '0%' : '-100%')});
`;

export const PageStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  border: 1px solid blue;
`;

export const Overlay = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
`;

export default {};
