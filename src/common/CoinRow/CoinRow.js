import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { ListItem } from 'react-native-elements';

import cryptoIcons from '../../assets/icons/crypto/color';

import { valueUtils, themeUtils } from '../../utils';

import styles from './styles';
import { Left } from 'native-base';

const { parsePrice } = valueUtils;
const { style } = themeUtils;

const Container = style(View, styles.container);
const ContentContainer = style(View, styles.contentContainer);
const LeftContainer = style(View, styles.leftContainer);
const Icon = style(Image, styles.icon);
const MiddleContainer = style(View, styles.middleContainer);
const TitleText = style(Text, styles.titleText);
const SubtitleText = style(Text, styles.subtitleText);
const RightContainer = style(View, styles.rightContainer);
const PriceText = style(Text, styles.priceText);

class CoinRow extends PureComponent {
  render() {
    const { Id, Name, FullName, PRICE, theme } = this.props;
    const icon = cryptoIcons[Name.toLowerCase()];
    return (
      // <ListItem
      //   key={Id}
      //   // onPress={handleOnPress}
      //   leftAvatar={{
      //     source: cryptoIcons[Name.toLowerCase()] || null,
      //     renderPlaceholderContent: <PlaceholderIcon name={Name} />
      //   }}
      //   title={Name}
      //   subtitle={FullName}
      //   rightElement={<Price value={PRICE} />}
      //   containerStyle={{ backgroundColor: theme.content.backgroundColor }}
      //   titleStyle={{ color: theme.content.textColor }}
      //   subtitleStyle={{ color: theme.content.textColor }}
      //   chevron
      // />
      <Container>
        <ContentContainer>
          <LeftContainer>
            {icon ? (
              <Icon source={cryptoIcons[Name.toLowerCase()] || null} />
            ) : (
              <PlaceholderIcon name={Name} />
            )}
          </LeftContainer>
          <MiddleContainer>
            <TitleText>{Name}</TitleText>
            <SubtitleText>{FullName}</SubtitleText>
          </MiddleContainer>
          <RightContainer>
            <Price value={PRICE} />
          </RightContainer>
        </ContentContainer>
      </Container>
    );
  }
}

const Price = ({ value }) => <PriceText>{`$${parsePrice(value)}`}</PriceText>;

const PlaceholderContainer = style(View, styles.placeholderContainer);
const PlaceholderText = style(Text, styles.placeholderText);

const PlaceholderIcon = ({ name }) => (
  <PlaceholderContainer>
    <PlaceholderText>{name.toUpperCase().substring(0, 3)}</PlaceholderText>
  </PlaceholderContainer>
);

export default CoinRow;
