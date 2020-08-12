let labels1= ['Delhi','Pune','Mumbai'];
let data1 = [15,65,20];
let colors1 = ['#49A9EA', '#36CAAB'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['HR', 'Finance','Ops','Sales'],
        datasets: [ {
            data: [05,60,15,20],
            backgroundColor: ['#49A9EA','green','pink','red']
        }]
    },
    options: {
        legend:{
            position:'right',
        
        
        },
        title:{
            text:"Moving Title Around",  
            verticalAlign:"bottom",
             // "top", "center", "bottom"
            horizontalAlign: "left" // "left", "right", "center"
          },
           
        
    }
});


let labels2= ['Delhi','Pune','Mumbai'];
let data2 = [15,65,20];
let colors2 = ['#49A9EA', '#36CAAB'];


let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'doughnut',
    data: {
        labels: ['HR', 'Finance','Ops','Sales'],
        datasets: [ {
            data: [05,60,15,20],
            backgroundColor: ['#49A9EA','green','pink','red']
        }]
    },
    options: {
        legend:{
            position:'right',
        
        
        },
        title: {
            //text: "Location Wise Employee",
            //display: true
        }
    }
});


let labels5= ['Delhi','Pune','Mumbai'];
let data5 = [15,65,20];
let colors5 = ['#49A9EA', '#36CAAB'];

let myDoughnut1Chart = document.getElementById("myChart5").getContext('2d');

let chart5 = new Chart(myDoughnut1Chart, {
    type: 'doughnut',
    data: {
        labels: ['HR', 'Finance','Ops','Sales'],
        datasets: [ {
            data: [05,60,15,20],
            backgroundColor: ['#49A9EA','green','pink','red']
        }]
    },
    options: {
        legend:{
            position:'right',
        
        
        },
        title: {
            //text: "Location Wise Employee",
           // display: true
        }
    }
});



let labels3 = ['Probation','Regular','Trainee'];
let data3 = [15,65,20];
let colors3 = ['pink','green','red'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'doughnut',
    data: {
        labels: ['HR', 'Finance','Ops','Sales'],
        datasets: [ {
            data: [05,60,15,20],
            backgroundColor: ['#49A9EA','green','pink','red']
        }]
    },
    options: {
        legend:{
            position:'right',
        
        
        },
        title: {
           // text: "Location Wise Employee",
            //display: true
        }
    }
});

let labels4 = ['Germany', 'France', 'UK', 'Italy', 'Spain', 'Others(23)'];
let data4 = [83, 67, 66, 61, 47, 187];
let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'doughnut',
    data: {
        labels: ['HR', 'Finance','Ops','Sales'],
        datasets: [ {
            data: [05,60,15,20],
            backgroundColor: ['#49A9EA','green','pink','red']
        }]
    },
    options: {
        legend:{
            position:'right',
        
        
        },
        title: {
            //text: "Location Wise Employee",
            //display: true
        }
    }
});


let labels6 = ['Probation','Regular','Trainee'];
let data6 = [15,65,20];
let colors6 = ['pink','green','red'];
let myChart6 = document.getElementById("myChart6").getContext('2d');

let chart6 = new Chart(myChart6, {
    type: 'doughnut',
    data: {
        labels: ['HR', 'Finance','Ops','Sales'],
        datasets: [ {
            data: [05,60,15,20],
            backgroundColor: ['#49A9EA','green','pink','red']
        }]
    },
    options: {
        legend:{
            position:'right',
        
        
        },
        title: {
           // text: "Location Wise Employee",
           // display: true
        }
    }
});