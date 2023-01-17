const Booking = document.getElementById('.book');
const Form = document.querySelector('.form__container');
const Close = document.querySelector('.close-btn');



// Booking.addEventListener('click', function(){
//     Form.classList.add('form__container__active');
// });

// function sendMail() {
//   var params = {
//       Form: document.getElementById('form_code').value,
//       Firstname: document.getElementById('firstName').value,
//       lastName: document.getElementById('lastName').value,
//       Email: document.getElementById('email').value,
//       Mobile: document.getElementById('mobile').value,
//       Msg: document.getElementById('msg').value,
//       Submit: document.getElementById('submit').value,
//   };

//   const serviceId = 'sservice_h34m5gj';
// const templateId = 'template_sunhsg8';

// email
// .send(serviceId,templateId,params)
// .then((res)=> {
//     document.getElementById('firstName').value = '';
//     document.getElementById('lastName').value = '';
//     document.getElementById('mobile').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('msg').value = '';
//     console.log(res);
//     alert('your message sent successfully');
// })
// .catch((err)=> console.log(err));

// }

     const  FormCode= document.getElementById('form_code');
    //  const  Firstname= document.getElementById('firstName');
    //  const lastName = document.getElementById('lastName');
    //  const ElectMail = document.getElementById('email');
    //  const Mobile = document.getElementById('mobile');
    //  const Msg = document.getElementById('msg');

    function sendMsg(e) {
        e.prevetDefault();

         document.getElementById('firstName').value;
        cdocument.getElementById('lastName').value;
        document.getElementById('email').value;
         document.getElementById('mobile').value;
          document.getElementById('msg').value;

        Email.send({
            SecureToken : "a3dd6bf0-360e-4727-971d-31af3b6dec6d",
            To : 'ndayishabaivanbreezy@gmail.com',
            From : "email.value",
            Subject : "contact form",
            Body : "msg.value"
        }).then(
          message => alert(message)
        );
    }

    FormCode.addEventListener('submit', sendMsg);
     







