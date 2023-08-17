// console.log('hi')

function displayTime(){
    // console.log('welcome')
    var currentDate = new Date()
    var currentdayname = currentDate.getDay()
    var currentmonth = currentDate.getMonth()
    var currentday = currentDate.getDate()
    var currentyear = currentDate.getFullYear()

    var currenthour = currentDate.getHours()
    var currentmin = currentDate.getMinutes()
    var currentsec = currentDate.getSeconds()

    var period = "AM"
    // console.log(currenthour)

    if(currenthour == 0){
        currenthour = 12
    }
    if(currenthour > 12){
        currenthour = currenthour - 12
        period = "PM"
    }

    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0+n);
        return n
    }
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]


    var ids = ["dayname","month","daynum","year","hour","minutes","seconds","period"]
    var values = [week[currentdayname],months[currentmonth],currentday.pad(2),currentyear,currenthour.pad(2),currentmin.pad(2),currentsec.pad(2),period]

    for (let i=0; i<ids.length; i++){
    document.getElementById(ids[i]).firstChild.nodeValue = values[i]
    }

}
function initTime(){
    // console.log('hi')
    displayTime()
    window.setInterval("displayTime()", 1)
}