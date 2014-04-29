/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go-strings').click(strings);
    $('#go-nums').click(nums);
  }

  function strings(){
    var s = $('#strings').val();
    var es5 = 'my fav string is' + s;
    var es6 = `my fav string is ${s}`;
    var multi = `this
                 is
                 a
                 multi line string`;
    console.log(es5);
    console.log(es6);
    console.log(multi);
  }

  function nums(){
    var numbers = $('#nums').val();

    //numbers = numbers.split(',').map(function(n){return n.trim();});
    //numbers = numbers.split(',').map(n=>n.trim()).map(n=>n*n).map(n=>n*n).filter(n=>n%2===0).map(n=>Math.pow(n,5));

    var begin = $('#begin').val();
    var end = $('#end').val();
    var step = $('#step').val();

    numbers = _.range(begin, end, step);

    var _numbers = _(numbers).collect(x=>x*x).map(n=>Math.pow(n,2)).reject(i=>i%2).shuffle();


    console.log(_numbers.value());
  }
})();
