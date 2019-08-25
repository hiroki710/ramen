$(function(){

  // 色の設定
  var colorSet = {
  	red: 'rgb(255, 99, 132)',
  	orange: 'rgb(255, 159, 64)',
  	yellow: 'rgb(255, 205, 86)',
  	green: 'rgb(75, 192, 192)',
  	blue: 'rgb(54, 162, 235)',
  	purple: 'rgb(153, 102, 255)',
  	grey: 'rgb(201, 203, 207)'
  };

  // 乱数生成(0～100)
  var rnd100 = function(){
  	return Math.round(Math.random() * 100);
  };

  // 色のRGB変換
  var color = Chart.helpers.color;

  /*
   * チャートの初期設定
   */
  var config = {
  	type: 'radar',
  	data: {
  		labels: ["個性", "価格(安)", "ラーメンの種類", "サイドメニュー", "ボリューム"],
  		datasets: [{
  			label: "ラーメン申家",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [4, 3, 5, 3, 3]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [3, 3, 3, 3, 3]
  		},]
  	},
  	options: {
  		animation:false,
  		showTooltips: false,
  		legend: { position: 'bottom' },
  		title: {
  			display: true,
  			fontSize:20,
  			fontColor:'#666',
  			// text: 'ラーメンチャート'
  		},
  		scale: {
  			display: true,
  			pointLabels: {
  				fontSize: 15,
  				fontColor: colorSet.yellow
  			},
  			ticks: {
  				display: true,
  				fontSize: 12,
  				fontColor: colorSet.green,
  				min: 0,
  				max: 5,
  				beginAtZero: true
  			},
  			gridLines: {
  				display: true,
  				color: colorSet.yellow
  			}
  		}
  	}
  };

  /*
   * チャートの作成
   */
  var myRadar = new Chart($("#myChart"), config);

  /*
   * ランダムデータ（#randomizeData）
   */
  $("#randomizeData").click(function(){
  	config.data.datasets.forEach(function(dataset){
  		dataset.data = dataset.data.map(function(){
  			return rnd100();
  		});
  	});

  	myRadar.update();
  });

  var colorNames = Object.keys(colorSet);

  /*
   * データセットの追加（#addDataset）
   */
  $("#addDataset").click(function(){
  	var colorName = colorNames[config.data.datasets.length % colorNames.length];;
  	var newColor = colorSet[colorName];

  	var newDataset = {
  		label: 'Dataset ' + config.data.datasets.length,
  		borderColor: newColor,
  		backgroundColor: color(newColor).alpha(0.2).rgbString(),
  		pointBorderColor: newColor,
  		data: [],
  	};

  	for (var index=0; index < config.data.labels.length; ++index) {
  		newDataset.data.push(rnd100());
  	}

  	config.data.datasets.push(newDataset);
  	myRadar.update();
  });

  /*
   * データの追加（#addData）
   */
  $("#addData").click(function(){
  	if (config.data.datasets.length > 0){
  		config.data.labels.push('dataset #' + config.data.labels.length);

  		config.data.datasets.forEach(function(dataset){
  			dataset.data.push(rnd100());
  		});

  		myRadar.update();
  	}
  });

  /*
   * データセットの削除（#removeDataset）
   */
  $("#removeDataset").click(function(){
  	config.data.datasets.splice(0, 1);
  	myRadar.update();
  });

  /*
   * データの削除（#removeData）
   */
  $("#removeData").click(function(){
  	config.data.labels.pop(); // remove the label first

  	config.data.datasets.forEach(function(dataset){
  		dataset.data.pop();
  	});

  	myRadar.update();
  });


});
