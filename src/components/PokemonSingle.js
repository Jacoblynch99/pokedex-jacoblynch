import {
    Avatar,
    Button,
    Card,
    Typography,
    CardContent,
} from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import ElementType from './ElementType'

const PokemonSingle = (props) => {
    const [stats, setStats] = useState({
        images: '',
        types: '',
    })

    const fetchStats = () => {
        let statsDupe = axios
            .get(props.url)
            .then((res) => {
                console.log(res.data.types[0].type.name)
                setStats((prevState) => ({
                    images: res.data.sprites,
                    types: res.data.types,
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const consol = () => {
        console.log(stats.type)
    }

    React.useEffect(() => fetchStats(), [])

    return (
        <Card style={{ marginTop: 10, marginLeft: 20, width: 100 }}>
            <img
                element="img"
                src={stats.images.front_default}
                alt={props.name}
            />
            <Typography>{props.name}</Typography>
            <ElementType types={stats.type} />
            {/* <Typography>{stats.type[0].type.name}</Typography> */}
            <Button onClick={consol}> Click</Button>
        </Card>
    )
}

export default PokemonSingle
