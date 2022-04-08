import * as SecureStore from 'expo-secure-store'

export const writeSecureStore = async (
  key: string,
  value: string
): Promise<boolean> => {
  try {
    await SecureStore.setItemAsync(key, value)
    return true
  } catch (e) {
    return false
  }
}
