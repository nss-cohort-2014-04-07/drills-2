// (function(){
//   'use strict';
//
//   $(document).ready(init);
//
//   function init(){
//     $('#block').click(block);
//     $('#default').click(defparams);
//     $('#rest').click(rest);
//     $('#spread').click(spread);
//   }
//
//   function spread(){
//     var nums = _(_.range(10,25,5)).shuffle().value();
//     var x = vol(...nums);
//     console.log(x);
//   }
//
//   function people(first, ...other){
//     console.log(first);
//     console.log(other);
//   }
//
//   function rest(){
//     people('bob', 'frank', 'sally', 'jim', 'nora');
//   }
//
//   function vol(l, w, h=5){
//     return l * w * h;
//   }
//
//   function defparams(){
//     console.log('default params');
//     console.log(vol(2,3,4));
//     console.log(vol(2,3));
//   }
//
//   function block(){
//     var a = 1;
//     const PI = 3.14;
//
//     {
//       var b = 2;
//       let c = 3;
//       console.log('c inner - ' + c);
//     }
//
//     if(3<5){
//       let d = 4;
//       console.log('d inner - ' + d);
//     }
//
//     for(let i = 0; i < 5; i++){
//       console.log(i);
//     }
//
//     console.log(PI);
//     console.log('a - ' + a);
//     console.log('b - ' + b);
//     //console.log('c - ' + c); - does not work!
//     //console.log('d - ' + d); - does not work!
//     console.log(i);
//   }
// })();
