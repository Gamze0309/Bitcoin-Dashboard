import {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,  AppDispatch } from '../Redux/store';
import {changeCounter} from '../Redux/Slice/changeCounter';
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
    const [control, setControl] = useState(false)

    useEffect(()=>{
        if(counter.hour<3600){
            setControl(true)
        }
    },[counter.hour<3600])

    const btnPlusClick = () => {
        dispatch(changeCounter({plus:true, value: 3600}))
    }

    const btnRemoveClick = () => {
        dispatch(changeCounter({plus:false, value: 3600}))
    }

    return(
        <Grid item xs={2}>
            <Item>{Math.floor(counter.hour/3600)}</Item>
            <IconButton aria-label="add" color="primary" onClick={btnPlusClick}>
                <AddIcon/>
            </IconButton>
            <IconButton disabled={control} aria-label="remove" color="primary" onClick={btnRemoveClick}>
                <RemoveIcon/>
            </IconButton>
        </Grid>
    )
}

export default Hour;