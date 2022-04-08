import * as React from 'react'
import * as Base from 'native-base'
import LogoPrimary from '../../../../components/logo/LogoPrimary'
import { Feather } from '@expo/vector-icons'
import { useFold, useShape } from '../../../../app/hooks'
import {
  ofSignInShape,
  writeSignInShapeErrorFalse,
  writeSignInShapeErrorTrue,
  writeSignInShapeLoadingFalse,
  writeSignInShapeLoadingTrue,
  writeSignInShapePassphraseShowFalse,
  writeSignInShapePassphraseShowTrue,
  writeSignInShapeValuePassFalse,
  writeSignInShapeValuePassTrue,
} from '../../../../app/shapes/features/sign_in/SignInShape'
import { sleep } from '../../../../lib/functions/sleep/sleep'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TypeNavigationRoot } from '../../../../types/navigation'
import { OpenScreensContainer } from '../../../../components/containers/OpenScreensContainer'
import { ts } from '../../../../lib/i18n'
import { __app_is_phone__ } from '../../../../lib/reference/app'
import { isEmailUsername } from '../../../../lib/functions/is/isEmailUsername'

export default function OpenSignInScreenOrigin({
  navigation,
}: NativeStackScreenProps<TypeNavigationRoot, 'OpenSignIn'>): JSX.Element {
  console.log('*functional* OpenSignInScreenOrigin ')

  const fold = useFold()
  const shape = useShape(ofSignInShape)

  const ___togglePassphraseShow = React.useCallback(() => {
    shape.passphrase_show
      ? fold(writeSignInShapePassphraseShowFalse())
      : fold(writeSignInShapePassphraseShowTrue())
  }, [fold, shape.passphrase_show])

  const ___toSignUp = React.useCallback(
    () => navigation.navigate(`OpenSignUp`),
    [navigation]
  )

  const ___toForgotPassword = React.useCallback(
    () => navigation.navigate(`OpenForgotPassword`),
    [navigation]
  )

  const ___logIn = React.useCallback(() => {
    // shape value
    if (!shape.value_pass) {
      fold(
        writeSignInShapeErrorTrue(
          __app_is_phone__
            ? `errors.screen.sign_in.shape_value_phone_email_username`
            : `errors.screen.sign_in.shape_value_email_username`
        )
      )
      return
    }

    // shape passphrase
    if (!shape.passphrase_pass) {
      fold(writeSignInShapeErrorTrue(`errors.screen.sign_in.value_password`))
      return
    }

    // error false
    fold(writeSignInShapeErrorFalse())

    // loading true
    fold(writeSignInShapeLoadingTrue())

    // fn
    ;(async () => {
      try {
        console.log(`*async fn* try`)
        await sleep(1111)
      } catch (e) {
        console.log(`*async fn* catch`)
        fold(writeSignInShapeErrorTrue(`catch`))
      } finally {
        console.log(`*async fn* finally`)
        fold(writeSignInShapeLoadingFalse())
      }
    })()
  }, [fold, shape.passphrase_pass, shape.value_pass])

  const _inputBg = Base.useColorModeValue(`gray.200`, `gray.500`)
  const _inputBorder = Base.useColorModeValue(`gray.300`, `gray.100`)
  const _inputBorderFocus = Base.useColorModeValue(`gray.300`, `gray.100`)

  return (
    <OpenScreensContainer
      legend={{
        // top
        top: (
          <Base.Flex w={`100%`} alignItems={`center`} mt={`160px`}>
            <Base.VStack w={`90%`} alignItems={`center`} space={`sm`}>
              <LogoPrimary />

              <Base.Input
                w={`100%`}
                mt={6}
                size={`md`}
                variant={`outline`}
                bg={_inputBg}
                borderColor={_inputBorder}
                _focus={{
                  borderColor: _inputBorderFocus,
                }}
                placeholder={`${ts(
                  __app_is_phone__
                    ? `glossary.phrases.phone_number_username_or_email`
                    : `glossary.phrases.username_or_email_address`
                )}`}
                onChange={(e) => {
                  const value = e.nativeEvent.text

                  switch (isEmailUsername(value)) {
                    case `email`: {
                      fold(
                        writeSignInShapeValuePassTrue({
                          value,
                          type: `email`,
                        })
                      )
                      return
                    }

                    case `username`: {
                      fold(
                        writeSignInShapeValuePassTrue({
                          value,
                          type: `username`,
                        })
                      )
                      return
                    }

                    case `none`: {
                      fold(writeSignInShapeValuePassFalse(value))
                      return
                    }
                  }

                  /*
                  @phone: use this
                  switch (isPhoneEmailUsername(value)) {
                    case `phone`: {
                      fold(
                        writeSignInShapeValuePassTrue({
                          value,
                          type: `phone`,
                        })
                      )
                      return
                    }

                    case `email`: {
                      fold(
                        writeSignInShapeValuePassTrue({
                          value,
                          type: `email`,
                        })
                      )
                      return
                    }

                    case `username`: {
                      fold(
                        writeSignInShapeValuePassTrue({
                          value,
                          type: `username`,
                        })
                      )
                      return
                    }

                    case `none`: {
                      fold(writeSignInShapeValuePassFalse(value))
                      return
                    }
                  }
                  */
                }}
              />

              <Base.Input
                type={shape.passphrase_show ? `text` : `password`}
                w={`100%`}
                mt={2}
                size={`md`}
                variant={`outline`}
                bg={_inputBg}
                borderColor={_inputBorder}
                _focus={{
                  borderColor: _inputBorderFocus,
                }}
                placeholder={`${ts(`glossary.simple.password`)}`}
                InputRightElement={
                  <Base.Pressable
                    opacity={0.65}
                    mr={3}
                    onPress={___togglePassphraseShow}
                  >
                    <Feather
                      name={shape.passphrase_show ? `eye-off` : `eye`}
                      size={20}
                      color="black"
                    />
                  </Base.Pressable>
                }
              />

              <Base.Flex w={`100%`} align={`flex-end`}>
                <Base.Button
                  variant={`ghost`}
                  colorScheme={`blue`}
                  size={`md`}
                  onPress={___toForgotPassword}
                >
                  {`${ts(`glossary.compound.forgot_password_Q`)}`}
                </Base.Button>
              </Base.Flex>

              <Base.Button
                isLoading={shape.loading}
                w={`100%`}
                colorScheme={`blue`}
                onPress={___logIn}
              >
                {`${ts(`glossary.compound.log_in`)}`}
              </Base.Button>

              {shape.error ? (
                <Base.Flex
                  w={`100%`}
                  py={`10px`}
                  mt={`30px`}
                  alignItems={`center`}
                  justifyContent={`center`}
                >
                  <Base.Text fontSize={`sm`}>{`${ts(
                    `${shape.message}`
                  )}.`}</Base.Text>
                </Base.Flex>
              ) : null}
            </Base.VStack>
          </Base.Flex>
        ),

        // bottom
        bottom: (
          <Base.HStack w={`100%`} justifyContent={`center`} mt={2}>
            <Base.Button variant={`unstyled`} mr={0} pr={0}>
              {`${ts(`glossary.phrases.dont_have_an_account_Q`)}`}
            </Base.Button>
            <Base.Button
              variant={`ghost`}
              colorScheme={`blue`}
              size={`md`}
              ml={-2}
              onPress={___toSignUp}
            >
              {`${ts(`glossary.compound.sign_up`)}.`}
            </Base.Button>
          </Base.HStack>
        ),
      }}
    />
  )
}
