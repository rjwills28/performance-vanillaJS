
// Create the page using a table or divs:
//   = "table" / "div"
var createMethod = "div";
var value = 1;
var rows = 100;
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
          //td.setAttribute("id", "i"+i+"_j"+j)
          td.innerHTML = getValue();
          savedElems.push(td);
          tr.appendChild(td)
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}

function divCreate() {
    var body = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.style.width = '70%';
    div.style.display = "flex";
    div.style.flexWrap = "wrap";
    for (var i = 0; i < rows; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < cols; j++) {
          var elem = document.createElement('div');
          //elem.setAttribute("id", "i"+i+"_j"+j)
          elem.innerHTML = getValue();
          elem.style.width = "10%";
          savedElems.push(elem);
          div.appendChild(elem);
      }
    }   
    body.appendChild(div);
}

function getValue() {
    return value;
}

if (createMethod == "table"){
    tableCreate();
} else {
    divCreate();
}

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
}, 1000);

