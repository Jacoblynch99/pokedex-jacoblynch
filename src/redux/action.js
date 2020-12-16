import axios from 'axios'

export const getPokemon = () => {
    return function (dispatch) {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0')
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
