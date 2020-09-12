import {
  GET_DECK,
  GET_CARDS,
  // SAVE_RESULT,
  STOP_GAME,
  CONNECT_ERROR,
  WRONG_ANSWER
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_DECK:
      return {
        ...state,
        deck: action.payload,
        loading: false
      }
    case GET_CARDS:
      return {
        ...state,
        gameStarted: true,
        cards: action.payload
      }
    case STOP_GAME: 
      return {
        ...state,
        gameStarted: false,
        cards: null,
        results: null
      }
    case CONNECT_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}