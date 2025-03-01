let date = document.getElementById('date')

let dateStr = "sat, Mar 1 2025";
let courentDate = new Date(dateStr);

let formatDate = courentDate.toDateString()
date.innerHTML = formatDate