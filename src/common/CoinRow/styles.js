import { css } from "styled-components";
import { common } from "../../constants";

const styles = {
  container: css`
    background-color: ${props => props.theme.content.backgroundColor};
    height: ${common.ROW_HEIGHT};
    padding: 2px;
  `,
  contentContainer: css`
    flex: 1;
    flex-direction: row;
    background-color: white;
    border-radius: 5;
    shadow-color: #000;
    box-shadow: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84;
    elevation: 5;
  `,
  leftContainer: css`
    flex: 0.2;
    align-items: center;
    justify-content: center;
  `,
  middleContainer: css`
    flex: 0.6;
    align-items: flex-start;
    justify-content: center;
  `,
  rightContainer: css`
    flex: 0.2;
    align-items: center;
    justify-content: center;
  `,
  placeholderContainer: css`
    width: 40;
    height: 40;
    border-radius: 40;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
  `,
  placeholderText: css`
    font-size: 14;
    line-height: 40;
  `,
  icon: css`
    height: 40;
    width: 40;
  `,
  titleText: css``,
  subtitleText: css``,
  priceText: css`
    color: ${props => props.theme.content.textColor};
  `
};

export default styles;
