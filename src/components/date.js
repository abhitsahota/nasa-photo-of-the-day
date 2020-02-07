import React from 'react';

let dateRandomizer = (start, end) => {
    initialDate = ''
    const [date, setDate] = useState(initialDate);


    let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return (
        // [year, month, day].join('-');
    )
}

export default Date;