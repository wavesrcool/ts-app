import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../../../store'

/**
 * interface: state.value
 */
interface IStateValueForgotPasswordShape {
  loading: boolean
  error: boolean
  message: string | undefined
}

/**
 * interface: state
 */
interface IStateForgotPasswordShape {
  value: IStateValueForgotPasswordShape
}

/**
 * state: initial
 */
const initialState: IStateForgotPasswordShape = {
  value: {
    loading: false,
    error: false,
    message: undefined,
  },
}

/**
 * reducers
 */
export const ForgotPasswordShapeSlice = createSlice({
  name: 'ForgotPasswordShape',
  initialState,
  reducers: {
    initForgotPasswordShape: (state) => {
      state.value = { loading: false, error: false, message: undefined }
    },

    writeForgotPasswordShapeLoadingTrue: (state) => {
      state.value = {
        ...state.value,
        loading: true,
      }
    },

    writeForgotPasswordShapeLoadingFalse: (state) => {
      state.value = {
        ...state.value,
        loading: false,
      }
    },

    writeForgotPasswordShapeErrorTrue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,
        error: true,
        message: action.payload,
      }
    },

    writeForgotPasswordShapeErrorFalse: (state) => {
      state.value = {
        ...state.value,
        error: false,
        message: undefined,
      }
    },

    /**
     * lib
     */
  },
})

export const {
  initForgotPasswordShape,
  writeForgotPasswordShapeLoadingTrue,
  writeForgotPasswordShapeLoadingFalse,
  writeForgotPasswordShapeErrorTrue,
  writeForgotPasswordShapeErrorFalse,
} = ForgotPasswordShapeSlice.actions

export const ofForgotPasswordShape = (
  state: AppState
): IStateValueForgotPasswordShape => state.ForgotPasswordShape.value
export default ForgotPasswordShapeSlice.reducer
