import { css } from 'styled-components';

const styles = {
  container: css`
    flex: 1;
    background-color: ${props => props.theme.content.primary};
  `
};

export default styles;
