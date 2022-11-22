
// chart of category-------------------------------------------------------------

function chartCategory() {
    const dataCategory = {
        labels: [
          'Nike',
          'Vans',
          'Adidas'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [200, 80, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    

    const configCategory = {
        type: 'doughnut',
        data: dataCategory,
    };

    const myChartCategory = new Chart(
        document.getElementById('chartCategory'),
        configCategory
    );

}

chartCategory();

// ----------------------------------------------
// side-bar admin
var sidebar_chind = document.querySelectorAll("#sidebar .sidebar-chind");
var sidebar_chind2 ;
var icon_down = document.querySelectorAll("#sidebar .icon-down");
var icon_up = document.querySelectorAll("#sidebar .icon-up");

var icon_down1,icon_up1;
for (let index = 0; index < sidebar_chind.length; index++) {
    sidebar_chind[index].onclick = function show_sidebar_chind2() {
        // console.log(sidebar_chind[index]);
        sidebar_chind2 = sidebar_chind[index].getElementsByTagName("ul")[0];
        icon_down1 = sidebar_chind[index].querySelectorAll("#sidebar .icon-down")[0];
        icon_up1 = sidebar_chind[index].querySelectorAll("#sidebar .icon-up")[0];
        

        icon_down1.style.display = "none";
        icon_up1.style.display = "block";
        sidebar_chind2.style.display = "block";

    }
    

}




// chart of category-------------------------------------------------------------

function chartCategory() {
    const dataCategory = {
        labels: [
          'Nike',
          'Vans',
          'Adidas'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [200, 80, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    

    const configCategory = {
        type: 'doughnut',
        data: dataCategory,
    };

    const myChartCategory = new Chart(
        document.getElementById('chartCategory'),
        configCategory
    );

}

chartCategory();

// ----------------------------------------------
// side-bar admin
var sidebar_chind = document.querySelectorAll("#sidebar .sidebar-chind");
var sidebar_chind2 ;
var icon_down = document.querySelectorAll("#sidebar .icon-down");
var icon_up = document.querySelectorAll("#sidebar .icon-up");

var icon_down1,icon_up1;
for (let index = 0; index < sidebar_chind.length; index++) {
    sidebar_chind[index].onclick = function show_sidebar_chind2() {
        // console.log(sidebar_chind[index]);
        sidebar_chind2 = sidebar_chind[index].getElementsByTagName("ul")[0];
        icon_down1 = sidebar_chind[index].querySelectorAll("#sidebar .icon-down")[0];
        icon_up1 = sidebar_chind[index].querySelectorAll("#sidebar .icon-up")[0];
        

        icon_down1.style.display = "none";
        icon_up1.style.display = "block";
        sidebar_chind2.style.display = "block";

    }
    

}


// ========================== bắt lỗi thêm sản phẩm ==========================

//là kí tự đặc biệt
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







// validate add new products
async function validate_form_new_product(){

    let count_invalid = 0;
    let form_element = await document.querySelector("#addProduct form");

    let name = await document.querySelector("#addProduct .name input").value;
    let price_old = await document.querySelector("#addProduct .price-old input").value;
    let price = await document.querySelector("#addProduct .price input").value;
    let promo = await document.querySelector("#addProduct .promo input").value;
    let status = await document.querySelector("#addProduct .status input").value;
    let count = await document.querySelector("#addProduct .count input").value;

    if(name.length == 0 || is_special_character(name)){
       
        let name_element = await document.querySelector("#addProduct .name input");
        let invalid_nofitication = await document.querySelector("#addProduct .name .invalid");
        console.log(invalid_nofitication);
        name_element.style.border = '1px solid red';
        invalid_nofitication.style.display = 'block';
         count_invalid  += 1; // tăng giá trị đếm trường sai lên

        
    }

    if(price_old.length == 0 || is_special_character(price_old)){
       
      let name_element = await document.querySelector("#addProduct .price-old input");
      let invalid_nofitication = await document.querySelector("#addProduct .price-old .invalid");
      console.log(invalid_nofitication);
      name_element.style.border = '1px solid red';
      invalid_nofitication.style.display = 'block';
      count_invalid  += 1; // tăng giá trị đếm trường sai lên

      
    }
    if(price.length == 0 || is_special_character(price)){
        
      let name_element = await document.querySelector("#addProduct .price input");
      let invalid_nofitication = await document.querySelector("#addProduct .price .invalid");
      console.log(invalid_nofitication);
      name_element.style.border = '1px solid red';
      invalid_nofitication.style.display = 'block';
      count_invalid  += 1; // tăng giá trị đếm trường sai lên

      
    }
    if(promo.length == 0 || is_special_character(promo)){
          
      let name_element = await document.querySelector("#addProduct .promo input");
      let invalid_nofitication = await document.querySelector("#addProduct .promo .invalid");
      console.log(invalid_nofitication);
      name_element.style.border = '1px solid red';
      invalid_nofitication.style.display = 'block';
      count_invalid  += 1; // tăng giá trị đếm trường sai lên

      
    }

    if(status.length == 0 || is_special_character(status)){
          
      let name_element = await document.querySelector("#addProduct .status input");
      let invalid_nofitication = await document.querySelector("#addProduct .status .invalid");
      console.log(invalid_nofitication);
      name_element.style.border = '1px solid red';
      invalid_nofitication.style.display = 'block';

      
    }

    if(count.length == 0 || is_special_character(count)){
          
      let name_element = await document.querySelector("#addProduct .count input");
      let invalid_nofitication = await document.querySelector("#addProduct .count .invalid");
      console.log(invalid_nofitication);
      name_element.style.border = '1px solid red';
      invalid_nofitication.style.display = 'block';

      
    }

    // console.log(count_invalid);
    if(count_invalid === 0){
      form_element.submit();
    }



}






// switch to put (update)



// switch to delete

