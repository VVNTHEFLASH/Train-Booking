function bookTickets() {
  // Get values first
  //from des
  let from = document.getElementById('from');
  let selectFrom = from.options[from.selectedIndex].value;
  //to des
  let to = document.getElementById('to');
  let selectTo = to.options[to.selectedIndex].value;

  // Adult and child value
  // Remember about parseInt to Math
  let adult = document.getElementById("adult").value;
  let child = document.getElementById("child").value;

  // Class selection radio button
  let Class = document.getElementsByName("class");
  var select;
  for(let i = 0;i < Class.length; i++){
      if(Class[i].checked) {
        select = parseInt(Class[i].value);
      }
  }
      if(select === 1){
        localStorage.setItem("class",select);
        localStorage.setItem("$class","FC");
      }
      else if(select === 2) {
        localStorage.setItem("class",select);  
        localStorage.setItem("$class","SC");
      }
  //Return Select
  let Return = document.getElementsByName('ret');
  let selectReturn;
  for(let i = 0;i < Return.length;i++) {
    if(Return[i].checked) {
      selectReturn = parseInt(Return[i].value);
    }
  }
      if(selectReturn === 1) {
        localStorage.setItem("return",selectReturn);
        localStorage.setItem("valid","2 day");
        localStorage.setItem("$return","JOURNEY RETURN");
      }
      else if(selectReturn === 0) {
        localStorage.setItem("return", selectReturn);
        localStorage.setItem("valid","1 day");
        localStorage.setItem("$return","NA");
      }


      // local storage set items
  localStorage.setItem("from",selectFrom);
  localStorage.setItem("to",selectTo);
  localStorage.setItem("adult",adult);
  localStorage.setItem("child",child);

  generateTID();
  TodayDate();
}
function generateTID(){
  let numbers = "1234567890";
  let brand = "BTT";
  let Side = "ST";
  let Tid = "";
  for(let i=0;i<8;i++){
      Tid += numbers[Math.round(Math.random()*(numbers.length-1))];
  }
  let IdTicket = Tid.innerHTML = brand+Tid+Side;
  
  localStorage.setItem('ticketid',IdTicket);
}
function storedData() {
  // let $from = localStorage.getItem("from");
  // let $to = localStorage.getItem("to");
  let $A = parseInt(localStorage.getItem("adult"));
  let $B = parseInt(localStorage.getItem("child"));
  let $C = parseInt(localStorage.getItem("class"));
  let $R = localStorage.getItem("return");

  // console.log($from,$to,$A,$B,$C,$R);
  var total = 0;
  // price
  let A = 10 //If A = 1 then price = 10
  let C = 5 //If C = 2 then price = 5
  // class price
  //add 10 extra for firstclass
  // for second class add 0 or nothing
  let FC = 10 //remember to FC to all adults and childs if selected
  let SC = 0

  // Return price
  let JR = total * 2;
  let NR = total;


  // cprice is Class price
  var cPrice = 0;
  if($C == 1) {
    cPrice = FC;
  }
  else if($C == 2){
    cPrice = SC;
  }
  // console.log(cPrice);
  var travelers = (($A * A)+($A * cPrice)) + (($B * C) + ($B * cPrice));
  // console.log(travelers);
  if($R == 1) {
    total = travelers * 2;
  }
  else if($R == 0) {
    total = travelers;

  }
  localStorage.setItem("total",total)
}
//back page
const backBtn = document.getElementById("backbtn");
backBtn.onclick = backPage;

function backPage() {
  window.location.href = ".././menu/menu.html";
}

// const submitBtn = document.getElementById("BookNow");
// submitBtn.onclick = function() { submitPage() };

function submitPage() {
  bookTickets();
  storedData();
  window.location.href = "./ticket.html";
}

//get the date:
function TodayDate() {
  let date = document.getElementById('date').value;

  localStorage.setItem("date",date);
}

function formValidate() {
  //Destination validation
  let from = document.forms['TicketForm']['from'];
  let to = document.forms['TicketForm']['to'];

  let errFrom = document.getElementById('errFrom');
  let errTo = document.getElementById('errTo');
  
  if(from.value == to.value) {
    errFrom.innerHTML = "Please Select Correct Destination";
    errTo.innerHTML = "Please Select Correct Destination";
    from.focus();
    to.focus();
    return false;
  }
  else{
    errFrom.innerHTML = "";
    errTo.innerHTML = "";
  }

  if(from.value == ""){
    errFrom.innerHTML = "Please Select From Destination";
    from.focus();
    return false;
  }
  else{
    errFrom.innerHTML = "";
  }
  if(to.value == ""){
    errTo.innerHTML = "Please Select To Destination";
    to.focus();
    return false;
  }
  else{
    errTo.innerHTML = "";
  }

  //adults and child validation
  let adult = document.forms['TicketForm']['adult'];
  let child = document.forms['TicketForm']['child'];

  let errAdult = document.getElementById('errAdult');
  let errChild = document.getElementById('errChild');

  if(adult.value <= 0){
    errAdult.innerHTML = "Minimum One Adult Required";
    adult.focus();
    return false;
  }
  else if(adult.value >= 7 ){
    errAdult.innerHTML = "Maximum 6 adults only allowed per ticket";
    adult.focus();
    return false;
  }
  else{
    errAdult.innerHTML = ""
  }

  if(child.value < 0){
    errChild.innerHTML = "Set Zero if No Child Required";
    child.focus();
    return false;
  }
  else if(child.value >= 7){
    errChild.innerHTML = "Maximum 6 childs only allowed per ticket";
    child.focus();
    return false;
  }
  else{
    errChild.innerHTML = ""
  }

  //Class and Return Validation - Radio button validation
  let Class = document.forms['TicketForm']['class'];

  let errClass = document.getElementById("errClass");

  if(Class[0].checked == false && Class[1].checked == false){
    errClass.innerHTML = "Select Any Class Option";
    Class.focus();
    return false;
  }
  else{
    errClass.innerHTML = ""
  }


  let Return = document.forms['TicketForm']['return'];

  let errReturn = document.getElementById("errReturn");

  if(Return[0].checked == false && Return[1].checked == false){
    errReturn.innerHTML = "Select Any Return Option";
    Return.focus();
    return false;
  }
  else{
    errReturn.innerHTML = ""
  }
  submitPage();
}