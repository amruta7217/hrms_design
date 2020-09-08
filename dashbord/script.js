let myDoughnutChart = document.getElementById('myChart').getContext('2d')

let chart1 = new Chart(myDoughnutChart, {
  type: 'doughnut',
  data: {
    labels: ['HR', 'Finance', 'Ops', 'Sales'],
    datasets: [
      {
        data: [05, 60, 15, 20],
        backgroundColor: ['#49A9EA', '#7cbe5f', 'pink', 'red'],
      },
    ],
  },
  options: {
    legend: {
      position: 'right',
    },
    title: {
      text: 'Moving Title Around',
      verticalAlign: 'bottom',
      // "top", "center", "bottom"
      horizontalAlign: 'left', // "left", "right", "center"
    },
  },
})

let myChart2 = document.getElementById('myChart2').getContext('2d')

let chart2 = new Chart(myChart2, {
  type: 'doughnut',
  data: {
    labels: ['Delhi', 'Pune', 'mumbai'],
    datasets: [
      {
        data: [15, 65, 20],
        backgroundColor: ['#49A9EA', '#7cbe5f', 'pink'],
      },
    ],
  },
  options: {
    legend: {
      position: 'right',
    },
    title: {
      //text: "Location Wise Employee",
      //display: true
    },
  },
})

let myDoughnut1Chart = document.getElementById('myChart5').getContext('2d')

let chart5 = new Chart(myDoughnut1Chart, {
  type: 'doughnut',
  data: {
    labels: ['Probation', 'Regular', 'Trainee'],
    datasets: [
      {
        data: [15, 20, 65],
        backgroundColor: ['#7cbe5f', 'pink', 'red'],
      },
    ],
  },
  options: {
    legend: {
      position: 'right',
    },
    title: {
      //text: "Location Wise Employee",
      // display: true
    },
  },
})

let myChart3 = document.getElementById('myChart3').getContext('2d')

let chart3 = new Chart(myChart3, {
  type: 'doughnut',
  data: {
    labels: ['20-30', '31-40', '41-50', '51-60'],
    datasets: [
      {
        data: [05, 60, 15, 20],
        backgroundColor: ['#49A9EA', '#7cbe5f', 'pink', 'red'],
      },
    ],
  },
  options: {
    legend: {
      position: 'right',
    },
    title: {
      // text: "Location Wise Employee",
      //display: true
    },
  },
})

let myChart4 = document.getElementById('myChart4').getContext('2d')

let chart4 = new Chart(myChart4, {
  type: 'doughnut',
  data: {
    labels: ['Under Grad', 'Graduate', 'Post Grad', 'Doctorate'],
    datasets: [
      {
        data: [05, 60, 15, 20],
        backgroundColor: ['#49A9EA', '#7cbe5f', 'pink', 'red'],
      },
    ],
  },
  options: {
    legend: {
      position: 'right',
    },
    title: {
      //text: "Location Wise Employee",
      //display: true
    },
  },
})

let myChart6 = document.getElementById('myChart6').getContext('2d')

let chart6 = new Chart(myChart6, {
  type: 'doughnut',
  data: {
    labels: ['Referrals', 'Consultant', 'Walk-in', 'Internal'],
    datasets: [
      {
        data: [05, 60, 15, 20],
        backgroundColor: ['#49A9EA', 'green', 'pink', 'red'],
      },
    ],
  },
  options: {
    legend: {
      position: 'right',
    },
    title: {
      // text: "Location Wise Employee",
      // display: true
    },
  },
})
