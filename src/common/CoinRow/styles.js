import { css } from "styled-components";

const styles = {
  placeholderContainer: css`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #5a6586;
  `,
  placeholderText: css`
    font-size: 14;
    line-height: 40;
  `,
  priceText: css`
    color: ${props => props.theme.content.textColor};
  `
};

export default styles;
