import {
    Avatar,
    Button,
    Card,
    Typography,
    CardContent,
} from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import backdrop from '../Backdrops/GrassBackdrop.jpg'

const PokemonSingle = (props) => {
    let index = `${props.url.split('/')[6]}`

    if (index.length === 1) {
        index = `#00${index}`
    } else if (index.length === 2) {
        index = `#0${index}`
    } else if (index.length === 3) {
        index = `#${index}`
    }

    const [stats, setStats] = useState({
        name: '',
        images: '',
        types: [],
        gameIndex: index,
    })

    const fetchStats = () => {
        axios
            .get(props.url)
            .then((res) => {
                let fixedName =
                    res.data.name.charAt(0).toUpperCase() +
                    res.data.name.slice(1)

                for (let i = 0; i < fixedName.length; i++) {
                    if (fixedName[i] === '-') {
                        fixedName = fixedName.split('-')[0]
                    }
                }
                props.updatePokemon(res.data)
                setStats((prevState) => ({
                    name: fixedName,
                    images: res.data.sprites,
                    types: res.data.types,
                    gameIndex: index,
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // const consol = () => {
    //     console.log(stats)
    // }

    React.useEffect(() => fetchStats(), [])

    return (
        <Card
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'flex-start',
                marginTop: 10,
                marginLeft: 20,
                width: 150,
            }}
        >
            <Typography
                style={{ color: 'gray', marginTop: 5, marginLeft: 5 }}
            >{`${stats.gameIndex}`}</Typography>
            <img
                element="img"
                src={stats.images.front_default}
                alt={stats.name}
                style={{
                    alignSelf: 'center',
                    backgroundImage: `url(${backdrop})`,
                    backgroundPosition: 'center',
                    backgroundSize: '300px 100px',
                    border: '0px solid black',
                    borderRadius: '50%',
                }}
            />
            <Typography style={{ alignSelf: 'center' }}>
                {stats.name}
            </Typography>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                {stats.types.map((item, id) => {
                    let backgroundColor = ''
                    let textColor = ''

                    switch (item.type.name) {
                        case 'fire':
                            backgroundColor = 'rgb(253,125,36)'
                            textColor = 'white'
                            break
                        case 'flying':
                            backgroundColor =
                                'linear-gradient(rgb(62,200,239) 50%, rgb(189,185,184) 50%)'
                            textColor = 'black'
                            break
                        case 'water':
                            backgroundColor = 'rgb(69,146,196)'
                            textColor = 'white'
                            break
                        case 'bug':
                            backgroundColor = 'rgb(114,159,63)'
                            textColor = 'white'
                            break
                        case 'dragon':
                            backgroundColor =
                                'linear-gradient(rgb(83,164,207) 50%, rgb(241,110,87) 50%)'
                            textColor = 'white'
                            break
                        case 'fairy':
                            backgroundColor = 'rgb(254,186,234)'
                            textColor = 'black'
                            break
                        case 'ghost':
                            backgroundColor = 'rgb(123,98,163)'
                            textColor = 'white'
                            break
                        case 'ground':
                            backgroundColor =
                                'linear-gradient(rgb(247,222,63) 50%, rgb(171,152,66) 50%)'
                            textColor = 'black'
                            break
                        case 'normal':
                            backgroundColor = 'rgb(164,172,175)'
                            textColor = 'black'
                            break
                        case 'psychic':
                            backgroundColor = 'rgb(243,102,185)'
                            textColor = 'white'
                            break
                        case 'steel':
                            backgroundColor = 'rgb(159,184,185)'
                            textColor = 'black'
                            break
                        case 'dark':
                            backgroundColor = 'rgb(112,112,112)'
                            textColor = 'white'
                            break
                        case 'electric':
                            backgroundColor = 'rgb(238,213,53)'
                            textColor = 'black'
                            break
                        case 'fighting':
                            backgroundColor = 'rgb(213,103,35)'
                            textColor = 'white'
                            break
                        case 'grass':
                            backgroundColor = 'rgb(155,204,80)'
                            textColor = 'black'
                            break
                        case 'ice':
                            backgroundColor = 'rgb(155,204,80)'
                            textColor = 'black'
                            break
                        case 'poison':
                            backgroundColor = 'rgb(185,127,201)'
                            textColor = 'white'
                            break
                        case 'rock':
                            backgroundColor = 'rgb(163,140,33)'
                            textColor = 'white'
                            break
                        default:
                            console.log(`${item.type.name} is not a type.`)
                    }

                    return (
                        <Typography
                            style={{
                                fontSize: 12,
                                marginLeft: 2,
                                marginRight: 2,
                                marginBottom: 5,
                                border: '0px solid black',
                                borderRadius: '2px',
                                width: '4rem',
                                textAlign: 'center',
                                color: textColor,
                                background: backgroundColor,
                                backgroundColor: backgroundColor,
                            }}
                            key={item.type.name + id}
                        >
                            {' '}
                            {item.type.name}
                        </Typography>
                    )
                })}
            </div>

            {/* <Button onClick={consol}> Click</Button> */}
        </Card>
    )
}

export default PokemonSingle
