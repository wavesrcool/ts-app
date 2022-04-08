import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../../store'

/**
 * interface: coords
 */
interface IStateValueLibMapDirectionsShapePolyline {
  latitude: number
  longitude: number
}

/**
 * interface: state.value
 */
interface IStateValueLibMapDirectionsShape {
  loading: boolean
  error: boolean
  message?: string
  origin: IStateValueLibMapDirectionsShapePolyline
  destination: IStateValueLibMapDirectionsShapePolyline
}

/**
 * interface: state
 */
interface IStateLibMapDirectionsShape {
  value: IStateValueLibMapDirectionsShape
}

/**
 * state: initial
 */
const initialState: IStateLibMapDirectionsShape = {
  value: {
    loading: false,
    error: false,
    message: undefined,
    origin: { latitude: 0, longitude: 0 },
    destination: { latitude: 0, longitude: 0 },
  },
}

/**
 * reducers
 */
export const LibMapDirectionsShapeSlice = createSlice({
  name: 'LibMapDirectionsShape',
  initialState,
  reducers: {
    initLibMapDirectionsShape: (state) => {
      state.value = {
        loading: false,
        error: false,
        message: undefined,
        origin: { latitude: 0, longitude: 0 },
        destination: { latitude: 0, longitude: 0 },
      }
    },

    writeLibMapDirectionsShapeLoadingTrue: (state) => {
      state.value = {
        ...state.value,
        loading: true,
      }
    },

    writeLibMapDirectionsShapeLoadingFalse: (state) => {
      state.value = {
        ...state.value,
        loading: false,
      }
    },

    writeLibMapDirectionsShapeErrorTrue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,
        error: true,
        message: action.payload,
      }
    },

    writeLibMapDirectionsShapeErrorFalse: (state) => {
      state.value = {
        ...state.value,
        error: false,
        message: undefined,
      }
    },

    /**
     * lib
     */

    writeLibMapDirectionsShapeOrigin: (
      state,
      action: PayloadAction<IStateValueLibMapDirectionsShapePolyline>
    ) => {
      state.value = {
        ...state.value,
        origin: action.payload,
      }
    },

    writeLibMapDirectionsShapeDestination: (
      state,
      action: PayloadAction<IStateValueLibMapDirectionsShapePolyline>
    ) => {
      state.value = {
        ...state.value,
        destination: action.payload,
      }
    },
  },
})

export const {
  initLibMapDirectionsShape,
  writeLibMapDirectionsShapeLoadingTrue,
  writeLibMapDirectionsShapeLoadingFalse,
  writeLibMapDirectionsShapeErrorTrue,
  writeLibMapDirectionsShapeErrorFalse,
  //lib
  writeLibMapDirectionsShapeDestination,
  writeLibMapDirectionsShapeOrigin,
} = LibMapDirectionsShapeSlice.actions

export const ofLibMapDirectionsShape = (
  state: AppState
): IStateValueLibMapDirectionsShape => state.LibMapDirectionsShape.value
export default LibMapDirectionsShapeSlice.reducer
