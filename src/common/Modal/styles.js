import { css } from "styled-components";

const styles = {
  modalContainer: css`
    justify-content: flex-end;
    margin: 0px;
  `,
  contentContainer: css`
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${props => props.theme.bottomTab.backgroundColor};
    height: 20%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `
};

export default styles;
