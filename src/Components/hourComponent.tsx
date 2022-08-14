import {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,  AppDispatch } from '../Redux/store';
import {changeHour, changeMinute, changeSecond} from '../Redux/Slice/changeCounter';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#BDBFBE',
}));

const Hour = () => {
    const dispatch: AppDispatch = useDispatch()
    const counter = useSelector((state: RootState) => state.changeCounter)
    
    useEffect(()=> {
        if((counter.minute == 59 && counter.second == 59) && !counter.plus) {
            dispatch(changeHour({plus:false, minus: false}))
        }
    }, [(counter.minute == 59 && counter.second == 59) && !counter.plus])

    const btnPlusClick = () => {
        dispatch(changeHour({plus:true, minus: false}))
    }

    const btnRemoveClick = () => {
        dispatch(changeHour({plus:false, minus: true}))
    }

    return(
        <Grid item xs={2}>
            <Item>{counter.hour}</Item>
            <IconButton aria-label="add" color="primary" onClick={btnPlusClick}>
                <AddIcon/>
            </IconButton>
            <IconButton aria-label="remove" color="primary" onClick={btnRemoveClick}>
                <RemoveIcon/>
            </IconButton>
        </Grid>
    )
}

export default Hour;