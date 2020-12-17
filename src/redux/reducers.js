import { combineReducers } from 'redux'

const pokemon = (state = [], action) => {
    switch (action.type) {
        case 'GET_POKEMON':
            return action.value
        default:
            return state
    }
}

const pokemonDetails = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_POKEMON':
            return (state = [...state, action.value])

        default:
            return state
    }
}

export default combineReducers({ pokemon, pokemonDetails })
