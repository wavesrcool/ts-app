import * as SecureStore from 'expo-secure-store'

export const readSecureStore = async (key: string): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync(key)
  } catch (e) {
    return null
  }
}
