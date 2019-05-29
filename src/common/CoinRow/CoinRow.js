import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { ListItem } from 'react-native-elements';

import cryptoIcons from '../../assets/icons/crypto/color';

import { valueUtils, themeUtils } from '../../utils';

import styles from './styles';

const { parsePrice } = valueUtils;
const { style } = themeUtils;

class CoinRow extends PureComponent {
  render() {
    const { Id, Name, FullName, PRICE, theme } = this.props;
    console.log('coinRow Render');
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
      <View style={{ backgroundColor: 'orange', height: 100, padding: 10 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            backgroundColor: 'white',
            elevation: 10,
            borderRadius: 5
          }}
        >
          <View
            style={{
              flex: 0.2,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              source={cryptoIcons[Name.toLowerCase()] || null}
              style={{ height: 40, width: 40 }}
            />
          </View>
          <View
            style={{
              flex: 0.6,
              alignItems: 'flex-start',
              justifyContent: 'center'
            }}
          >
            <Text>{Name}</Text>
            <Text>{FullName}</Text>
          </View>
          <View
            style={{
              flex: 0.2,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Price value={PRICE} />
          </View>
        </View>
      </View>
    );
  }
}

const PlaceholderContainer = style(View, styles.placeholderContainer);
const PlaceholderText = style(Text, styles.placeholderText);

const PlaceholderIcon = ({ name }) => (
  <PlaceholderContainer>
    <PlaceholderText>{name.toUpperCase().substring(0, 3)}</PlaceholderText>
  </PlaceholderContainer>
);

const PriceText = style(Text, styles.priceText);

const Price = ({ value }) => (
  <PriceText style={{ color: 'black' }}>{`$${parsePrice(value)}`}</PriceText>
);

export default CoinRow;
