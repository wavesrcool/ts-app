import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationTypesMainPrimaryInitialScreenOriginTabs } from '../../../../../types/navigation/main/MainPrimaryInitial'
import MainPrimaryInitialScreenMessagesTab from './tabs/messages/MainPrimaryInitialScreenMessagesTab'
import { FontAwesome } from '@expo/vector-icons'
import MainPrimaryInitialScreenDatesTab from './tabs/dates/MainPrimaryInitialScreenDatesTab'

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}): JSX.Element {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}

const MainPrimaryInitialScreenOriginTabs =
  createBottomTabNavigator<NavigationTypesMainPrimaryInitialScreenOriginTabs>()

export default function MainPrimaryInitialScreenOrigin(): JSX.Element {
  console.log('*functional* MainPrimaryInitialScreenOrigin ')

  const role = '1'

  return (
    <MainPrimaryInitialScreenOriginTabs.Navigator
      initialRouteName={
        `Primary` //role === `1` ? `Farm` : `Main` //role === `artisan` ? `Main` : `Main`
      }
      screenOptions={{}}
    >
      <MainPrimaryInitialScreenOriginTabs.Screen
        name={`Primary`}
        component={MainPrimaryInitialScreenDatesTab}
        options={{
          title: role === `1` ? `Dates` : `Main`,
          tabBarIcon: () => <TabBarIcon name="calendar" color={`blue`} />,
        }}
      />

      <MainPrimaryInitialScreenOriginTabs.Screen
        name={`Secondary`}
        component={MainPrimaryInitialScreenMessagesTab}
        options={{
          title: role === `1` ? `Books` : `Main`,
          tabBarIcon: () => <TabBarIcon name="columns" color={`blue`} />,
        }}
      />

      <MainPrimaryInitialScreenOriginTabs.Screen
        name={`Tertiary`}
        component={MainPrimaryInitialScreenMessagesTab}
        options={{
          title: 'Messages',
          tabBarIcon: () => <TabBarIcon name="align-justify" color={`blue`} />,
        }}
      />

      <MainPrimaryInitialScreenOriginTabs.Screen
        name={`Quarternary`}
        component={MainPrimaryInitialScreenMessagesTab}
        options={{
          title: 'Photos',
          tabBarIcon: () => <TabBarIcon name="camera" color={`blue`} />,
        }}
      />
    </MainPrimaryInitialScreenOriginTabs.Navigator>
  )
}
