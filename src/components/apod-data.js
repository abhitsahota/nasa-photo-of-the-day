import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./imgCard";
import Info from "./info";

function PicData() {

    const initialState = []; 
    const [apodData, setapodData] = useState(initialState);
    const initialDate = '';
    const [date, setDate] = useState(initialDate);

    let dateRandomizer = (start, end) => {

        let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
 
    const picCall = () => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${date}`)
            .then(resp => 
                setapodData(resp.data)) 
            .catch(err => console.log(err));
    }

    useEffect(picCall, []);

    console.log(apodData);
    let data = apodData;

    return (
        <div>
            <button onClick={() =>{
                setDate(dateRandomizer(new Date(2012, 0, 1), new Date()))
            }}>Random</button>
            <button onClick={() =>{
                setDate('asdasd')
                console.log(date)
            }}>Today</button>
            <Info data={data} />
            <Card data={data} />
            
        </div>

    )
};

export default PicData;