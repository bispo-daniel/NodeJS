let getHours = () => {
    let myDateOBJ = new Date();
    let hourNow = myDateOBJ.getHours();
    let minutesNow = myDateOBJ.getMinutes();
    return `${hourNow}:${minutesNow}`;
}

module.exports = { getHours }