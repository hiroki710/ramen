// ①想吃担担面のレーダーチャート
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
  			label: "想吃担担面",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [4, 2, 2, 4, 2]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart1"), config);

});


// ②日の出らーめんのレーダーチャート
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
  			label: "日の出らーめん",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [3, 3, 3, 3, 4]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart2"), config);

});


// ③らーめん まぜそば あらしのレーダーチャート
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
  			label: "らーめん まぜそば あらし",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [3, 3, 3, 2, 3]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart3"), config);

});


// ④油そば 春日亭のレーダーチャート
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
  			label: "油そば 春日亭",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [4, 4, 4, 2, 3]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart4"), config);

});


// ⑤横浜家系ラーメン ぎん家のレーダーチャート
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
  			label: "横浜家系ラーメン ぎん家",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [3, 3, 2, 3, 3]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart5"), config);

});


// ⑥にぼしらーめん88のレーダーチャート
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
  			label: "にぼしらーめん88",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [5, 4, 2, 2, 2]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart6"), config);

});


// ⑦R（アール）のレーダーチャート
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
  			label: "R（アール）",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [5, 2, 2, 2, 5]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart7"), config);

});


// ⑧ラーメン 申家のレーダーチャート
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
  			data: [4, 3, 4, 4, 2]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart8"), config);

});


// ⑨杏亭のレーダーチャート
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
  			label: "杏亭",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [4, 3, 2, 3, 2]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart9"), config);

});


// ⑩麺屋はやぶさのレーダーチャート
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
  			label: "麺屋はやぶさ",
  			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
  			borderColor: colorSet.red,
  			pointBackgroundColor: colorSet.red,
  			data: [5, 2, 4, 2, 3]
  		},{
  			label: "平均",
  			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
  			borderColor: colorSet.blue,
  			pointBackgroundColor: colorSet.blue,
  			data: [2, 2, 2, 2, 2]
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
  var myRadar = new Chart($("#myChart10"), config);

});
