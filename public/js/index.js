
// ======================= bắt lỗi nhập thông tin đặt hàng==================================

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

  async function validate_form_check_order(){
    let count_invalid = 0;
    let form_element = document.querySelector(".order-info-container form");

    let user_name = document.querySelector(".order-info-container .user-name input").value;
    let user_phone = document.querySelector(".order-info-container .customer-phone input").value;
    let user_email = document.querySelector(".order-info-container .customer-email input").value;
    
    let user_address = document.querySelector(".order-info-container .customer-address textarea").value;
    
    // console.log(user_name);
    // console.log(user_phone);
    // console.log(user_email);
    // console.log(user_address);

    if(user_name.length == 0 || is_special_character(user_name)){
        let user_name_element = document.querySelector(".order-info-container .user-name input");
        user_name_element.style.border = '1px solid red';
        let invalid_nofitication = document.querySelector(".order-info-container .user-name .invalid");
        invalid_nofitication.style.display = 'block';
        count_invalid += 1;
    }
    if(user_phone.length == 0 || is_special_character(user_phone)){
        let user_phone_element = document.querySelector(".order-info-container .customer-phone input");
        user_phone_element.style.border = '1px solid red';
        let invalid_nofitication = document.querySelector(".order-info-container .customer-phone .invalid");
        invalid_nofitication.style.display = 'block';
        count_invalid += 1;
    }

    // if(user_email.length == 0 || is_special_character(user_email)){
    //     let user_email_element = document.querySelector(".order-info-container .customer-email input");
    //     user_email_element.style.border = '1px solid red';
    //     let invalid_nofitication = document.querySelector(".order-info-container .customer-email .invalid");
    //     invalid_nofitication.style.display = 'block';
    // }

    if(user_address.length == 0 || is_special_character(user_address)){
        let user_address_element = document.querySelector(".order-info-container .customer-address textarea");
        user_address_element.style.border = '1px solid red';
        let invalid_nofitication = document.querySelector(".order-info-container .customer-address .invalid");
        invalid_nofitication.style.display = 'block';
        count_invalid += 1;
    }

    if(count_invalid === 0){
        form_element.submit();
    }

  }

