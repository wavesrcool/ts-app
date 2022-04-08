import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../../store'

/**
 * interface: state.value
 *
 * @field alert: boolean toggle for toast
 * @field status: (opt) message of toast id
 * @field instruction: graph messages response
 */
interface IStateValueLibPrimaryEmailPhoneSubmissionShape {
  loading: boolean

  error: boolean
  message: string | undefined

  instruction: string

  alert: boolean
  status: string | undefined

  value: string
  pass_value: boolean
}

/**
 * interface: state
 */
interface IStateLibPrimaryEmailPhoneSubmissionShape {
  value: IStateValueLibPrimaryEmailPhoneSubmissionShape
}

const obj: IStateValueLibPrimaryEmailPhoneSubmissionShape = {
  loading: false,

  error: false,
  message: undefined,

  instruction: ``,

  alert: false,
  status: undefined,

  value: ``,
  pass_value: false,
}

/**
 * state: initial
 */
const initialState: IStateLibPrimaryEmailPhoneSubmissionShape = {
  value: obj,
}

/**
 * reducers
 */
export const LibPrimaryEmailPhoneSubmissionShapeSlice = createSlice({
  name: 'LibPrimaryEmailPhoneSubmissionShape',
  initialState,
  reducers: {
    initLibPrimaryEmailPhoneSubmissionShape: (state) => {
      state.value = obj
    },

    writeLibPrimaryEmailPhoneSubmissionShapeLoadingTrue: (state) => {
      state.value = {
        ...state.value,
        loading: true,
      }
    },

    writeLibPrimaryEmailPhoneSubmissionShapeLoadingFalse: (state) => {
      state.value = {
        ...state.value,
        loading: false,
      }
    },

    writeLibPrimaryEmailPhoneSubmissionShapeErrorTrue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,
        error: true,
        message: action.payload,
      }
    },

    writeLibPrimaryEmailPhoneSubmissionShapeErrorFalse: (state) => {
      state.value = {
        ...state.value,
        error: false,
        message: undefined,
      }
    },

    /**
     * lib
     */

    writeLibPrimaryEmailPhoneSubmissionShapeValuePassTrue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,
        value: action.payload,
        pass_value: true,
      }
    },

    writeLibPrimaryEmailPhoneSubmissionShapeValuePassFalse: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,
        value: action.payload,
        pass_value: false,
      }
    },

    writeLibPrimaryEmailPhoneSubmissionShapeAlert: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,
        alert: !state.value.alert,
        status: action.payload,
      }
    },
  },
})

export const {
  initLibPrimaryEmailPhoneSubmissionShape,
  writeLibPrimaryEmailPhoneSubmissionShapeLoadingTrue,
  writeLibPrimaryEmailPhoneSubmissionShapeLoadingFalse,
  writeLibPrimaryEmailPhoneSubmissionShapeErrorTrue,
  writeLibPrimaryEmailPhoneSubmissionShapeErrorFalse,
  // lib
  writeLibPrimaryEmailPhoneSubmissionShapeValuePassFalse,
  writeLibPrimaryEmailPhoneSubmissionShapeValuePassTrue,
  writeLibPrimaryEmailPhoneSubmissionShapeAlert,
} = LibPrimaryEmailPhoneSubmissionShapeSlice.actions

export const ofLibPrimaryEmailPhoneSubmissionShape = (
  state: AppState
): IStateValueLibPrimaryEmailPhoneSubmissionShape =>
  state.LibPrimaryEmailPhoneSubmissionShape.value
export default LibPrimaryEmailPhoneSubmissionShapeSlice.reducer
