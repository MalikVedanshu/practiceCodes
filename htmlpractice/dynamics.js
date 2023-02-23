let startbtnn = document.getElementById("startbtnn");
startbtnn.addEventListener("click", startStop)

function startStop() {
    if(startbtnn.value === "Start") {
        startbtnn.value = "Stop";
    } else {
        startbtnn.value = "Start";
    }
}



let tbody = document.getElementById("dynamicData");
let arr = [];

for(let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");
    for(let j = 0; j < 10; j++) {
        let td = document.createElement("td");
        let num = `${Math.round(9 * Math.random())}${Math.round(9 * Math.random())}` 
        arr.push(num);
        td.setAttribute("id", num)
        td.setAttribute("class", "tablecell")
        td.innerText = num;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

console.log(arr);