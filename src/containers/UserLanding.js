import { connect } from 'react-redux'
import UserLanding from '../components/UserLanding'
import { getPokemon } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        pokemonDetails: state.pokemonDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemon: () => dispatch(getPokemon()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)
