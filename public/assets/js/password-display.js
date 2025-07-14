
el=true;
function displayPassword() {
  if(el) {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById('eye').src="/assets/img/icones/eye.png";
    el=false;
  }
  else{
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("eye").src="/assets/img/icones/eye2.png";
    el=true;
  }
}


el2=true;
function displayConfirmPassword() {
  if(el2) {
    document.getElementById("confirm-password").setAttribute("type", "text");
    document.getElementById('eye2').src="assets/img/icones/eye.png";
    el2=false;
  }
  else{
    document.getElementById("confirm-password").setAttribute("type", "password");
    document.getElementById("eye2").src="assets/img/icones/eye2.png";
    el2=true;
  }
}

  el3=true;
function displayLoginPassword() {
  if(el3) {
    document.getElementById("loginPassword").setAttribute("type", "text");
    document.getElementById('eye3').src="assets/img/icones/eye.png";
    el3=false;
  }
  else{
    document.getElementById("loginPassword").setAttribute("type", "password");
    document.getElementById("eye3").src="assets/img/icones/eye2.png";
    el3=true;
  }
}