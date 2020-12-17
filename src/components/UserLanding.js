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
    TextField,
} from '@material-ui/core'
import PokemonSingle from './PokemonSingle'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import background from '../Backdrops/pokedexBackground.jpg'
import PokedexSearchBar from './PokedexSearchBar'

const UserLanding = (props) => {
    const [search, setSearch] = useState('')

    React.useEffect(() => props.getPokemon(), [])

    const handleChange = (event) => {
        setSearch({ search: event.target.value })
        console.log(search)
    }

    const consol = () => {
        console.log(props.pokemon)
    }

    return (
        <Box>
            <AppBar position="static">
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    onChange={handleChange}
                />
            </AppBar>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignContent: 'flex-start',
                    width: '100vw',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${background})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    paddingTop: 10,
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
        </Box>
    )
}

export default UserLanding
