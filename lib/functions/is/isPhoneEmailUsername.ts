import {
  __app_username_length_max__,
  __app_username_length_min__,
} from '../../reference/app'
import { RegularExpressionEmailSingleAt } from '../../reference/regular_expressions/email'
import { RegularExpressionPhone } from '../../reference/regular_expressions/phone'

export type TypeIsPhoneEmailUsernameResult =
  | `phone`
  | `email`
  | `username`
  | `none`

export const isPhoneEmailUsername = (
  text: string
): TypeIsPhoneEmailUsernameResult => {
  switch (RegularExpressionPhone.test(text)) {
    case true: {
      return `phone`
    }

    case false: {
      switch (RegularExpressionEmailSingleAt.test(text)) {
        case true: {
          return `email`
        }

        case false: {
          switch (
            text.length > __app_username_length_min__ &&
            text.length < __app_username_length_max__
          ) {
            case true: {
              return `username`
            }

            case false: {
              return `none`
            }
          }
        }
      }
    }
  }
}
