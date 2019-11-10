
document.getElementById('btn').addEventListener('click',gitjson)

function gitjson() {
    idnum = document.getElementById("search").value;
  
    fetch('http://localhost:4000/students/' + idnum, {

        method: 'GET',
    })

        .then(req => req.json())
        .then(data => {

           

                if(idnum==""){
                    document.getElementById('maram').style.display='none'
                }else{
                    document.getElementById("maram").innerHTML += '<br><input type="text" value="'+data.first_name+'" ><br><input id="lastname" type="text" value="'+data.last_name+'"><br><input type="text" value="'+data.grade+'">';
                }
        });
}