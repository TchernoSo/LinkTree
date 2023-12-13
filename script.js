// Sent button 

function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
  
    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);
  
        success.style.display = 'block';
    }
  
  
    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
  
  }
  


//   Main message 
  
  const text = "Welcome to MySpace";
  const speed = 150;
  
  var i = 0;
  
  function typeEffect(){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
  
      setTimeout(typeEffect, speed);
  }
  
  typeEffect();



  
  
//  submit handle

const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Your form submission logic here

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Send form data to server using AJAX
  // Replace with your server-side endpoint URL
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/submit-form');
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log('Form submitted successfully');
    } else {
      console.error('Error submitting form');
    }
  };

  const formData = new FormData(form);
  xhr.send(formData);
});



// about me 

