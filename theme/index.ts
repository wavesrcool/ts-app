/* eslint-disable @typescript-eslint/no-explicit-any */
import { extendTheme } from 'native-base'
import { __modal_one__ } from './modal/one'
import { __modal_source__ } from './modal/source'

const config = {
  //useSystemColorMode: true,
  initialColorMode: 'light',
}

export const theme = extendTheme({
  config,
  components: {
    /**
     * Box
     */
    Box: {
      variants: {
        one: __modal_one__,
        source: __modal_source__,
      },
    },

    /**
     * Button
     */
    Button: {
      variants: {
        one: __modal_one__,
        source: __modal_source__,
      },
    },

    /**
     * Input
     */
    Input: {
      variants: {
        one: __modal_one__,
        source: __modal_source__,
      },
    },

    /**
     * Flex
     */
    Flex: {
      variants: {
        one: __modal_one__,
        source: __modal_source__,
      },
    },

    /**
     * Spinner
     */
    Spinner: {
      variants: {
        one: __modal_one__,
        source: __modal_source__,
      },
    },

    /**
     * Text
     */
    Text: {
      variants: {
        one: __modal_one__,
        source: __modal_source__,
      },
    },
  },
})
