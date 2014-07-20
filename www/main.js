$(function() {

  console.log("main.js loaded");

  // event handlers for all the buttons and selectors on index.html
  $('#select_preset_res').on('change', function() {
  	set_preset(this.value);
  });
  
  $('#set_res').on('click', function() {
  	set_res();
  });

  $('#set_sharpness').on('click', function() {
  	send_cmd('sh ' + $('#sharpness').val());
  });

  $('#set_contrast').on('click', function() {
  	send_cmd('co ' + $('#contrast').val());
  });

  $('#set_brightness').on('click', function() {
  	send_cmd('br ' + $('#brightness').val());
  });

  $('#set_saturation').on('click', function() {
  	send_cmd('sa ' + $('#saturation').val());
  });

  $('#set_iso').on('click', function() {
  	send_cmd('is ' + $('#iso').val());
  });

  $('#select_metering').on('change', function() {
  	send_cmd('mm ' + this.value);
  });

  $('#set_vid_stable_on').on('click', function() {
  	send_cmd('vs 1');
  });

  $('#set_vid_stable_off').on('click', function() {
  	send_cmd('vs 0');
  });

  $('#set_comp').on('click', function() {
  	send_cmd('ec ' + $('#comp').val());
  });

  $('#select_exposure').on('change', function() {
  	send_cmd('em ' + this.value);
  });

  $('#select_wb').on('change', function() {
  	send_cmd('wb ' + this.value);
  });

  $('#sel_effect').on('change', function() {
  	send_cmd('ie ' + this.value);
  });

  $('#set_ce').on('click', function() {
  	set_ce();
  });

  $('#set_rotation').on('change', function() {
  	send_cmd('ro ' + this.value);
  });

  $('#set_flip').on('change', function() {
  	send_cmd('fl ' + this.value);
  });

  $('#set_roi').on('click', function() {
  	set_roi();
  });

  $('#set_shutter').on('click', function() {
  	send_cmd('ss ' + $('#shutter_speed').val());
  });

  $('#set_quality').on('click', function() {
  	send_cmd('qu ' + $('#quality').val());
  });

  $('#raw_layer_on').on('click', function() {
  	send_cmd('rl 1');
  });

  $('#raw_layer_off').on('click', function() {
  	send_cmd('rl 0');
  });

  $('#set_bitrate').on('click', function() {
  	send_cmd('bi ' + $('#bitrate').val());
  });


});