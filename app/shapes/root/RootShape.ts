import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../store'

/**
 * interface: state.value
 */
interface IStateValueRootShape {
  loading: boolean
  error: boolean
  message: string | undefined
  open: boolean
  value: string | undefined
  confirm_email: boolean
  confirm_sms: boolean
}

/**
 * interface: state
 */
interface IStateRootShape {
  value: IStateValueRootShape
}

/**
 * state: initial
 */
const initialState: IStateRootShape = {
  value: {
    loading: false,
    error: false,
    message: undefined,
    open: true,
    confirm_email: false,
    confirm_sms: false,
    value: undefined,
  },
}

/**
 * reducers
 */
export const RootShapeSlice = createSlice({
  name: 'RootShape',
  initialState,
  reducers: {
    initRootShape: (state) => {
      state.value = {
        loading: false,
        error: false,
        message: undefined,
        open: true,
        confirm_email: false,
        confirm_sms: false,
        value: undefined,
      }
    },

    writeRootShapeLoadingTrue: (state) => {
      state.value = {
        ...state.value,
        loading: true,
      }
    },

    writeRootShapeLoadingFalse: (state) => {
      state.value = {
        ...state.value,
        loading: false,
      }
    },

    writeRootShapeErrorTrue: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        error: true,
        message: action.payload,
      }
    },

    writeRootShapeErrorFalse: (state) => {
      state.value = {
        ...state.value,
        error: false,
        message: undefined,
      }
    },

    /**
     * lib
     */
    writeRootShapeOpenTrue: (state) => {
      state.value = {
        ...state.value,
        open: true,
      }
    },

    writeRootShapeOpenFalse: (state) => {
      state.value = {
        ...state.value,
        open: false,
      }
    },

    writeRootShapeConfirmEmailTrue: (state) => {
      state.value = {
        ...state.value,
        confirm_email: true,
      }
    },

    writeRootShapeConfirmEmailFalse: (state) => {
      state.value = {
        ...state.value,
        confirm_email: false,
      }
    },

    writeRootShapeConfirmSmsTrue: (state) => {
      state.value = {
        ...state.value,
        confirm_sms: true,
      }
    },

    writeRootShapeConfirmSmsFalse: (state) => {
      state.value = {
        ...state.value,
        confirm_sms: false,
      }
    },

    writeRootShapeValue: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        value: action.payload,
      }
    },

    writeRootShapeValueUndef: (state) => {
      state.value = {
        ...state.value,
        value: undefined,
      }
    },
  },
})

export const {
  initRootShape,
  writeRootShapeLoadingTrue,
  writeRootShapeLoadingFalse,
  writeRootShapeErrorTrue,
  writeRootShapeErrorFalse,
  //
  writeRootShapeOpenFalse,
  writeRootShapeOpenTrue,
  writeRootShapeConfirmEmailFalse,
  writeRootShapeConfirmEmailTrue,
  writeRootShapeConfirmSmsFalse,
  writeRootShapeConfirmSmsTrue,
  writeRootShapeValue,
  writeRootShapeValueUndef,
} = RootShapeSlice.actions

export const ofRootShape = (state: AppState): IStateValueRootShape =>
  state.RootShape.value
export default RootShapeSlice.reducer
