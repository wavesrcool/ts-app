/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from 'axios'

export const httpAsync = async (
  path: string,
  data?: any
): Promise<AxiosResponse<any, any> | null> => {
  try {
    return await axios.post(
      `https://8a68vfgql8.execute-api.us-east-1.amazonaws.com` + path,
      data
    )
  } catch (e) {
    console.log(e)

    return null
  }
}
