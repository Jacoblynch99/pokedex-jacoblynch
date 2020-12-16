import {
    AppBar,
    Box,
    Select,
    MenuItem,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Chip,
    Dialog,
    DialogTitle,
    DialogActions,
    Container,
} from '@material-ui/core'
import PokemonSingle from './PokemonSingle'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import background from '../Backdrops/pokedexBackground.jpg'

const UserLanding = (props) => {
    const [pokemonDetails, setPokemonDetails] = useState({
        picture: '',
    })

    React.useEffect(() => props.getPokemon(), [])

    const consol = () => {
        console.log(props.pokemon)
    }

    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'flex-start',
                width: '100vw',
                backgroundImage: `url(${background})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
            }}
        >
            {props.pokemon.map((item) => {
                return (
                    <PokemonSingle
                        key={item.name}
                        name={item.name}
                        url={item.url}
                    />
                )
            })}
        </Box>
    )
}

export default UserLanding
