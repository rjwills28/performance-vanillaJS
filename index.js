var value = 1;
var rows = 300;
var cols = 10;
var savedElems = [];

function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '70%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < rows; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < cols; j++) {
          var td = document.createElement('td');
          td.setAttribute("id", "i"+i+"_j"+j)
          td.innerHTML = getValue();
          savedElems.push(td);
          tr.appendChild(td)
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}

function getValue() {
    return value;
}

tableCreate();

setInterval(function(){
    value = (value + 1) % 100;

    // Using getElementById() to update elements
    //for (var i = 0; i < rows; i++) {
    //    for (var j = 0; j < cols; j++) {
    //        document.getElementById("i"+i+"_j"+j).innerHTML = getValue();
    //    }
    //}
    
    // Use locally stored reference to DOM elements 
    for (var i = 0; i < savedElems.length; i++) {
        savedElems[i].innerHTML = getValue();
    } 
}, 100);

