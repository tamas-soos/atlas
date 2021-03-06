import { Action, mapState } from "../types"

const initialState = {
  geo: { lng: 19.054647, lat: 47.497903 },
  distance: 250,
}

export const mapReducer = (state: mapState = initialState, action: Action<any>) => {
  switch (action.type) {
    case "SET_GEO":
      return {
        ...state,
        geo: action.payload,
      }
    case "SET_DISTANCE":
      return {
        ...state,
        distance: action.payload,
      }
    default:
      return state
  }
}
