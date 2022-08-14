import {useEffect, useRef, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,  AppDispatch } from '../Redux/store';
import {changeMinute, changeSecond} from '../Redux/Slice/changeCounter';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#BDBFBE',
}));

const Minute = () => {
    const dispatch: AppDispatch = useDispatch()
    const counter = useSelector((state: RootState) => state.changeCounter)

    useEffect(()=> {
        console.log(counter.plus)
        if (counter.second == 59 && !counter.plus){
            dispatch(changeMinute({plus:false, minus: false}))
        }
    }, [counter.second == 59 && !counter.plus])

    const btnPlusClick = () => {
        dispatch(changeMinute({plus:true, minus: false}))
    }

    const btnRemoveClick = () => {
        dispatch(changeMinute({plus:false, minus: true}))
    }

    return(
        <Grid item xs={2}>
            <Item>{counter.minute}</Item>
            <IconButton aria-label="add" color="primary" onClick={btnPlusClick}>
                <AddIcon/>
            </IconButton>
            <IconButton aria-label="remove" color="primary" onClick={btnRemoveClick}>
                <RemoveIcon/>
            </IconButton>
        </Grid>
    )
}

export default Minute;