import * as React from 'react'
import * as Base from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TypeNavigationRoot } from '../../../../types/navigation'
import { useFold, useShape } from '../../../../app/hooks'

import {
  ofSignUpShape,
  writeSignUpShapeConfirmEmailCodePassFalse,
  writeSignUpShapeConfirmEmailCodePassTrue,
  writeSignUpShapeErrorFalse,
  writeSignUpShapeErrorTrue,
  writeSignUpShapeLoadingFalse,
  writeSignUpShapeLoadingTrue,
} from '../../../../app/shapes/features/sign_up/SignUpShape'
import { sleep } from '../../../../lib/functions/sleep/sleep'
import { use_SignUpConfirmMutation } from '../../../../graphql/hooks'
import { ts } from '../../../../lib/i18n'
import { OpenScreensContainer } from '../../../../components/containers/OpenScreensContainer'

export default function OpenConfirmEmailScreenOrigin({
  navigation,
}: NativeStackScreenProps<
  TypeNavigationRoot,
  'OpenConfirmEmail'
>): JSX.Element {
  console.log('*functional* OpenConfirmEmailScreenOrigin ')

  navigation ? null : null

  const fold = useFold()
  const shape = useShape(ofSignUpShape)

  const [sign_up_confirm] = use_SignUpConfirmMutation()

  const _inputBg = Base.useColorModeValue(`gray.200`, `gray.500`)
  const _inputBorder = Base.useColorModeValue(`gray.300`, `gray.100`)
  const _inputBorderFocus = Base.useColorModeValue(`gray.300`, `gray.100`)

  const ___confirmEmail = React.useCallback(() => {
    // shape pass
    if (!shape.confirm_email_code_pass) {
      fold(writeSignUpShapeErrorTrue(`Please enter 6 number code`))
      return
    }

    // error false
    fold(writeSignUpShapeErrorFalse())

    // loading true
    fold(writeSignUpShapeLoadingTrue())
    ;(async () => {
      try {
        console.log(`*async fn* try`)
        await sleep(1111)
        const { data } = await sign_up_confirm({
          variables: {
            lambda: {
              contact: shape.value,
              code: shape.confirm_email_code,
            },
          },
        })

        console.log(data, `data`)

        switch (data?.sign_up_confirm.pass) {
          case true: {
            return
          }

          case false: {
            fold(writeSignUpShapeErrorTrue(data.sign_up_confirm.message))
            return
          }
        }
      } catch (e) {
        console.log(`*async fn* catch`)
      } finally {
        console.log(`*async fn* finally`)
        fold(writeSignUpShapeLoadingFalse())
      }
    })()
  }, [
    shape.confirm_email_code_pass,
    shape.value,
    shape.confirm_email_code,
    fold,
    sign_up_confirm,
  ])

  return (
    <OpenScreensContainer
      legend={{
        // top
        top: (
          <Base.Flex w={`100%`} alignItems={`center`} mt={`20px`}>
            <Base.VStack w={`90%`} alignItems={`center`} space={`sm`}>
              <Base.Text fontSize={`xl`}>{`Enter Confirmation Code`}</Base.Text>

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
                placeholder={`Confirmation Code`}
                onChange={(e) => {
                  const cat = e.nativeEvent.text.replace(/[^\d]/g, ``)

                  switch (cat.length === 6 ? true : false) {
                    case true: {
                      fold(writeSignUpShapeConfirmEmailCodePassTrue(cat))
                      return
                    }

                    case false: {
                      fold(writeSignUpShapeConfirmEmailCodePassFalse(cat))
                      return
                    }
                  }
                }}
              />

              <Base.Button
                mt={3}
                isLoading={shape.loading}
                w={`100%`}
                colorScheme={`blue`}
                onPress={___confirmEmail}
              >
                {`Confirm`}
              </Base.Button>

              <Base.Flex
                direction={`row`}
                w={[`100%`, null, null, null, null]}
                h={[null, null, null, null, null]}
              >
                <Base.Text
                  w={[null, null, null, null, null]}
                  h={[null, null, null, null, null]}
                  fontFamily={[null, null, null, null, null]}
                  fontWeight={[null, null, null, null, null]}
                  fontSize={[`16px`, null, null, null, null]}
                  color={[null, null, null, null, null]}
                >
                  {ts(`errors.screen.confirm_email.${shape.message}`)}
                </Base.Text>
              </Base.Flex>
            </Base.VStack>
          </Base.Flex>
        ),

        // bottom
      }}
    />
  )
}
