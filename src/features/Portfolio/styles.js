import { css } from "styled-components";

const styles = {
  container: css`
    flex: 1;
    align-items: center;
  `,
  topContainer: css`
    flex: 1;
    height: 70;
    width: 100%;
    shadow-color: #000;
    box-shadow: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84;
    background-color: ${props => props.theme.bottomTab.backgroundColor};
    elevation: 5;
    text-align: center;
    align-items: center;
    justify-content: center;
  `,
  portfolioValueText: css`
    text-align-vertical: center;
    text-align: center;
    color: ${props => props.theme.content.textColor};
    font-size: ${props => props.theme.fontSizes.title};
  `,
  listContainer: css`
    width: 100%;
    height: 85%;
  `
};

export default styles;
