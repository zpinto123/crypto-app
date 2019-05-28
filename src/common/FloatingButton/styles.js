import { css } from "styled-components";

const styles = {
  container: css`
    width: 60;
    height: 60;
    position: absolute;
    bottom: 10;
    border-radius: 60;
    justify-content: center;
    align-items: center;
    align-self: center;
    z-index: 2;
    background-color: ${props => props.theme.bottomTab.backgroundColor};
  `,
  buttonImage: css`
    color: white;
    height: 45;
    width: 45;
  `
};

export default styles;
