import {useEffect, useRef, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,  AppDispatch } from '../Redux/store';
import {changeCounter} from '../Redux/Slice/changeCounter';
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
    const [control, setControl] = useState(false)

    useEffect(()=>{
        if(counter.hour<3600 && (counter.hour/60)%60< 1){
            setControl(true)
        }
    },[counter.hour<3600 && (counter.hour/60)%60<1])

    useEffect(()=>{
        if(counter.hour>3600 || (counter.hour/60)%60>1){
            setControl(false)
        }
        
        return;
    },[counter.hour>3600 || (counter.hour/60)%60>1])

    const btnPlusClick = () => {
        dispatch(changeCounter({plus:true, value: 60}))
    }

    const btnRemoveClick = () => {
        dispatch(changeCounter({plus:false, value: 60}))
    }

    return(
        <Grid item xs={2}>
            <Item>{Math.floor((counter.hour/60)%60)}</Item>
            <IconButton aria-label="add" color="primary" onClick={btnPlusClick}>
                <AddIcon/>
            </IconButton>
            <IconButton disabled={control} aria-label="remove" color="primary" onClick={btnRemoveClick}>
                <RemoveIcon/>
            </IconButton>
        </Grid>
    )
}

export default Minute;