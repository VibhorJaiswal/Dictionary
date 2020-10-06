var text = "";
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

function search() {
    xhr.addEventListener("readystatechange", function () {

        document.getElementById("loader").style.visibility = "visible";


        if (this.readyState == 4) {

            var res = JSON.parse(this.responseText);

            var obj = [];

            for (var i in res)
                obj.push(res[i]);

            obj.forEach(myFunction);



            function myFunction(item) {
                document.getElementById("loader").style.visibility = "hidden";
                document.getElementById("hide").style.visibility = "block";
                text = document.getElementById("ans");
                text.innerText = "";
                text.innerText = `${item[0].definition}`;
            }

        }
    });

    let word = document.getElementById("word").value;

    xhr.open("GET", `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`);
    xhr.setRequestHeader("x-rapidapi-host", "mashape-community-urban-dictionary.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "12de581810msh5acb50acb1a78abp139e15jsn6654d0556193");

    xhr.send(data);



}
