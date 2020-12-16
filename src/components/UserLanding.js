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

const UserLanding = (props) => {
    const [pokemonDetails, setPokemonDetails] = useState({
        picture: '',
    })

    React.useEffect(() => props.getPokemon(), [])

    // const axiosPokemonImg = (name) => {
    //     axios
    //         .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //         .then((res) => {
    //             console.log(res.data.sprites.front_default)
    //             setPokemonDetails((prevState) => ({
    //                 pokemonDetails: {
    //                     picture: res.data.sprites.front_default,
    //                 },
    //             }))
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    const consol = () => {
        console.log(props.pokemon)
    }

    return (
        <Box>
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
