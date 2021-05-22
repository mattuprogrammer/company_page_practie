var pieData = {
  labels: ["スマホエンジニア", "ゲーム設計", "サーバーエンジニア", "営業職その他", ],
  series: [22, 9, 8, 11]
};

var pieOptions = {
  width: '300px',
  height: '350px'
}

new Chartist.Pie('.pie-chart', pieData, pieOptions);

var barData = {
  labels: ['2018年', '2019年', '2020年', '2021年',],
  series: [[8, 10, 15, 19]]
};

var barOptions = {
  axisY: {
    offset: 60,
    scaleMinSpace: 80,
    labelInterpolationFnc: function(value) {
      return value + ' 人 '
    }
  },
  width: '300px',
  height: '350px'
};

new Chartist.Bar('.bar-chart', barData, barOptions);