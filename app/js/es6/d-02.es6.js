/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    $('#squares').val().split(',').map(x=>x*x).map(x=>`<div>${x}</div>`).forEach(x=>$('#container').append(x));
  }
})();
