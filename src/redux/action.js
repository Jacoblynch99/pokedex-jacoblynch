import axios from 'axios'

export const getPokemon = () => {
    return function (dispatch) {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=5&offset=490')
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
