function validate_form()
{
    var error_msg = "";
    var first_name = document.getElementById('fs');
    var last_name = document.getElementById('ls');
    var age = document.getElementById('age');
    var dob = document.getElementById('dob');
    var gender_m = document.getElementById('male')
    var gender_fm = document.getElementById('female')
    var gender_oth = document.getElementById('other')
    if(first_name.value==""){
        error_msg+="First name should not be empty!.\n"
        first_name.value="";
        first_name.style.border = "3px solid red"
    }
    if(last_name.value==""){
        error_msg+="Last name should not be empty!.\n"
        last_name.value="";
        last_name.style.border = "3px solid red"
    }
    if(age.value=="")
    {
        error_msg+="Please enter your age!.\n"
        age.style.border = "3px solid red"
    }
    else if(age.value<0 || age.value>160)
    {
        error_msg+="Please enter the correct age!.\n"
        age.style.border = "3px solid red"
    }
    var today = new Date();
    if(dob.value=="")
    {
        error_msg+="Please enter the Date of birth!.\n"
        dob.style.border = "3px solid red"
    }
    else if((age.value="")&&Math.abs(Math.floor(Math.abs(today-date)/(1000*60*60*24*365))-age.value)>2)
    {
        var date =new Date(dob.value);
        error_msg+="Your age does not match your Date of birth.\n"
        dob.style.border = "3px solid red"
    }
    if(!(gender_fm.checked | gender_m.checked | gender_oth))
    {
        error_msg+="Please select gender\n"
    }
    if(error_msg!=""){alert(error_msg)}
}
function back(id)
{
    document.getElementById(id).style.border = "1px solid black"
}