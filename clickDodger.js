var goRight = false;
  
$("#btn").mouseenter(function () { 
  if (!goRight) {
      $("#btn").animate( {
          right:'-=250px'
      });
      goRight = true;
  } else {
      $("#btn").animate( {
          right:'+=250px'
      });
      goRight = false;
  }
});