import styled from "styled-components";

const style = (Component, styles = "") => styled(Component)`
  ${styles}
`;

export { style };
