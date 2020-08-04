const fdate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours(),
        minute = d.getMinutes(),
        ampm = hours >= 12 ? 'pm' : 'am',
        hours = hours % 12,
        hours = hours ? hours : 12,
        minute = minute < 10 ? '0'+minute : minute

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    console.log(`${[year, month, day].join('-')} ${hour}:${minute} ${ampm}`)
    return `${[year, month, day].join('-')} ${hour}:${minute} ${ampm}`;
}

export { fdate }