import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Second from './secondComponent';
import Minute from './minuteComponent';
import Hour from './hourComponent';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#BDBFBE',
}));


const BoxComponent = () => {
    return (
        <Box  sx={{ flexGrow: 1, pt: 5}}>
            <Grid container justifyContent="center" spacing={2}>
                <Hour/>
                <Minute/>
                <Second/>
            </Grid>
        </Box>
    )
}
export default BoxComponent;