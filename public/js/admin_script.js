
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



// switch to put (update)



// switch to delete

