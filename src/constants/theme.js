export const SIZES = {
  paddingNormal: 10,
  paddingWide: 20,
  radius: 30,

  icon: 26,
  title: 30,
  h1: 18,
  h2: 16,
  h3: 14,
  body: 12,
};

export const COLORS = {
  primary: "#FFCB05",
  secondary: "#077940",

  gray: "#B6C7D7",
};

export const FONTS = {
  title: {
    fontFamily: "whitneysemibold",
    fontSize: SIZES.title,
    lineHeight: 50,
  },
  h1: { fontFamily: "whitneysemibold", fontSize: SIZES.h1, lineHeight: 30 },
  h2: { fontFamily: "whitneymedium", fontSize: SIZES.h2, lineHeight: 22 },
  h3: { fontFamily: "whitneymedium", fontSize: SIZES.h3, lineHeight: 22 },

  body1: { fontFamily: "whitneymedium", fontSize: SIZES.body1, lineHeight: 20 },
  body3Low: {
    fontFamily: "whitneymedium",
    fontSize: SIZES.body3,
    lineHeight: 15,
  },
};

const appTheme = {
  SIZES: SIZES,
  COLORS: COLORS,
  FONTS: FONTS,
};

export default appTheme;
