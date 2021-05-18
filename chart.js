const ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Histogramme de l\'image',
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

myChart.canvas.parentNode.style.height = '500px';
myChart.canvas.parentNode.style.width = '500px';
Chart.defaults.global.defaultFontColor = '#e8e8e8';

function histogram() {
  var canvas = document.getElementById('mycanvas');
  var context = canvas.getContext('2d');

  // Get the CanvasPixelArray from the given coordinates and dimensions.
  x = 0;
  y = 0;
  width = canvas.width;
  height = canvas.height;

  var imgd = context.getImageData(x, y, width, height);
  var pix = imgd.data;

  var labels = [];
  var backgroundColor = [];
  var borderColor = [];
  var data = [];

  for (var i = 0; i <= 255; i++) {
    labels.push(i);
    backgroundColor.push("rgba(0, 173, 181, 1)");
    borderColor.push("rgba(0, 173, 181, 0.2)");
    data.push(0);
  }

  for (var i = 0; i <= pix.length; i += 4) {
    var moy = (pix[i] + pix[i+1] + pix[i+2]) / 3;
    data[moy] = data[moy] + 1;
  }

  myChart.data.labels = labels;
  myChart.data.datasets[0].data = data;
  myChart.data.datasets[0].backgroundColor = backgroundColor;
  myChart.data.datasets[0].borderColor = borderColor;

  myChart.update();
}
