<<<<<<< HEAD

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
=======

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
>>>>>>> bbf8e4cb3a63354c4dadc95e587bbd7331ea4b20
  }