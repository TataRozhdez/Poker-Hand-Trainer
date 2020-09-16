import React, { useReducer } from 'react'
import axios from 'axios'
import DeckContext from './deckContext'
import deckReducer from './deckReducer'
import { Hand } from 'pokersolver'
import {
  GET_DECK,
  GET_CARDS,
  SET_RESULT,
  STOP_GAME,
  CONNECT_ERROR,
  TIMER
} from '../types'

const DeckState = props => {
  const initialState = {
    loading: true,
    deck: null,
    gameStarted: false,
    cards: null,
    timer: null,
    hand: null,
    results: [
      {
        packet: '-',
        timelab: '-'
      }
    ],
    error: null       // 8 pieces
  }

  const [state, dispatch] = useReducer(deckReducer, initialState)

  // Timer
  const setTime = (time) => {
    dispatch({
      type: TIMER,
      payload: time,
    })
  }

  // Get Deck
  const getDeck = async () => {
    try {
      const res = await axios.get(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
      )

      dispatch({
        type: GET_DECK,
        payload: res.data.deck_id,
      })
    } catch (error) {
      dispatch({
        type: CONNECT_ERROR,
        payload: error.response.msg,
      })
    }
  }

  // Get Cards
  const getCards = async () => {
    try {
      await axios.get(`https://deckofcardsapi.com/api/deck/${state.deck}/shuffle/
      `)
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${state.deck}/draw/?count=7`
      )
      const cards = res.data.cards
      const timeStart = Date.now()
      const renderingHand = []

      cards.map(i => (
        renderingHand.push(i.code[0].startsWith('0')? i.code.replace('0', 'T') : i.code)
      ))

      const hand = Hand.solve(renderingHand)

      console.log('Hand:', hand.name)
      console.log('descr', hand.toString())

      dispatch({
        type: GET_CARDS,
        payload: hand.name,
        data: res.data,
        time: timeStart
      })
    } catch (error) {
      dispatch({
        type: CONNECT_ERROR,
        payload: error.response.msg,
      })
    }
  }

  // Choose answer
  const setResult = (time) => {
    // const timeSec = time * 0.001
    const timeSec =  Math.floor(time * 0.001 * 10) / 10
  
    const item = state.cards.map(k => {
      let letterFirst

      if (k.code[0] === '0') {
        letterFirst = '10' 
      } else {
        letterFirst = k.code[0]
      }

      if (k.code[1] === 'C') {
        return letterFirst + '\u2663'
      }
      if (k.code[1] === 'H') {
        return letterFirst + '\u2665'
      }
      if (k.code[1] === 'D') {
        return letterFirst + '\u2666'
      }
      if (k.code[1] === 'S') {
        return letterFirst + '\u2660'
      }
      return k.code
    })
    const itemString = item.join(', ')

    const res = {
      packet: itemString,
      timelab: timeSec
    }

    getCards()

    const results = [res, ...state.results]
    dispatch({
      type: SET_RESULT,
      payload: results
    })
  }

  // Stop Game
  const stopGame = async () => {
    try {
      const results = [{
        packet: '-',
        timelab: '-'
      }]

      dispatch({
        type: STOP_GAME,
        results: results
      })
    } catch (error) {
      dispatch({
        type: CONNECT_ERROR,
        payload: error.response.msg,
      })
    }
  }

  return (
    <DeckContext.Provider
      value={{
        loading: state.loading,
        gameStarted: state.gameStarted,
        error: state.error,
        deck: state.deck,
        cards: state.cards,
        hand: state.hand,
        results: state.results,
        timer: state.timer,
        getDeck,
        getCards,
        stopGame,
        setResult,
        setTime,
      }}
    >
      {props.children}
    </DeckContext.Provider>
  )
}

export default DeckState