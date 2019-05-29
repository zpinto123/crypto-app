import { css } from 'styled-components';

const styles = {
  container: css`
    background-color: ${props => props.theme.content.backgroundColor};
    height: 100;
    padding: 10px;
  `,
  contentContainer: css`
    flex: 1;
    flex-direction: row;
    shadow-color: #000;
    box-shadow: 0px 5px;
    shadow-opacity: 0.34;
    shadow-radius: 6.27;
    background-color: white;
    elevation: 10;
    border-radius: 5;
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
