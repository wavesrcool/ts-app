import {
  __app_username_length_max__,
  __app_username_length_min__,
} from '../../reference/app'
import { RegularExpressionEmailSingleAt } from '../../reference/regular_expressions/email'

export type TypeIsEmailUsernameResult = `email` | `username` | `none`

export const isEmailUsername = (text: string): TypeIsEmailUsernameResult => {
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
