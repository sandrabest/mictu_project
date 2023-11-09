alert('chioma');

function sendemail(){
    var userFirstname = document.getElementById("fname").value;
    var useremail=document.getElementById("eaddress").value;
    var userphoneNumber=document.getElementById("phonenumber").value;

    if (userFirstname == ""){
        alert("Name is compusolry");
    }
    else if(useremail == ""){
        alert('Email is compuslory');
    }
    else {
        alert("Hello   "+ userFirstname + " ,   an email has been sent to   " + useremail + "   with phonenumber   " + userphoneNumber ); 
    }
}