import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#BDBFBE',
}));


const BoxComponent = () => {
    return (
        <Box sx={{ flexGrow: 1, pt: 5, pr: 10, float: 'right' }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Item>Hour</Item>
                </Grid>
                <Grid item>
                    <Item>Minute</Item>
                </Grid>
                <Grid item>
                    <Item>Second</Item>
                </Grid>
            </Grid>
        </Box>
    )
}
export default BoxComponent;