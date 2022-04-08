import { extendTheme } from 'native-base'

export const extendThemeFonts = extendTheme({
  fontConfig: {
    Circular: {
      400: {
        normal: 'Circular-BlackItalic',
        italic: 'Circular-BookItalic',
      },
    },
  },

  // note: match values with keys in fontConfig
  fonts: {
    Circular: 'Circular',
  },
})
