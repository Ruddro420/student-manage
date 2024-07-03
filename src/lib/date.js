const dateFormat = (date) => {
    date = new Date(date);
    date = date.toString().split(' ')
    date = date[1] + ' ' + date[2] + ', ' + date[3]
    return date;
}

export {dateFormat}