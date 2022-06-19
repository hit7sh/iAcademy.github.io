function validation() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var branch = document.getElementById('Branch').value;
    var year = document.getElementById('Year').value;
    var usercheck = /^[A-Z a-z]{3,30}$/;
    var emailcheck = /^[A-Za-z0-9.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;

    if (usercheck.test(username)) {
        document.getElementById('errorname').innerHTML = "";
    } else {
        window.alert("INVALID NAME");
        document.getElementById('errorname').innerHTML = "*INVALID NAME";
        return false;
    }

    if (emailcheck.test(email)) {
        document.getElementById('email').innerHTML = "";
    } else {
        window.alert("INVALID EMAIL");
        document.getElementById('email').innerHTML = "*INVALID EMAIL";
        return false;
    }

    if (numbercheck.test(number)) {
        document.getElementById('errornumber').innerHTML = "";
    } else {
        window.alert("INVALID NUMBER");
        document.getElementById('errornumber').innerHTML = "*INVALID NUMBER";
        return false;
    }

    if (branch != 'CSE' && branch != 'ECE' && branch != 'MECH') {
        window.alert('Please Select a Branch!');
        return false;
    }
    if (year != '1st' && year != '2nd' && year != '3rd' && year != '4th') {
        window.alert('Please select a year!');
        return false;
    }
    window.alert("success!");
    return true;
}