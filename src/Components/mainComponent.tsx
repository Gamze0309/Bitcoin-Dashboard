import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Second from './secondComponent';
import Minute from './minuteComponent';
import Hour from './hourComponent';
import BitcoinPriceComponent from './bitcoinPriceComponent';
import Divider from '@mui/material/Divider';

const MainComponent = () => {

    return (
        <>
            <Box  sx={{ flexGrow: 1, pt: 5}}>
                <Grid container justifyContent="center" spacing={2}>
                    <Hour/>
                    <Minute/>
                    <Second/>
                </Grid>
                <Divider variant="middle" />
                <BitcoinPriceComponent/>
            </Box>
        </>
        
    )
}
export default MainComponent;