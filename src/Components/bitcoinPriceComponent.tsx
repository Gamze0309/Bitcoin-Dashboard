import  {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,  AppDispatch } from '../Redux/store';
import { getBitcoinPrice } from '../Requests/getBitcoinPrice';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

const BitcoinPriceComponent = () => {
    const dispatch: AppDispatch = useDispatch()
    const prices = useSelector((state: RootState)=> state.bitcoinPrice)

    useEffect(()=>{
        let myInterval = setInterval(()=>{
            dispatch(getBitcoinPrice())
        }, 3000)
        return () => {
            clearInterval(myInterval)
        }
    }, [])

    return(
        <>
            <h1>{prices.chartName + ' Prices'}</h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={prices.price} >
                    <CartesianGrid />
                    <XAxis dataKey="time" 
                        interval={'preserveStartEnd'}/>
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="usd"
                        stroke={prices.price.length < 2 ? "blue" : (prices.price.at(-2).usd > prices.price.at(-1).usd ? "red" : "green")} activeDot={{ r: 8 }} />
                    <Line dataKey="gbp"
                        stroke={prices.price.length < 2 ? "blue" : (prices.price.at(-2).gbp > prices.price.at(-1).gbp ? "red" : "green")} activeDot={{ r: 8 }} />
                    <Line dataKey="eur"
                        stroke={prices.price.length < 2 ? "blue" : (prices.price.at(-2).eur > prices.price.at(-1).eur ? "red" : "green")} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default BitcoinPriceComponent