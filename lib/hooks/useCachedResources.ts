import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'
/*
import { Bellota_400Regular, Bellota_700Bold, Bellota_700Bold_Italic } from '@expo-google-fonts/bellota'

import { Cagliostro_400Regular } from '@expo-google-fonts/cagliostro'

import { Calistoga_400Regular } from '@expo-google-fonts/calistoga'

import { Carme_400Regular } from '@expo-google-fonts/carme'

import { Codystar_400Regular } from '@expo-google-fonts/codystar'

import { CutiveMono_400Regular } from '@expo-google-fonts/cutive-mono'

import { Cutive_400Regular } from '@expo-google-fonts/cutive'

import { Habibi_400Regular } from '@expo-google-fonts/habibi'

import { LaBelleAurore_400Regular } from '@expo-google-fonts/la-belle-aurore'

import { Lemon_400Regular } from '@expo-google-fonts/lemon'

import { Lemonada_400Regular, Lemonada_700Bold } from '@expo-google-fonts/lemonada'

import { OverpassMono_700Bold } from '@expo-google-fonts/overpass-mono'
*/
const fonts = {
  'circular.300': require(`../../assets/fonts/Circular/CircularStd-Light.otf`),
  'circular.300.it': require(`../../assets/fonts/Circular/CircularStd-LightItalic.otf`),
  'circular.400': require(`../../assets/fonts/Circular/CircularStd-Book.otf`),
  'circular.400.it': require(`../../assets/fonts/Circular/CircularStd-BookItalic.otf`),
  'circular.500': require(`../../assets/fonts/Circular/CircularStd-Medium.otf`),
  'circular.500.it': require(`../../assets/fonts/Circular/CircularStd-MediumItalic.otf`),
  'circular.700': require(`../../assets/fonts/Circular/CircularStd-Bold.otf`),
  'circular.700.it': require(`../../assets/fonts/Circular/CircularStd-BoldItalic.otf`),
  'circular.800': require(`../../assets/fonts/Circular/CircularStd-Black.otf`),
  'circular.800.it': require(`../../assets/fonts/Circular/CircularStd-BlackItalic.otf`),
  /*
  Bellota_400Regular,
  Bellota_700Bold,
  Bellota_700Bold_Italic,
  Cagliostro_400Regular,
  Calistoga_400Regular,
  Carme_400Regular,
  Codystar_400Regular,
  CutiveMono_400Regular,
  Cutive_400Regular,
  Habibi_400Regular,
  LaBelleAurore_400Regular,
  Lemon_400Regular,
  Lemonada_400Regular,
  Lemonada_700Bold,
  OverpassMono_700Bold,
  */
}

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync(): Promise<void> {
      try {
        SplashScreen.preventAutoHideAsync()

        await Font.loadAsync(fonts)
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
