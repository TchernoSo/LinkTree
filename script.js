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
  
  
  const text = "Welcome to MySpace";
  const speed = 150;
  
  var i = 0;
  
  function typeEffect(){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
  
      setTimeout(typeEffect, speed);
  }
  
  typeEffect();
  
  