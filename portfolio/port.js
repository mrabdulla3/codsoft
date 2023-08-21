console.log("script running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo');
if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.cross').style.display='none';
    document.querySelector('.ham').style.display='inline';
}
else{
    document.querySelector('.ham').style.display='none';
    document.querySelector('.cross').style.display='inline';
}
});
function sendEmail(){
    Email.send({
        SecureToken:" fb2bfc0b-8441-47b6-89cd-376f81e306c0 ",
        Host : "smtp.gmail.com",
        To : "abdullagaur6559@gmail.com",
        From :document.getElementsById("email").value,
        Subject : "New contact form Enquery",
        Body : "Name: "+ document.getElementsById("name").value
        + "<br> Email: "+ document.getElementsById("email").value
        + "<br> Subject: "+ document.getElementsById("subject").value
        + "<br> Message: "+ document.getElementsById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
}