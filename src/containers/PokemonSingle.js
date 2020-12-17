import { connect } from 'react-redux'
import PokemonSingle from '../components/PokemonSingle'

import { updatePokemon } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        pokemonDetails: state.pokemonDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePokemon: (pokemon) => dispatch(updatePokemon(pokemon)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSingle)
