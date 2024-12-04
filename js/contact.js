function validateForm(){
    let First_Name = document.forms["problemform"]["First_Name"].value;
    if(First_Name == ""){
        alert("Missing first name");
        return false;
    }//End of If
    
    let Last_Name = document.forms["problemform"]["Last_Name"].value;
    if(Last_Name == ""){
        alert("Missing last name");
        return false;
    }//End of If

    let email = document.forms["problemform"]["email"].value;
    if(email == ""){
        alert("Missing E-mail");
        return false;
    }//End of If

    let problemMessage = document.forms["problemform"]["problemMessage"].value;
    if(problemMessage == ""){
        alert("Message can't be left blank");
        return false;
    }//End of If
    return true;
}//End Function