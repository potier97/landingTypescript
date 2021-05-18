function writeValues(form) {
    var fname = form.fname.value;
    var lname = form.lname.value;
    document.getElementById('fullname').innerHTML = fname + ' ' + lname;
}
