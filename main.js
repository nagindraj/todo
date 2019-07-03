
document.querySelector('#addBtn').addEventListener('click', (event) => {
let item = document.querySelector('#item').value;
let closeIcon = '<i class=" close fas fa-times-circle"></i>'
let itemLiElem = '<tr><td class="item-width checked">' + item + '</td><td>'+ closeIcon +'</td></tr>';
 let result = document.querySelector('#listElem').innerHTML
result = result+ itemLiElem;
document.querySelector('#listElem').innerHTML = result;

})
document.querySelector('#listElem').addEventListener('click' ,(e) =>{
    if(e.target.className.indexOf('close') > -1){
        e.target.closest('tr').remove();
    }

    if(e.target.className.indexOf('checked')> -1){
        e.target.className = 'strikethrough';
        e.target.closest('tr').className = 'strikeRow';
    }
});

