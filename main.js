gsap.from('nav', { duration: 1, x: '-100%' })
gsap.from('.menu', { duration: 2, delay: '1', x: '0%', opacity: 0 })
gsap.from('.socialIcons', { duration: 1, y: '100%', delay: '2', opacity: 0 });

const text = document.querySelector(".secondText");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "_ Mathematician";
    }, 0);
    setTimeout(() => {
        text.textContent = "_Coder";
    }, 4000);
    setTimeout(() => {
        text.textContent = "_Wev Developer";
    }, 8000);

}
textLoad();
setInterval(textLoad, 12000)


 // Validate the form before submitting it
 var form = document.querySelector('form');
 form.addEventListener('submit', function(event) {
   event.preventDefault();

   // Check if the name field is empty
   var name = form.querySelector('input[name="name"]');
   if (name.value === '') {
     alert('Please enter your name.');
     return;
   }

   // Check if the email field is empty
   var email = form.querySelector('input[name="email"]');
   if (email.value === '') {
     alert('Please enter your email address.');
     return;
   }

   // Check if the message field is empty
   var message = form.querySelector('textarea[name="message"]');
   if (message.value === '') {
     alert('Please enter your message.');
     return;
   }

   // Submit the form
   form.submit();
 });