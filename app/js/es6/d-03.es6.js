/* jshint unused:false, camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    initGraph();
    $('#go').click(go);
  }

  function go(){
    var count = $('#count').val();
    var url = `http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=${count}&country=us&apikey=xtxzjsqgraemf6fkb2d6d4ck&callback=?`;
    $.getJSON(url, display);
  }

  function display(data){
    data.movies.forEach(m=>chart.dataProvider.push({title:m.title, audience:m.ratings.audience_score, critics:m.ratings.critics_score}));
    chart.validateData();
  }

  var chart;
  function initGraph(){
    chart = AmCharts.makeChart('graph', {
    'type': 'serial',
    'theme': 'chalk',
    'pathToImages': 'http://www.amcharts.com/lib/3/images/',
    'legend': {
        'useGraphSettings': true
    },
    'dataProvider': [],
    'valueAxes': [{
        'id':'v1',
        'minimum': 0,
        'maximum': 100,
        'axisColor': '#FF6600',
        'axisThickness': 2,
        'gridAlpha': 0,
        'axisAlpha': 1,
        'position': 'left'
    }],
    'graphs': [{
        'valueAxis': 'v1',
        'lineColor': '#FF6600',
        'bullet': 'round',
        'bulletBorderThickness': 1,
        'hideBulletsCount': 30,
        'title': 'audience rating',
        'valueField': 'audience',
        'fillAlphas': 0
    }, {
        'valueAxis': 'v1',
        'lineColor': '#B0DE09',
        'bullet': 'triangleUp',
        'bulletBorderThickness': 1,
        'hideBulletsCount': 30,
        'title': 'critics rating',
        'valueField': 'critics',
        'fillAlphas': 0
    }],
    'chartCursor': {
        'cursorPosition': 'mouse'
    },
    'categoryField': 'title',
    'categoryAxis': {
        'axisColor': '#DADADA',
        'minorGridEnabled': true
    }
    });
  }

})();
