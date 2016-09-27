(function() {
    var myvideo = document.getElementById('myvideo');
    var play = document.getElementById('img_go');
    var background =document.getElementById("background");
    play.onclick = function() {
            if (myvideo.paused) {
                myvideo.play();
                play.src = "img/stop.png";
                background.style.visibility="hidden";
            } else {
                myvideo.pause();
                play.src = "img/go.png";
                background.style.visibility="visible";
            }
        }
        //stop/go的暂停 开始onclicks时间;
       background.onclick = function(){
        background.style.visibility="hidden";
       } 
       //图片点击变没；
    myvideo.ontimeupdate = function() {
            var time = document.getElementById('video_time');
            var cur_min = parseInt(myvideo.currentTime / 60);
            var cur_sec = Math.floor(myvideo.currentTime % 60);
            var dur_min = parseInt(myvideo.duration / 60);
            var dur_sec = Math.floor(myvideo.duration % 60);
            time.innerHTML = zero(cur_min) + ":" + zero(cur_sec) + "/" + zero(dur_min) + ":" + zero(dur_sec);
            var line = document.getElementById('liner1');
            line.style.width = (100 * myvideo.currentTime) / myvideo.duration + "%"

            function zero(a) {
                if (a < 10) {
                    return "0" + a;
                } else {
                    return a;
                }
            }
        }
        //时间进度条 以及计时器
    var back = document.getElementById('img_back');
    back.onclick = function() {
        myvideo.currentTime -= 5;
    }
    var ahead = document.getElementById('img_ahead');
    ahead.onclick = function() {
            myvideo.currentTime += 5;
        }
        //快进 快退按钮
    var up = document.getElementById('btn_up');
    var down = document.getElementById('btn_down');
    up.onclick = function() {
        myvideo.volume += 0.1;
        console.log(myvideo.volume);
    }
    down.onclick = function() {
        myvideo.volume -= 0.1;
        console.log(myvideo.volume);
    }

    var slc = document.getElementById('btn_slc');
    slc.onclick = function() {
            if (myvideo.muted) {
                myvideo.muted = false;

            } else myvideo.muted = true;
        }
        //增加静音按钮及功能；
    var sounder = document.getElementById('sound1');
    myvideo.onvolumechange = function() {
            if (myvideo.muted) {
                sounder.style.width = "0";
            } else {
                sounder.style.width = (100 * myvideo.volume) / 1 + "%"
            }
        }
        //调节音量按钮 以及音量条；
    var next = document.getElementById('btn_next');
    next.onclick = function() {
        if (myvideo.src == "https://media.w3.org/2010/05/sintel/trailer.mp4") {
            myvideo.src = "http://media.w3.org/2010/05/bunny/trailer.mp4";
            myvideo.play();
        }else {
            if (myvideo.src=="http://media.w3.org/2010/05/bunny/trailer.mp4") {
                myvideo.src = "http://media.w3.org/2010/05/bunny/movie.mp4";
                myvideo.play();
            }else {
                myvideo.src = "https://media.w3.org/2010/05/sintel/trailer.mp4";
                myvideo.play();
            }
        }
    }
    var front = document.getElementById('btn_front');
    front.onclick = function(){
        if (myvideo.src=="https://media.w3.org/2010/05/sintel/trailer.mp4") {
            myvideo.src = "http://media.w3.org/2010/05/bunny/movie.mp4";
            myvideo.play();
        }else if (myvideo.src=="http://media.w3.org/2010/05/bunny/movie.mp4") {
            myvideo.src = "http://media.w3.org/2010/05/bunny/trailer.mp4";
            myvideo.play();
        }else {
             myvideo.src = "https://media.w3.org/2010/05/sintel/trailer.mp4";
                myvideo.play();
        }
    }
    //前一个 后一个 按钮；


    /* var full = document.getElementById('btn_full');
     full.onclick = function(){
         var a = document.getElementById('player');
         a.style.width = "auto";
         a.style.height = "650px";
     }*/
}(window))
