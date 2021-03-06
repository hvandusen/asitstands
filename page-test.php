<?php get_header ?>

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <script src="http://w.soundcloud.com/player/api.js"></script>
  <script>
   $(document).ready(function() {
     var widget = SC.Widget(document.getElementById('soundcloud_widget'));
     widget.bind(SC.Widget.Events.READY, function() {
       widget.toggle();

     });
     widget.bind(SC.Widget.Events.PLAY, function(){
       var total = widget.getDuration(function(o){
        var span = o-7200;
        var start = Math.floor(Math.random()*span);
        widget.seekTo(start);
       });

     });
     $('button').click(function() {
       widget.toggle();
       widget.seekTo(100000);
     });
   });
  </script>


  <iframe id="soundcloud_widget"
      src="http://w.soundcloud.com/player/?url=https://soundcloud.com/hvandusen/tape-jammers&show_artwork=false&liking=false&sharing=false"
      width="420"
      height="120"
      frameborder="no"></iframe>
  <button>Play / Pause</button>

</html>
