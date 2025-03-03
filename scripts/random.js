document.getElementById("theme-btn").addEventListener('click', function(){

    const randomNumber = Math.floor(Math.random () * 2550);
    const randomColor = "#" + randomNumber;
    document.body.style.backgroundColor = randomColor ;
});

function updateTime (){
    const today = new Date ();
    const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]

    document.getElementById('day').innerText = days[today.getDay()] + ",";

    document.getElementById('date').innerText = months[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear()
}
updateTime();

