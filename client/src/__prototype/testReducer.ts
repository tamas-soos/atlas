const defaultState = {
  color: "red",
  name: "init name",
}

export default function testReducer(state: any = defaultState, action: any): any {
  switch (action.type) {
    case "NAME_CHANGED":
      return {
        ...state,
        name: action.payload,
      }
    case "FETCH_GITHUB_FOLLOWERS_SUCCESS":
    case "FETCH_GITHUB_FOLLOWERS_ERROR":
      return {
        ...state,
        github: action.payload,
      }
    default:
      return state
  }
}
