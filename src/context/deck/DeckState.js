import React, { useReducer } from 'react'
import axios from 'axios'
import DeckContext from './deckContext'
import deckReducer from './deckReducer'
import {
  GET_DECK,
  GET_CARDS,
  SET_RESULT,
  STOP_GAME,
  CONNECT_ERROR,
  TIMER,
  // WRONG_ANSWER
} from '../types'

const DeckState = props => {
  const initialState = {
    loading: true,
    deck: null,
    gameStarted: false,
    cards: null,
    selected: null,
    timer: null,
    results: null,
    error: null
  }

  const [state, dispatch] = useReducer(deckReducer, initialState)

  // Get Deck
  const getDeck = async () => {
    try {
      const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

      dispatch({
        type: GET_DECK,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: CONNECT_ERROR,
        payload: error.response.msg
      })
    }
  }

  // Get Cards
  const getCards = async () => {
    try {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${state.deck.deck_id}/draw/?count=5`)

      dispatch({
        type: GET_CARDS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: CONNECT_ERROR,
        payload: error.response.msg
      })
    }
  }

  // Stop Game
  const stopGame = async () => {
    try {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${state.deck.deck_id}/shuffle/`)

      dispatch({
        type: STOP_GAME,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: CONNECT_ERROR,
        payload: error.response.msg
      })
    }
  }

  // Choose answer
  const handleChooseAnswer = (event) => {
    console.log(event.target.id)
    dispatch({
      type: SET_RESULT,
      payload: event.target.id
    })
  }

  // Timer
  const setTime = time => {
    console.log('constextTime', time)
    dispatch({
      type: TIMER,
      payload: time
    })
  }

  return (
    <DeckContext.Provider
      value={{
        loading: state.loading,
        gameStarted: state.gameStarted,
        error: state.error,
        deck: state.deck,
        cards: state.cards,
        results: state.results,
        selected: state.selected,
        timer: state.timer,
        getDeck,
        getCards,
        stopGame,
        handleChooseAnswer,
        setTime
      }}
    >
      {props.children}
    </DeckContext.Provider>
  )
}

export default DeckState