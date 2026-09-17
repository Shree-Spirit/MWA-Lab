async function abc() {

    document.getElementById("result").innerHTML = "I am in process";

    let op = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("I am done");
        }, 3000);

    });

    let result = await op.then(function (result) {

        document.getElementById("result").innerHTML =
            result;

        return result;


    });

    document.getElementById("result").innerHTML +=
        "<br>I am out of process";
}