function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (document.getElementById("principal").value == 0) {
        alert("enter a positive number to combute");
    } else {

        var interest = principal * rate * years / 100;

        var year = new Date().getFullYear() + parseInt(years);

        document.getElementById("result").innerHTML = `
    If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of <mark>${rate}</mark> ,<br>
    You will receive an amount of <mark>${years}</mark>,<br>
    in the year <mark>${year}</mark><br>
    ---------------------------------<br>
    Result is <mark>${interest}</mark><br>
    `;
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}
