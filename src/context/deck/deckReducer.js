import {
  GET_DECK,
  GET_CARDS,
  SET_RESULT,
  STOP_GAME,
  CONNECT_ERROR,
  TIMER,
  // WRONG_ANSWER
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
        selected: null,
        cards: action.payload,
      }
    case STOP_GAME: 
      return {
        ...state,
        gameStarted: false,
        cards: null,
        selected: null,
        results: null
      }
    case SET_RESULT: 
      return {
        ...state,
        cards: null,
        selected: action.payload
      }
    case TIMER:
      return {
        ...state,
        // selected: null,
        timer: action.payload
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