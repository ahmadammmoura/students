
 document.getElementById('btn').addEventListener('click' , postjson );
 

 function postjson(){
    idnum = document.getElementById('idnum').value;
    firstname = document.getElementById('firstname').value;
    lastname = document.getElementById('lastname').value;
    grade = document.getElementById('grade').value;
    data = { id : idnum  , first_name : firstname , last_name : lastname , grade : grade };
    console.log(data)
     const Option = {
         method : 'post',
         headers : {
             "content-type" : "application/json",
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
         },
         
         body : JSON.stringify(data),
     }
     fetch('http://localhost:4000/students',Option)

 }
 
 
 