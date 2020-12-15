import axios from 'axios'

export const getPokemon = () => {
    return function (dispatch) {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0')
            .then((res) => {
                return axios.get(res.data.results.url).then((res) => {
                    const action = {
                        type: 'GET_POKEMON',
                        value: res,
                    }
                    dispatch(action)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
