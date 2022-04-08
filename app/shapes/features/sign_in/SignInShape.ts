import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../../store'

interface IPayloadWriteSignInShapeValuePassTrue {
  value: string
  type: `phone` | `email` | `username`
}

/**
 * interface: state.value
 */
interface IStateValueSignInShape {
  loading: boolean
  error: boolean
  message: string | undefined
  value: string
  value_pass: boolean
  value_type: `phone` | `email` | `username` | undefined
  passphrase: string
  passphrase_pass: boolean
  passphrase_show: boolean
}

/**
 * interface: state
 */
interface IStateSignInShape {
  value: IStateValueSignInShape
}

/**
 * state: initial
 */
const initialState: IStateSignInShape = {
  value: {
    loading: false,
    error: false,
    message: undefined,
    value: ``,
    value_pass: false,
    value_type: undefined,
    passphrase: ``,
    passphrase_pass: false,
    passphrase_show: false,
  },
}

/**
 * reducers
 */
export const SignInShapeSlice = createSlice({
  name: 'SignInShape',
  initialState,
  reducers: {
    initSignInShape: (state) => {
      state.value = {
        loading: false,
        error: false,
        message: undefined,
        value: ``,
        value_pass: false,
        value_type: undefined,
        passphrase: ``,
        passphrase_pass: false,
        passphrase_show: false,
      }
    },

    writeSignInShapeLoadingTrue: (state) => {
      state.value = {
        ...state.value,
        loading: true,
      }
    },

    writeSignInShapeLoadingFalse: (state) => {
      state.value = {
        ...state.value,
        loading: false,
      }
    },

    writeSignInShapeErrorTrue: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        error: true,
        message: action.payload,
      }
    },

    writeSignInShapeErrorFalse: (state) => {
      state.value = {
        ...state.value,
        error: false,
        message: undefined,
      }
    },

    /**
     * lib
     */
    writeSignInShapeValuePassTrue: (
      state,
      action: PayloadAction<IPayloadWriteSignInShapeValuePassTrue>
    ) => {
      state.value = {
        ...state.value,

        value: action.payload.value,
        value_pass: true,
        value_type: action.payload.type,
      }
    },

    writeSignInShapeValuePassFalse: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,

        value: action.payload,
        value_pass: false,
        value_type: undefined,
      }
    },

    writeSignInShapePassphrasePassTrue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,

        passphrase: action.payload,
        passphrase_pass: true,
      }
    },

    writeSignInShapePassphrasePassFalse: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,

        passphrase: action.payload,
        passphrase_pass: false,
      }
    },

    writeSignInShapePassphraseShowTrue: (state) => {
      state.value = {
        ...state.value,
        passphrase_show: true,
      }
    },

    writeSignInShapePassphraseShowFalse: (state) => {
      state.value = {
        ...state.value,
        passphrase_show: false,
      }
    },
  },
})

export const {
  initSignInShape,
  writeSignInShapeLoadingTrue,
  writeSignInShapeLoadingFalse,
  writeSignInShapeErrorTrue,
  writeSignInShapeErrorFalse,
  //
  writeSignInShapePassphrasePassTrue,
  writeSignInShapePassphrasePassFalse,
  writeSignInShapeValuePassFalse,
  writeSignInShapeValuePassTrue,
  writeSignInShapePassphraseShowFalse,
  writeSignInShapePassphraseShowTrue,
} = SignInShapeSlice.actions

export const ofSignInShape = (state: AppState): IStateValueSignInShape =>
  state.SignInShape.value
export default SignInShapeSlice.reducer
