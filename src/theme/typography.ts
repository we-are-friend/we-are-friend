const typography = {
  fontFamily: ['Prompt', 'sans-serif'].join(','),
  h1: {
    fontFamily: 'Prompt',
    fontWeight: 600,
    fontSize: 30,
    '@media (min-width:960px)': {
      fontSize: 36,
    },
    '@media (min-width:1280px)': {
      fontSize: 40,
    },
  },
  h2: {
    fontFamily: 'Prompt',
    fontWeight: 600,
    fontSize: 24,
    '@media (min-width:960px)': {
      fontSize: 28,
    },
    '@media (min-width:1280px)': {
      fontSize: 32,
    },
  },
  h3: {
    fontFamily: 'Prompt',
    fontWeight: 600,
    fontSize: 20,

    '@media (min-width:960px)': {
      fontSize: 22,
    },
    '@media (min-width:1280px)': {
      fontSize: 24,
    },
  },
  h4: {
    fontFamily: 'Prompt',
    fontWeight: 500,
    fontSize: 18,
    '@media (min-width:960px)': {
      fontSize: 18,
    },
    '@media (min-width:1280px)': {
      fontSize: 20,
    },
  },
  h5: {
    fontFamily: 'Prompt',
    fontWeight: 600,
    fontSize: 16,
  },
  h6: {
    fontFamily: 'Prompt',
    fontWeight: 600,
    fontSize: 14,
  },
  body1: {
    fontSize: 16,
    fontFamily: 'Prompt',
    lineHeight: '24px',
  },
  body2: {
    fontSize: 16,
    fontFamily: 'Prompt',
    lineHeight: '24px',
  },
  caption: {
    fontSize: 14,
    fontFamily: 'Prompt',
    lineHeight: '24px',
  },
  overline: {
    fontWeight: 600,
  },
};

export default typography;
