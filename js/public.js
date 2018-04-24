$(document).ready(function(){
    $('.modal').modal();
    $('#modallog').modal();
    $('.sidenav').sidenav();
    $('input#input_text, textarea#textarea2').characterCounter();
    $('#textarea1').val('New Text');
    $('select').formSelect();
    M.updateTextFields();
       $('#levels').on('click', 'a', function () {
       $('#modal-levels').slideToggle();
});
  });



$("form").submit(function(e){
  e.preventDefault();
  const uEmail = $('#email').val();
  const uPassword = $('#password').val();
  console.log(uEmail);
  console.log(uPassword);
  toObject(uEmail,uPassword);
});


const toObject = (email,password)=>{
  console.log(email);
  console.log(password);
let object = [{
  emailUser:email,
  passwordUser:password
}]
console.log(object);
objectToLocalStorage(object);
}



const objectToLocalStorage= json =>{

  let jsonEmails = json;

 let jsonToString = JSON.stringify(jsonEmails);
 console.log(jsonToString);
 const toLocalStorage = localStorage.setItem('emailStorage',jsonToString);
 gettingData(toLocalStorage);
}

const gettingData = storage => {
  let storedData = localStorage.getItem('emailStorage');
  console.log(storedData);
  let stringToJson = (JSON.parse(storedData));
  window.location.href = "views/logUser.html"
  console.log(stringToJson);
}

