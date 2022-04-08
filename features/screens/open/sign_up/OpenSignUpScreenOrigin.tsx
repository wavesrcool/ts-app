import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import * as Base from 'native-base'
import { OpenScreensContainer } from '../../../../components/containers/OpenScreensContainer'
import { TypeNavigationRoot } from '../../../../types/navigation'
import { useFold, useShape } from '../../../../app/hooks'
import {
  ofSignUpShape,
  writeSignUpShapeErrorFalse,
  writeSignUpShapeErrorTrue,
  writeSignUpShapeLoadingFalse,
  writeSignUpShapeLoadingTrue,
  writeSignUpShapeValuePassFalse,
  writeSignUpShapeValuePassTrue,
} from '../../../../app/shapes/features/sign_up/SignUpShape'
import { RegularExpressionEmailSingleAt } from '../../../../lib/reference/regular_expressions/email'
import {
  writeRootShapeConfirmEmailFalse,
  writeRootShapeConfirmEmailTrue,
} from '../../../../app/shapes/root/RootShape'
import { ts } from '../../../../lib/i18n'
import { __app_is_phone__ } from '../../../../lib/reference/app'
import { use_Lambda0000Mutation } from '../../../../graphql/hooks'

export default function OpenSignUpScreenOrigin({
  navigation,
}: NativeStackScreenProps<TypeNavigationRoot, 'OpenSignUp'>): JSX.Element {
  console.log('*functional* OpenSignUpScreenOrigin ')

  const fold = useFold()
  const shape = useShape(ofSignUpShape)

  const _inputBg = Base.useColorModeValue(`gray.200`, `gray.500`)
  const _inputBorder = Base.useColorModeValue(`gray.300`, `gray.100`)
  const _inputBorderFocus = Base.useColorModeValue(`gray.300`, `gray.100`)

  const [sign_up_create] = use_Lambda0000Mutation()

  const ___toConfirmEmail = React.useCallback(
    () => navigation.navigate(`OpenConfirmEmail`),
    [navigation]
  )

  const ___toSignIn = React.useCallback(
    () => navigation.navigate(`OpenSignIn`),
    [navigation]
  )

  const ___signUp = React.useCallback(() => {
    // shape value
    if (!shape.value_pass) {
      fold(
        writeSignUpShapeErrorTrue(
          __app_is_phone__
            ? `errors.screen.sign_up.shape_value_all`
            : `errors.screen.sign_up.shape_value_email`
        )
      )
      return
    }

    // error false
    fold(writeSignUpShapeErrorFalse())

    // loading true
    fold(writeSignUpShapeLoadingTrue())

    // ensure hidden
    fold(writeRootShapeConfirmEmailFalse())

    //fn
    ;(async () => {
      try {
        console.log(`*async fn* try`)
        //await sleep(1111)
        const { data } = await sign_up_create({
          variables: {
            lambda: {
              contact: shape.value,
            },
          },
        }).catch((e) => {
          console.log(e, `catch error`)
          return { data: false }
        })

        // data check
        if (!data) {
          // error !data
          fold(writeSignUpShapeErrorTrue(`!data`))

          // loading false
          fold(writeSignUpShapeLoadingFalse())
          return
        }

        console.log(data, `data`)

        switch (data) {
          case true: {
            console.log(`*switch case true*`)

            // @rootshape: reveal confirm_email screen
            fold(writeRootShapeConfirmEmailTrue())

            // callback toConfirmEmail
            ___toConfirmEmail()

            return
          }
          case false: {
            console.log(`*switch case false*`)

            // ensure hidden
            fold(writeRootShapeConfirmEmailFalse())

            return
          }
        }
      } catch (e) {
        console.log(e)

        console.log(`*async fn* catch`)
        // error
        fold(writeSignUpShapeErrorTrue(`errors.screen.catch.general`))

        // ensure hidden
        fold(writeRootShapeConfirmEmailFalse())
      } finally {
        console.log(`*async fn* finally`)
        fold(writeSignUpShapeLoadingFalse())
      }
    })()

    //
  }, [___toConfirmEmail, fold, shape.value, shape.value_pass, sign_up_create])

  return (
    <OpenScreensContainer
      legend={{
        // top
        top: (
          <Base.Flex w={`100%`} alignItems={`center`} mt={`20px`}>
            <Base.VStack w={`90%`} alignItems={`center`} space={`sm`}>
              <Base.Text fontSize={`xl`}>
                {`${ts(`glossary.phrases.enter_an_email_address`)}.`}
              </Base.Text>

              <Base.Divider />

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
                placeholder={`${ts(`glossary.compound.email_address`)}`}
                onChange={(e) => {
                  const value = e.nativeEvent.text

                  switch (RegularExpressionEmailSingleAt.test(value)) {
                    case true: {
                      fold(
                        writeSignUpShapeValuePassTrue({ value, type: `email` })
                      )
                      return
                    }

                    case false: {
                      fold(writeSignUpShapeValuePassFalse(value))
                      return
                    }
                  }

                  /*
                  switch (__app_is_phone__) {
                    case true: {
                      console.log(`*switch case true*`)
                      //both phone and email values allowed
                      switch (
                        RegularExpressionEmailSingleAt.test(cat) ||
                        RegularExpressionPhone.test(cat)
                      ) {
                        case true: {
                          fold(writeSignUpShapeValuePassTrue(cat))
                          return
                        }

                        case false: {
                          fold(writeSignUpShapeValuePassFalse(cat))
                          return
                        }
                      }
                      break
                    }
                    case false: {
                      console.log(`*switch case false*`)

                      // only emails allowed
                      switch (RegularExpressionEmailSingleAt.test(cat)) {
                        case true: {
                          fold(writeSignUpShapeValuePassTrue(cat))
                          return
                        }

                        case false: {
                          fold(writeSignUpShapeValuePassFalse(cat))
                          return
                        }
                      }
                    }
                  }
                  */
                }}
              />

              <Base.Button
                mt={3}
                isLoading={shape.loading}
                w={`100%`}
                colorScheme={`blue`}
                onPress={___signUp}
              >
                {`${ts(`glossary.simple.continue`)}`}
              </Base.Button>

              {shape.error ? (
                <Base.Flex
                  w={`100%`}
                  py={`10px`}
                  mt={`30px`}
                  alignItems={`center`}
                  justifyContent={`center`}
                >
                  <Base.Text
                    fontSize={`sm`}
                    w={`83%`}
                    textAlign={`justify`}
                    lineHeight={`lg`}
                  >
                    {`${ts(`${shape.message}`)}.`}
                  </Base.Text>
                </Base.Flex>
              ) : null}
            </Base.VStack>
          </Base.Flex>
        ),

        // bottom
        bottom: (
          <Base.VStack>
            <Base.HStack w={`100%`} justifyContent={`center`} mt={2}>
              <Base.Button variant={`unstyled`} mr={0} pr={0}>
                {`${ts(
                  `library.screens.open.sign_up.already_have_an_account_Q`
                )}`}
              </Base.Button>
              <Base.Button
                variant={`ghost`}
                colorScheme={`blue`}
                size={`md`}
                ml={-2}
                onPress={___toSignIn}
              >
                {`${ts(`glossary.compound.sign_in`)}.`}
              </Base.Button>
            </Base.HStack>
          </Base.VStack>
        ),
      }}
    />
  )
}
