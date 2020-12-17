import React from 'react'
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

const PokedexSearchBar = (props) => {
    return (
        <AppBar>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
            />
        </AppBar>
    )
}

export default PokedexSearchBar
