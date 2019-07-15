document.querySelector("button[type='submit']").addEventListener('click', (e) => checkForm(e) );

function checkForm(e){

    e.preventDefault();

let error_list = "";

let error_div = document.querySelector('[role=alert]');


let cc = document.querySelector('#cc');
alert (cc.value)
if (cc.value == "") {
    error_list +=  "<div>Credic Card field can't be empty.</div>";
}

error_div.innerHTML = error_list;

}