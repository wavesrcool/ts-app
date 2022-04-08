import * as React from 'react'
import * as Base from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TypeNavigationRoot } from '../../../../types/navigation'
import { Feather } from '@expo/vector-icons'
import { OpenScreensContainer } from '../../../../components/containers/OpenScreensContainer'
import { useFold, useShape } from '../../../../app/hooks'
import {
  ofForgotPasswordShape,
  writeForgotPasswordShapeErrorFalse,
  writeForgotPasswordShapeErrorTrue,
  writeForgotPasswordShapeLoadingFalse,
  writeForgotPasswordShapeLoadingTrue,
} from '../../../../app/shapes/features/screens/forgot_password/ForgotPasswordShape'
import { sleep } from '../../../../lib/functions/sleep/sleep'
import { ts } from '../../../../lib/i18n'

export default function OpenForgotPasswordScreenOrigin({
  navigation,
}: NativeStackScreenProps<
  TypeNavigationRoot,
  'OpenForgotPassword'
>): JSX.Element {
  console.log('*functional* OpenForgotPasswordScreenOrigin ')

  const fold = useFold()
  const shape = useShape(ofForgotPasswordShape)

  const _inputBg = Base.useColorModeValue(`gray.200`, `gray.500`)
  const _inputBorder = Base.useColorModeValue(`gray.300`, `gray.100`)
  const _inputBorderFocus = Base.useColorModeValue(`gray.300`, `gray.100`)

  const ___toLogIn = React.useCallback(
    () => navigation.navigate(`OpenSignIn`),
    [navigation]
  )

  const ___forgotPassword = React.useCallback(() => {
    // @todo add shape passes

    // error false
    fold(writeForgotPasswordShapeErrorFalse())

    // loading true
    fold(writeForgotPasswordShapeLoadingTrue())

    // fn
    ;(async () => {
      try {
        console.log(`*async fn* try`)
        await sleep(1111)
      } catch (e) {
        console.log(`*async fn* catch`)
        fold(writeForgotPasswordShapeErrorTrue(`catch`))
      } finally {
        console.log(`*async fn* finally`)
        fold(writeForgotPasswordShapeLoadingFalse())
      }
    })()
  }, [fold])

  return (
    <OpenScreensContainer
      legend={{
        // top
        top: (
          <Base.Flex w={`100%`} alignItems={`center`}>
            <Base.VStack
              w={`90%`}
              mt={`60px`}
              alignItems={`center`}
              space={`sm`}
            >
              <Base.Circle
                mt={`20px`}
                mb={`20px`}
                opacity={0.73}
                borderColor={`black`}
                borderWidth={3}
                size={20}
              >
                <Feather name="lock" size={48} color="black" />
              </Base.Circle>

              <Base.VStack
                w={`100%`}
                //bg={`blue.300`}
                alignItems={`center`}
                space={`sm`}
              >
                <Base.Text fontSize={`lg`}>{`${ts(
                  `glossary.phrases.touble_logging_in_Q`
                )}`}</Base.Text>
                <Base.Center>
                  <Base.Text fontSize={`sm`}>
                    {`${ts(`library.screens.open.forgot_password.content_l1`)}`}
                  </Base.Text>
                  <Base.Text fontSize={`sm`}>
                    {`${ts(
                      `library.screens.open.forgot_password.content_l2`
                    )}.`}
                  </Base.Text>
                </Base.Center>

                <Base.Center w={`100%`}>
                  <Base.Input
                    w={`100%`}
                    mt={3}
                    size={`md`}
                    variant={`outline`}
                    bg={_inputBg}
                    borderColor={_inputBorder}
                    _focus={{
                      borderColor: _inputBorderFocus,
                    }}
                    placeholder={`${ts(
                      `glossary.phrases.phone_number_username_or_email`
                    )}`}
                  />
                </Base.Center>

                <Base.Button
                  isLoading={shape.loading}
                  w={`100%`}
                  mt={4}
                  colorScheme={`blue`}
                  onPress={___forgotPassword}
                >
                  {`${ts(`glossary.simple.continue`)}`}
                </Base.Button>
              </Base.VStack>
            </Base.VStack>
          </Base.Flex>
        ),

        // bottom
        bottom: (
          <Base.HStack w={`100%`} justifyContent={`center`} mt={2}>
            <Base.Button
              variant={`ghost`}
              colorScheme={`blue`}
              size={`md`}
              ml={-2}
              onPress={___toLogIn}
            >
              {`${ts(`glossary.compound.back_to`)} ${ts(
                `glossary.compound.log_in_uc`
              )}`}
            </Base.Button>
          </Base.HStack>
        ),
      }}
    />
  )
}
