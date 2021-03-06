import axios from 'axios'

export const getPokemon = () => {
    return function (dispatch) {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')
            .then((res) => {
                const action = {
                    type: 'GET_POKEMON',
                    value: res.data.results,
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const updatePokemon = (pokemon) => {
    return {
        type: 'UPDATE_POKEMON',
        value: pokemon,
    }
}
