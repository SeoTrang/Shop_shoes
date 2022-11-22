
// ------------------------authentication---------------------
//set cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  //get cookie
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

//   function delete_cookie(name) {
//     document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
//   }
  
  function signin(){
    $.ajax({
        url:'/sign-in',
        type:'POST',
        data: {
            email: $('#email').val(),
            password: $('#password').val()
        }
    })
    .then( data =>{
        //{{!-- console.log(document.cookie); --}}
        //{{!-- console.log(data); --}}
       
    
        if(data.token){
            console.log('thanh cong 1')
            console.log(data.token)
            setCookie('token',data.token,1)
            window.location.href = '/';
        }else{
            console.log('that bai')
        }
    })
    .catch(err=>{
        console.log('that bai')
    })
  }




// ======================= bắt lỗi đăng ký tài khoản ==================================

function is_special_character(props){
    const invalid_char =  ['~','!','@','#','$','%','^','&','*','_',',','{','}'];
    let array_props = props.split("");
    for (let index = 0; index < array_props.length; index++) {
      if(invalid_char.includes(array_props[index])){
        return true;
      }
      
    }
  
    return false;
  }
  

async function validate_form_sign_up(){
    let form_element  = document.querySelector("#add-user form");

    let name = document.querySelector("#add-user .name input").value;
    let email = document.querySelector("#add-user .email input").value;
    let phone = document.querySelector("#add-user .phone input").value;
    let password = document.querySelector("#add-user .pass-word input").value;
    let confirm_pass = document.querySelector("#add-user .confirm-pass-word input").value;

    // console.log(email);
    // console.log(phone);
    // console.log(password);
    // console.log(confirm_pass);
    let count_invalid = 0;

    if(name.length == 0 || is_special_character(name)){
        let name_element = document.querySelector("#add-user .name input");
        let invalid_nofitication = document.querySelector("#add-user .name .invalid");
        name_element.style.border = '1px solid red';
        invalid_nofitication.style.display = 'block';
        count_invalid += 1;
    }
    if(email.length == 0 || is_special_character(email)){
        let name_element = document.querySelector("#add-user .email input");
        let invalid_nofitication = document.querySelector("#add-user .email .invalid");
        name_element.style.border = '1px solid red';
        invalid_nofitication.style.display = 'block';
        count_invalid += 1;
    }
    if(phone.length == 0 || is_special_character(phone)){
        let name_element = document.querySelector("#add-user .phone input");
        let invalid_nofitication = document.querySelector("#add-user .phone .invalid");
        name_element.style.border = '1px solid red';
        invalid_nofitication.style.display = 'block';
        count_invalid += 1;
    }

    if(password.length <= 6){
        let name_element = document.querySelector("#add-user .pass-word input");
        let invalid_nofitication = document.querySelector("#add-user .pass-word .invalid");
        name_element.style.border = '1px solid red';
        invalid_nofitication.style.display = 'block';
        count_invalid += 1;
    }

    if(password !== confirm_pass){
        let name_element = document.querySelector("#add-user .confirm-pass-word input");
        let invalid_nofitication = document.querySelector("#add-user .confirm-pass-word .invalid");
        name_element.style.border = '1px solid red';
        invalid_nofitication.style.display = 'block';
        count_invalid += 1;
    }
   

    if(count_invalid !== 0){
        form_element.submit();
    }
}
