import React from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";

import { themeUtils } from "../../utils";

import styles from "./styles";

const { style } = themeUtils;

const ModalContainer = style(Modal, styles.modalContainer);
const ContentContainer = style(View, styles.contentContainer);

const CustomModal = ({ isVisible, handleCloseModal, children }) => (
  <ModalContainer
    animationIn="slideInUp"
    animationOut="slideOutDown"
    isVisible={isVisible}
    onBackdropPress={handleCloseModal}
    useNativeDriver
    backdropOpacity={0}
    swipeDirection={["up", "left", "right", "down"]}
  >
    <ContentContainer>{children}</ContentContainer>
  </ModalContainer>
);

export default CustomModal;
