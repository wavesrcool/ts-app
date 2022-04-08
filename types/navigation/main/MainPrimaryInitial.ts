import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TypeNavigationRoot } from '..'

export type NavigationTypesMainPrimaryInitialScreenOriginTabs = {
  // class main view 1
  Primary: undefined

  // class main view 2
  Secondary: undefined

  // class main view 3
  Tertiary: undefined

  // class main view 4
  Quarternary: undefined
}

export type NavigationTypesMainPrimaryInitialScreenOriginTabsOpts<
  Screen extends keyof NavigationTypesMainPrimaryInitialScreenOriginTabs
> = CompositeScreenProps<
  BottomTabScreenProps<
    NavigationTypesMainPrimaryInitialScreenOriginTabs,
    Screen
  >,
  NativeStackScreenProps<TypeNavigationRoot>
>
