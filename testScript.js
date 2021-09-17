var full_name_obj = document.getElementsByTagName("h1")
var full_name = full_name_obj[0].innerText.split()
var cname = document.getElementsByClassName("pv-entity__secondary-title t-14 t-black t-normal")[0].innerText.split(" ")[0]
var data= {
    "fname":full_name[0],
    "lname":full_name[1],
    "cname":cname
}
// console.log(data)
var xhr = new XMLHttpRequest();
var url='http://127.0.0.1:3000/details';
xhr.open("POST", url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = () => {
    console.log(xhr.responseText)
}
xhr.send(JSON.stringify(data));


