function writeValues(form: any){
    var fname:string = form.fname.value;
    var lname:string = form.lname.value;
  
    document.getElementById('fullname').innerHTML = fname + ' ' + lname;
  }