import {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,  AppDispatch } from '../Redux/store';
import {changeCounter, startCounter} from '../Redux/Slice/changeCounter';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Button from '@mui/material/Button';

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
    const [control, setControl] = useState(false)

    useEffect(()=> {
        let myInterval = setInterval(()=> {
            dispatch(changeCounter({plus: false, value: 1}))
        }, 1000)
        setIntervalId(myInterval)
        return () => {
            clearInterval(myInterval)
        }
    }, [])

    useEffect(()=>{
        if(counter.hour===0){
            clearInterval(intervalId)
            setControl(true)
        }
    },[counter.hour===0])

    const btnPlusClick = () => {
        clearInterval(intervalId)
        dispatch(changeCounter({plus: true, value: 1}))
        let myInterval = setInterval(()=> {
            dispatch(changeCounter({plus: false, value: 1}))
        }, 1000)
        setIntervalId(myInterval)
    }

    const btnRemoveClick = () => {
        clearInterval(intervalId)
        dispatch(changeCounter({plus: false, value: 1}))
        let myInterval = setInterval(()=> {
            dispatch(changeCounter({plus: false, value: 1}))
        }, 1000)
        setIntervalId(myInterval)
    }

    const btnResetClick = () => {
        setControl(false)
        clearInterval(intervalId)
        dispatch(startCounter())
        let myInterval = setInterval(()=> {
            dispatch(changeCounter({plus: false, value: 1}))
        }, 1000)
        setIntervalId(myInterval)
        return () => {
            clearInterval(myInterval)
        }
    }

    return(
        <>
            <Grid item xs={2}>
                <Item >{counter.hour%60}</Item>
                <IconButton aria-label="add" color="primary" onClick={btnPlusClick}>
                    <AddIcon/>
                </IconButton>
                <IconButton disabled={control} aria-label="remove" color="primary" onClick={btnRemoveClick}>
                    <RemoveIcon/>
                </IconButton>
            </Grid>
            <Grid item xs={1}>
                <Button variant="outlined" onClick={btnResetClick}>Reset</Button>
            </Grid>
        </>
        
        
    )
}

export default Second;