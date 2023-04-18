function sendEmail() {
  var emailBody = document.getElementById("email-body").value;
  var emailLink = "mailto:  elcommercee@gmail.com?subject=duvidas&body=" + encodeURIComponent(emailBody);
  window.location.href = emailLink;
}