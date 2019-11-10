pageNum = document.getElementById('num').value;
document.getElementById('btn').addEventListener('click', gitjson)
dataArray = []
function gitjson() {
    pageNum = document.getElementById('num').value;

    fetch('http://localhost:4000/students?page=' + pageNum, {

        method: 'GET',
    })

        .then(req => req.json())
        .then(data => {

            for (var i = 0; i < data.length; i++) {
                document.getElementById("mytable").innerHTML += '<tr><th>id</th><th>firsname</th><th>lastname</th><th>grade</th></tr><tr><td>' + data[i].id + '</td><td>' + data[i].first_name + '</td><td>' + data[i].last_name + '</td><td>' + data[i].grade + '</td></tr>'

            }
        });
}
