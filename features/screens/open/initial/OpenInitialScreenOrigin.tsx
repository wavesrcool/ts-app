import * as React from 'react'
import * as Base from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TypeNavigationRoot } from '../../../../types/navigation'
import LogoPrimary from '../../../../components/logo/LogoPrimary'
import { ts } from '../../../../lib/i18n'

export default function OpenInitialScreenOrigin({
  navigation,
}: NativeStackScreenProps<TypeNavigationRoot, 'OpenInitial'>): JSX.Element {
  console.log('*functional* OpenInitialScreenOrigin ')

  const ___toSignUp = React.useCallback(
    () => navigation.navigate(`OpenSignUp`),
    [navigation]
  )

  const ___toSignIn = React.useCallback(
    () => navigation.navigate(`OpenSignIn`),
    [navigation]
  )

  return (
    <Base.Flex safeArea w={`100%`} h={`100%`} align={`center`}>
      <Base.Stack
        direction={`column`}
        space={`sm`}
        mt={270}
        w={`80%`}
        alignItems={`center`}
      >
        <LogoPrimary />

        <Base.Button
          w={`100%`}
          mt={6}
          colorScheme={`blue`}
          onPress={___toSignUp}
        >
          {`${ts(`library.screens.open.initial.create_account`)}`}
        </Base.Button>

        <Base.Button
          w={`100%`}
          variant={`ghost`}
          colorScheme={`blue`}
          onPress={___toSignIn}
        >
          {`${ts(`glossary.compound.sign_in`)}`}
        </Base.Button>
      </Base.Stack>
    </Base.Flex>
  )
}
