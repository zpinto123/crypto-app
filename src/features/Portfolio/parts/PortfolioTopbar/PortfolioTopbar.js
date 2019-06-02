import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import MIcons from "react-native-vector-icons/MaterialIcons";
import FAIcons from "react-native-vector-icons/FontAwesome5";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Text, Modal } from "../../../../common";
import { themeUtils } from "../../../../utils";
import { goToAddCoin } from "../../../../navigation/navigationRoots";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);

const LeftContainer = style(View, styles.leftContainer);
const CenterContainer = style(View, styles.centerContainer);
const RightContainer = style(View, styles.rightContainer);

const UpDownContainer = style(View, styles.upDownContainer);
const UpText = style(Text, styles.upText);
const UpIcon = () => <FAIcons name="angle-up" size={30} color="lightgreen" />;
const DownText = style(Text, styles.downText);
const DownIcon = () => <FAIcons name="angle-down" size={30} color="#ce2b37" />;
const ValueText = style(Text, styles.valueText);
const AddIcon = () => <MIcons name="add-box" size={45} color="white" />;
const ThreeDotIcon = () => (
  <MCIcons name="dots-horizontal" size={35} color="black" />
);

class PortfolioTopbar extends Component {
  state = {
    showMenu: false
  };

  render() {
    const { data, isUp = false } = this.props;
    const { showMenu } = this.state;
    return (
      <Container>
        <Modal
          isVisible={showMenu}
          handleCloseModal={() => this.setState({ showMenu: false })}
        >
          <TouchableOpacity
            onPress={() => {
              goToAddCoin("Portfolio", {}, "Add Coin");
              this.setState({ showMenu: false });
            }}
          >
            <Text>Add-Coin</Text>
          </TouchableOpacity>
        </Modal>
        <LeftContainer />
        <CenterContainer>
          {isUp ? (
            <UpDownContainer>
              <UpIcon />
              <UpText>$65,000.00</UpText>
            </UpDownContainer>
          ) : (
            <UpDownContainer>
              <DownIcon />
              <DownText>$65,000.00</DownText>
            </UpDownContainer>
          )}
          <ValueText>$30,504.203</ValueText>
        </CenterContainer>
        <RightContainer>
          <TouchableOpacity onPress={() => this.setState({ showMenu: true })}>
            <ThreeDotIcon />
          </TouchableOpacity>
        </RightContainer>
      </Container>
    );
  }
}

export default PortfolioTopbar;
