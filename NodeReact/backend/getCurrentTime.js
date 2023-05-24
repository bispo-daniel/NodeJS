let getTime = () => {
    let dateOBJ = new Date();
    let hours = dateOBJ.getHours();
    let minutes = dateOBJ.getMinutes();
    let seconds = dateOBJ.getSeconds();

    let myOBJ = {
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    }

    return myOBJ;
}

module.exports = { getTime }