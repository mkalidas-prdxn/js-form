let flag = 0
var m = 2;
var n = 2;
// button onclick function to add row
function jsform() {
  if (flag == 0) {
    // taking inputs from form
    var fname = document.forms["RegForm"]["firstname"].value;
    var lname = document.forms["RegForm"]["lastname"].value;
    var gender = document.getElementById("male").checked;
    var address = document.forms["RegForm"]["address"].value;
    if (gender) {
      gender = "male";
    } else {
      gender = "female";
    }
    var u = "";
    var k = "table";
    var b = "btn"
    n++;
    b = b + n;
    k = k + m;
    m++;
    //creating row in table
    var ul = document.getElementById("table1");
    var li = document.createElement("li");
    li.setAttribute("id", k);
    ul.appendChild(li);
    u += '<ul>';
    u += '<li class="fname">' + fname + '</li>';
    u += '<li class="lname">' + lname + '</li>';
    u += '<li class="gender">' + gender + '</li>';
    u += '<li class="address">' + address + '</li>';
    u += '<li class="edit">' + '<button onclick="x(this);">Edit</button>' + '</li>';
    u += '<li class="delete">' + '<button onclick="z(this);">Delete</button>' + '</li>';
    u += '</ul>';
    document.getElementById(k).innerHTML = u;
    //reseting the form 
    document.getElementById('first_name').value = null;
    document.getElementById('last_name').value = null;
    document.getElementById('male').value = null;
    document.getElementById('female').value = null;
    document.getElementById('address').value = null;
    document.getElementById('terms_conditions').value = null;
    alert('Thank You');
    return false;
  } else {
    //saving the edited row
    var fname = document.forms["RegForm"]["firstname"].value;
    var lname = document.forms["RegForm"]["lastname"].value;
    var gender = document.getElementById("male").checked;
    var address = document.forms["RegForm"]["address"].value;
    if (gender) {
      gender = "male";
    } else {
      gender = "female";
    }
    var g;
    var u = "";
    var b = "btn"
    var btn;
    n++;
    b = b + n;
    m++;
    //adding edited data
    u += '<ul>';
    u += '<li class="fname">' + fname + '</li>';
    u += '<li class="lname">' + lname + '</li>';
    u += '<li class="gender">' + gender + '</li>';
    u += '<li class="address">' + address + '</li>';
    u += '<li class="edit">' + '<button onclick="x(this);">Edit</button>' + '</li>';
    u += '<li class="delete">' + '<button onclick="z(this);">Delete</button>' + '</li>';
    u += '</ul>';
    document.getElementById(flag).innerHTML = u;
    flag = 0;
  }
}

function x(elem) {
  //editing the selected row
  var y = ((elem.parentNode).parentNode).parentNode.getAttribute('id');
  flag = y;
  console.log('y' + y);
  var fname1 = document.querySelector("li#" + y + " li.fname ").innerHTML;
  var lname1 = document.querySelector("li#" + y + " li.lname ").innerHTML;
  var address1 = document.querySelector("li#" + y + " li.address ").innerHTML;
  var gender1 = document.querySelector("li#" + y + " li.gender ").innerHTML;

  document.forms["RegForm"]["firstname"].value = fname1;
  document.forms["RegForm"]["lastname"].value = lname1;
  if (gender1 == "male") {
    var checkm = document.getElementById('male');
    checkm.checked = true;
    var checkf = document.getElementById("female");
    checkf.checked = false;
  } else {
    var checkm = document.getElementById("male");
    checkm.checked = false;
    var checkf = document.getElementById("female");
    checkf.checked = true;
  }
  document.forms["RegForm"]["address"].value = address1;
}
//deleting the selected row
function z(elem) {
  var q = ((elem.parentNode).parentNode).parentNode.id;
  var myobj = document.getElementById(q);
  myobj.remove();
}





