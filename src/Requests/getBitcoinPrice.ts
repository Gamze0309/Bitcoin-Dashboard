import axios from "axios";
import { RootState, AppDispatch } from "../Redux/store";
import {bitcoinPrice} from "../Redux/Slice/bitcoinPrice";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

export const getBitcoinPrice = (): ThunkAction<void, RootState, object, AnyAction> =>
    async useAppDispatch => {
        const baseUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        await axios.get(baseUrl).then(response =>{
            const data = {chartName: response.data.chartName,
                usd: response.data.bpi.USD.rate_float,
                gbp: response.data.bpi.GBP.rate_float,
                eur: response.data.bpi.EUR.rate_float, 
                time: response.data.time.updated}
            useAppDispatch(bitcoinPrice(data))
        })
        .catch(error => console.log(error)); 
}