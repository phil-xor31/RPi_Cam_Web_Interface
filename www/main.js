$(function() {

  //
  // MJPEG
  //
  var mjpeg_img;
  var halted = 0;

  function reload_img () {
    if(!halted) 
      mjpeg_img.prop('src', 'cam_pic.php?time=' + new Date().getTime());
    else 
      setTimeout(reload_img(), 500);
  }

  function error_img () {
    setTimeout("mjpeg_img.prop('src', 'cam_pic.php?time=' + new Date().getTime());", 100);
  }


  // Ajax interface
  function process_cmd_response(responseText) {

    if(responseText == "ready") {
      $("#video_button").prop("disabled", false);
      $("#video_button").val("record video start");
      $("#video_button").on('click', function() {send_cmd("ca 1");});
      $("#image_button").prop("disabled", false);
      $("#image_button").val("record image");
      $("#image_button").on("click",function() {send_cmd("im");});
      $("#timelapse_button").prop("disabled", false);
      $("#timelapse_button").val("timelapse start");
      $("#timelapse_button").on("click", function() {send_cmd("tl " + ($("#tl_interval").val()*10));});
      $("#md_button").prop("disabled", false);
      $("#md_button").val("motion detection start");
      $("#md_button").on("click", function() {send_cmd("md 1");});
      $("#halt_button").prop("disabled", false);
      $("#halt_button").val("stop camera");
      $("#halt_button").on("click", function() {send_cmd("ru 0");});
      halted = 0;
    }
    else if(responseText == "md_ready") {
      $("#video_button").prop("disabled", true);
      $("#video_button").val("record video start");
      $("#video_button").on("click", function() {});
      $("#image_button").prop("disabled", true);
      $("#image_button").val("record image");
      $("#image_button").on("click", function() {});
      $("#timelapse_button").prop("disabled", true);
      $("#timelapse_button").val("timelapse start");
      $("#timelapse_button").on("click", function() {});
      $("#md_button").prop("disabled", false);
      $("#md_button").val("motion detection stop");
      $("#md_button").on("click", function() {send_cmd("md 0");});
      $("#halt_button").prop("disabled", true);
      $("#halt_button").val("stop camera");
      $("#halt_button").on("click", function() {});
      halted = 0;
    }
    else if(responseText == "video") {
      $("#video_button").prop("disabled", false);
      $("#video_button").val("record video stop");
      $("#video_button").on("click", function() {send_cmd("ca 0");});
      $("#image_button").prop("disabled", true);
      $("#image_button").val("record image");
      $("#image_button").on("click", function() {});
      $("#timelapse_button").prop("disabled", true);
      $("#timelapse_button").val("timedlapse start");
      $("#timelapse_button").on("click", function() {});
      $("#md_button").prop("disabled", true);
      $("#md_button").val("motion detection start");
      $("#md_button").on("click", function() {});
      $("#halt_button").prop("disabled", true);
      $("#halt_button").val("stop camera");
      $("#halt_button").on("click", function() {});
    }
    else if(responseText == "timelapse") {
      $("#video_button").prop("disabled", true);
      $("#video_button").val("record video start");
      $("#video_button").on("click", function() {});
      $("#image_button").prop("disabled", true);
      $("#image_button").val("record image");
      $("#image_button").on("click", function() {});
      $("#timelapse_button").prop("disabled", false);
      $("#timelapse_button").val("timelapse stop");
      $("#timelapse_button").on("click", function() {send_cmd("tl 0");});
      $("#md_button").prop("disabled", true);
      $("#md_button").val("motion detection start");
      $("#md_button").on("click", function() {});
      $("#halt_button").prop("disabled", true);
      $("#halt_button").val("stop camera");
      $("#halt_button").on("click", function() {});
    }
    else if(responseText == "md_video") {
      $("#video_button").prop("disabled", true);
      $("#video_button").val("record video start");
      $("#video_button").on("click", function() {});
      $("#image_button").prop("disabled", true);
      $("#image_button").val("record image");
      $("#image_button").on("click", function() {});
      $("#timelapse_button").prop("disabled", true);
      $("#timelapse_button").val("timelapse start");
      $("#timelapse_button").on("click", function() {});
      $("#md_button").prop("disabled", true);
      $("#md_button").val("recording video...");
      $("#md_button").on("click", function() {});
      $("#halt_button").prop("disabled", true);
      $("#halt_button").val("stop camera");
      $("#halt_button").on("click", function() {});
    }
    else if(responseText == "image") {
      $("#video_button").prop("disabled", true);
      $("#video_button").val("record video start");
      $("#video_button").on("click", function() {});
      $("#image_button").prop("disabled", true);
      $("#image_button").val("recording image");
      $("#image_button").on("click", function() {});
      $("#timelapse_button").prop("disabled", true);
      $("#timelapse_button").val("timelapse start");
      $("#timelapse_button").on("click", function() {});
      $("#md_button").prop("disabled", true);
      $("#md_button").val("motion detection start");
      $("#md_button").on("click", function() {});
      $("#halt_button").prop("disabled", true);
      $("#halt_button").val("stop camera");
      $("#halt_button").on("click", function() {});
    }
    else if(responseText == "boxing") {
      $("#video_button").prop("disabled", true);
      $("#video_button").val("video processing...");
      $("#video_button").on("click", function() {});
      $("#image_button").prop("disabled", true);
      $("#image_button").val("record image");
      $("#image_button").on("click", function() {});
      $("#timelapse_button").prop("disabled", true);
      $("#timelapse_button").val("timelapse start");
      $("#timelapse_button").on("click", function() {});
      $("#md_button").prop("disabled", true);
      $("#md_button").val("motion detection start");
      $("#md_button").on("click", function() {});
      $("#halt_button").prop("disabled", true);
      $("#halt_button").val("stop camera");
      $("#halt_button").on("click", function() {});
    }
    else if(responseText == "md_boxing") {
      $("#video_button").prop("disabled", true);
      $("#video_button").val("record video start");
      $("#video_button").on("click", function() {});
      $("#image_button").prop("disabled", true);
      $("#image_button").val("record image");
      $("#image_button").on("click", function() {});
      $("#timelapse_button").prop("disabled", true);
      $("#timelapse_button").val("timelapse start");
      $("#timelapse_button").on("click", function() {});
      $("#md_button").prop("disabled", true);
      $("#md_button").val("video processing...");
      $("#md_button").on("click", function() {});
      $("#halt_button").prop("disabled", true);
      $("#halt_button").val("stop camera");
      $("#halt_button").on("click", function() {});
    }
    else if(responseText == "halted") {
      $("#video_button").prop("disabled", true);
      $("#video_button").val("record video start");
      $("#video_button").on("click", function() {});
      $("#image_button").prop("disabled", true);
      $("#image_button").val("record image");
      $("#image_button").on("click", function() {});
      $("#timelapse_button").prop("disabled", true);
      $("#timelapse_button").val("timelapse start");
      $("#timelapse_button").on("click", function() {});
      $("#md_button").prop("disabled", true);
      $("#md_button").val("motion detection start");
      $("#md_button").on("click", function() {});
      $("#halt_button").prop("disabled", false);
      $("#halt_button").val("start camera");
      $("#halt_button").on("click", function() {send_cmd("ru 1");});
      halted = 1;
    }
    else if(responseText.substr(0,5) == "Error") {
      alert("Error in RaspiMJPEG: " + responseText.substr(7) + "\nRestart RaspiMJPEG (./RPi_Cam_Web_Interface_Installer.sh start) or the whole RPi.");
    }

    reload_ajax(responseText);
  }

  function reload_ajax (last) {
    $.ajax({
        url: 'status_mjpeg.php',
        type: 'GET',
        dataType: 'TEXT',
        cache: false,
        data: {'last': last},
        success: process_cmd_response
    });
  }

  function send_cmd (cmd) {
    $.ajax({
      url: 'cmd_pipe.php',
      type: 'GET',
      dataType: 'TEXT',
      cache: false,
      data: {'cmd': cmd},
      //success: 
    });
  }

  //
  // Init
  //
  function init() {

    // mjpeg
    mjpeg_img = $("#mjpeg_dest");
    mjpeg_img.load(reload_img);
    mjpeg_img.error(error_img);
    // mjpeg_img = document.getElementById("mjpeg_dest");
    // mjpeg_img.onload = reload_img;
    // mjpeg_img.onerror = error_img;
    reload_img();
    // status
    reload_ajax("");

  }


  init();

  // event handlers for all the buttons and selectors on index.html

  $('#select_preset_res').on('change', function() {
    $("#video_width").val(this.value.substr(0, 4));
    $("#video_height").val(this.value.substr(5, 4));
    $("#video_fps").val(this.value.substr(10, 2));
    $("#MP4Box_fps").val(this.value.substr(13, 2));
    $("#image_width").val(this.value.substr(16, 4));
    $("#image_height").val(this.value.substr(21, 4));
    send_cmd("px " + this.value);
  });
  
  $('#set_res').on('click', function() {
    while($("#video_width").val().length < 4) $("#video_width").val("0" + $("#video_width").val());
    while($("#video_height").val().length < 4) $("#video_height").val("0" + $("#video_height").val());
    while($("#video_fps").val().length < 2) $("#video_fps").val("0" + $("#video_fps").val());
    while($("#MP4Box_fps").val().length < 2) $("#MP4Box_fps").val("0" + $("#MP4Box_fps").val());
    while($("#image_width").val().length < 4) $("#image_width").val("0" + $("#image_width").val());
    while($("#image_height").val().length < 4) $("#image_height").val("0" + $("#image_height").val());
    
    send_cmd("px " + 
      $("#video_width").val() + " " + 
      $("#video_height").val() + " " + 
      $("#video_fps").val() + " " + 
      $("#MP4Box_fps").val() + " " + 
      $("#image_width").val() + " " + 
      $("#image_height").val());

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
    while($("#ce_u").val().length < 3) $("#ce_u").val("0" + $("#ce_u").val());
    while($("#ce_v").val().length < 3) $("#ce_v").val("0" + $("#ce_v").val());
  
    send_cmd("ce " + 
      $("#ce_en").val() + " " + 
      $("#ce_u").val() + " " + 
      $("#ce_v").val());
  });

  $('#set_rotation').on('change', function() {
  	send_cmd('ro ' + this.value);
  });

  $('#set_flip').on('change', function() {
  	send_cmd('fl ' + this.value);
  });

  $('#set_roi').on('click', function() {
    while($("#roi_x").val().length < 5) $("#roi_x").val("0" + $("#roi_x").val());
    while($("#roi_y").val().length < 5) $("#roi_y").val("0" + $("#roi_y").val());
    while($("#roi_w").val().length < 5) $("#roi_w").val("0" + $("#roi_w").val());
    while($("#roi_h").val().length < 5) $("#roi_h").val("0" + $("#roi_h").val());
    
    send_cmd("ri " + 
      $("#roi_x").val() + " " + 
      $("#roi_y").val() + " " + 
      $("#roi_w").val() + " " + 
      $("#roi_h").val());

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