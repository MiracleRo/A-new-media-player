(function() {
    var myvideo = document.getElementById('myvideo');
    var btn_play = document.getElementById('btn_go');
    btn_play.onclick = function() {
        if (myvideo.paused) {
            myvideo.play();
        } else {
            myvideo.pause();
        }
    }
    myvideo.ontimeupdate = function() {
        var time = document.getElementById('video_time');
        var cur_min = parseInt(myvideo.currentTime / 60);
        var cur_sec = Math.floor(myvideo.currentTime % 60);
        var dur_min = parseInt(myvideo.duration / 60);
        var dur_sec = Math.floor(myvideo.duration % 60);
        time.innerHTML = zero(cur_min) + ":" + zero(cur_sec) + "/" + zero(dur_min) + ":" + zero(dur_sec);

        function zero(a) {
            if (a < 10) {
                return "0" + a;
            } else {
            	return a;
            }
        }
    }
    var back = document.getElementById('btn_back');
    back.onclick = function(){
    	myvideo.currentTime  = myvideo.currentTime-5;
    }
    var ahead  =document.getElementById('btn_ahead');
    ahead.onclick = function(){
    	myvideo.currentTime = myvideo.currentTime+5;
    }
}(window))
