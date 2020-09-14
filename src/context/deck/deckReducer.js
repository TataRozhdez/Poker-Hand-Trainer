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
        cards: action.data.cards,
        hand: action.payload
      }
    case STOP_GAME: 
      return {
        ...state,
        gameStarted: false,
        cards: null,
        hand: null,
        results: null,
        timer: null
      }
    case SET_RESULT: 
      return {
        ...state,
        cards: null,
        hand: null,
        timer: null,
        results: action.payload,
        gameStarted: false
      }
    case TIMER:
      return {
        ...state,
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