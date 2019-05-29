import { COLORS, FONT_SIZES } from "./tokens";

const LIGHT = {
  fontSizes: { ...FONT_SIZES },
  content: {
    backgroundColor: COLORS.white,
    textColor: COLORS.navyBlueExtraLight
  },
  bottomTab: {
    backgroundColor: COLORS.wheat,
    iconColor: COLORS.orangeMedium,
    selectedIconColor: COLORS.orangeLight
  },
  topBar: {
    backgroundColor: COLORS.wheat,
    textColor: COLORS.navyBlueExtraLight
  }
};

const NAVY_BLUE = {
  fontSizes: { ...FONT_SIZES },
  content: {
    backgroundColor: COLORS.navyBlueLight,
    textColor: COLORS.white
  },
  bottomTab: {
    backgroundColor: COLORS.navyBlueMedium,
    iconColor: COLORS.navyBlueExtraLight,
    selectedIconColor: COLORS.white
  },
  topBar: {
    backgroundColor: COLORS.navyBlueMedium,
    textColor: COLORS.white
  }
};

const DARK_GRAY = {
  fontSizes: { ...FONT_SIZES },
  content: {
    backgroundColor: COLORS.darkGrayLight,
    textColor: COLORS.white
  },
  bottomTab: {
    backgroundColor: COLORS.darkGrayMedium,
    iconColor: COLORS.darkGrayExtraLight,
    selectedIconColor: COLORS.white
  },
  topBar: {
    backgroundColor: COLORS.darkGrayMedium,
    textColor: COLORS.white
  }
};

export { LIGHT, NAVY_BLUE, DARK_GRAY };
