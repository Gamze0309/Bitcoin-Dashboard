import {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,  AppDispatch } from '../Redux/store';
import {changeSecond} from '../Redux/Slice/changeCounter';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#BDBFBE',
}));

const Second = () => {
    const dispatch: AppDispatch = useDispatch()
    const counter = useSelector((state: RootState) => state.changeCounter)
    const [intervalId, setIntervalId] = useState(null)

    useEffect(()=> {
        let myInterval = setInterval(()=> {
            dispatch(changeSecond({plus: false}))
        }, 1000)
        setIntervalId(myInterval)
        return () => {
            clearInterval(myInterval)
        }
    }, [])

    const btnPlusClick = () => {
        clearInterval(intervalId)
        dispatch(changeSecond({plus: true}))
        let myInterval = setInterval(()=> {
            dispatch(changeSecond({plus: false}))
        }, 1000)
        setIntervalId(myInterval)
    }

    const btnRemoveClick = () => {
        clearInterval(intervalId)
        dispatch(changeSecond({plus: false}))
        let myInterval = setInterval(()=> {
            dispatch(changeSecond({plus: false}))
        }, 1000)
        setIntervalId(myInterval)
    }

    return(
        <Grid item xs={2}>
            <Item >{counter.second}</Item>
            <IconButton aria-label="add" color="primary" onClick={btnPlusClick}>
                <AddIcon/>
            </IconButton>
            <IconButton aria-label="remove" color="primary" onClick={btnRemoveClick}>
                <RemoveIcon/>
            </IconButton>
        </Grid>
        
    )
}

export default Second;