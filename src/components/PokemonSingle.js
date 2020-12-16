import { Avatar, Button, Card } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'

const PokemonSingle = (props) => {
    const [stats, setStats] = useState({
        images: '',
    })

    const fetchStats = () => {
        let statsDupe = axios
            .get(props.url)
            .then((res) => {
                console.log(res.data.sprites.front_default)
                setStats((prevState) => ({
                    images: res.data.sprites,
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const consol = () => {
        console.log(stats)
    }

    React.useEffect(() => fetchStats(), [])

    return (
        <div>
            <Card>{props.name}</Card>
            <Avatar src={stats.images.front_default} />
            <Button onClick={consol}> Click</Button>
        </div>
    )
}

export default PokemonSingle
