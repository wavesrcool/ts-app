/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { themeTools } from 'native-base'

export const __modal_source__ = (props: any): any => {
  return {
    color: themeTools.mode(
      [`gray.700`, null, null, null, null],
      [`blue.300`, null, null, null, null]
    )(props),

    bg: themeTools.mode(
      [`black`, null, null, null, null],
      [`black`, null, null, null, null]
    )(props),

    opacity: themeTools.mode(
      [0.87, null, null, null, null],
      [0.87, null, null, null, null]
    )(props),

    borderColor: themeTools.mode(
      [`gray.300`, null, null, null, null],
      [`gray.300`, null, null, null, null]
    )(props),

    borderRadius: themeTools.mode(
      [`md`, null, null, null, null],
      [`md`, null, null, null, null]
    )(props),

    selectionColor: themeTools.mode(
      [`gray.700`, null, null, null, null],
      [`gray.700`, null, null, null, null]
    )(props),

    _focus: {
      borderColor: themeTools.mode(
        [`gray.100`, null, null, null, null],
        [`gray.100`, null, null, null, null]
      )(props),

      color: themeTools.mode(
        [`gray.800`, null, null, null, null],
        [`gray.800`, null, null, null, null]
      )(props),
    },
  }
}
