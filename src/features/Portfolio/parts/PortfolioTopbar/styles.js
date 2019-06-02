import { css } from "styled-components";

const styles = {
  container: css`
    flex: 1;
    height: 20%;
    width: 100%;
    shadow-color: #000;
    box-shadow: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84;
    background-color: ${props => props.theme.bottomTab.backgroundColor};
    elevation: 5;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 10px;
  `,
  bottomContainer: css`
    flex: 0.2;
    height: 100%;
    text-align: center;
  `,
  centerContainer: css`
    flex: 0.7;
    height: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-self: center;
  `,
  topContainer: css`
    flex: 0.1;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-start;

    background-color: ${props => props.theme.bottomTab.backgroundColor};
  `,
  upDownContainer: css`
    align-items: center;
  `,
  upText: css`
    color: lightgreen;
  `,
  downText: css`
    color: #ce2b37;
  `,
  valueText: css`
    text-align-vertical: center;
    text-align: center;
    color: ${props => props.theme.content.textColor};
    font-size: ${props => props.theme.fontSizes.title};
  `
};

export default styles;
