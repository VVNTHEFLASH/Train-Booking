var numbers = '0123456789';


//Generate Ticket
function generateTicket() {
    var selectType = document.getElementsByName('train');
    var select;
    var ticket = "";
//Using for loop to select the radio button
    for(let i=0;i<selectType.length;i++) {
        if(selectType[i].checked) {
            select = parseInt(selectType[i].value);
        }
    }
    if(select === 1) {
        NormalTicket();
    }
    else if(select === 2) {
        SuperfastTicket();
    }
    else if(select === 3) {
        ExpressTicket();
    }
}

//Create Ticket 
function allTickets() {
    NormalTicket();
    SuperfastTicket();
    ExpressTicket();
}

//Normal Ticket Construct

function NormalTicket() {

//Random Ticket Id
var transactionId = '';
for(let i=0;i<12;i++) {
    transactionId += numbers[Math.round(Math.random()* (numbers.length-1))];
}
    //Create element for ticket id
    var TicketID = document.createElement('p');
    TicketID.textContent = "Ticket No: BTT"+transactionId;

    //-----------------------//
    //Get the Type of the Ticket
    var normal = document.getElementById('nor-train').textContent;
    //Create Ticket
    //from des
    var from = document.getElementById('from');
    var selectFrom = from.options[from.selectedIndex].value;
    //to des
    var to = document.getElementById('to');
    var selectTo = to.options[to.selectedIndex].value;
    //select the div
    var ticket = document.getElementById('Generate-Ticket');
    ticket.style.visibility = 'visible';
    //create type for normal
    var TrainType = document.createElement('p');
    TrainType.textContent = 'Train Type:- ' +normal;
    TrainType.classList.add('traintype');
    //create select destionation
    var destination = document.createElement('p').textContent = 'Destination';
    var des = document.createElement('p');
    des.textContent = 'From: ' + selectFrom + ' To: ' + selectTo;
    //date and time print
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    //Create date and time in para
    var $date$time = document.createElement('p');
    $date$time.textContent = 'Date: '+date+ ' Time: '+time;
    //append the items created
    // ticket.append(TrainType,destination,des,$date$time);
    ticket.appendChild(TicketID);
    ticket.appendChild(TrainType);
    ticket.append(destination);
    ticket.appendChild(des);
    ticket.appendChild($date$time);
}


//Get Destination Using For Loop
