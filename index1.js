(function() {
    var myvideo = document.getElementById('myvideo');
    var play = document.getElementById('img_go');
    var background = document.getElementById("background");
    play.onclick = function() {
            if (myvideo.paused) {
                myvideo.play();
                play.src = "img/stop_up.png";
                background.style.visibility = "hidden";
            } else {
                myvideo.pause();
                play.src = "img/go_up.png";
                background.style.visibility = "visible";
            }
        }
        //stop/go的暂停 开始onclicks时间;
    background.onclick = function() {
            background.style.visibility = "hidden";
        }
        //图片点击变没；
    var cle_img = document.getElementById('time_cle')
    var cur_div = document.getElementById('current_div');
    var dur_div = document.getElementById('dur_div');
    myvideo.ontimeupdate = function() {
            var cur_min = parseInt(myvideo.currentTime / 60);
            var cur_sec = Math.floor(myvideo.currentTime % 60);
            var dur_min = parseInt(myvideo.duration / 60);
            var dur_sec = Math.floor(myvideo.duration % 60);
            var cur_time = document.getElementById('current_time');
            cur_div.innerHTML = zero(cur_min) + ":" + zero(cur_sec);
            dur_div.innerHTML = zero(dur_min) + ":" + zero(dur_sec);

            cle_img.style.left = (80 * myvideo.currentTime / myvideo.duration + 8) + "%";
            cur_time.style.width = (80 * myvideo.currentTime / myvideo.duration) + "%";

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
    var up = document.getElementById('img_big');
    var down = document.getElementById('img_small');
    up.onclick = function() {
        if (myvideo.volume < 1) {
            myvideo.volume += 0.1;
            slc.src = 'img/music.png';
        } else {
            myvideo.volume = 1;
            alert("声音已经最大");
        }

    }
    down.onclick = function() {
        if (myvideo.volume <= 1.3877787807814457e-16) {
            myvideo.volume = 1.3877787807814457e-16;
            slc.src = 'img/no_music.png';
            alert('声音已经最小');
            return false;
        } else {}
        myvideo.volume -= 0.1;
    }

    var slc = document.getElementById('img_muc');
    slc.onclick = function() {
        if (myvideo.muted) {
            myvideo.muted = false;
            slc.src = 'img/music.png';
            return false;

        } else myvideo.muted = true;
        slc.src = 'img/no_music.png';
    }
    up.onmousedown = function() {
        up.src = 'img/big_down.png';
    }
    up.onmouseup = function() {
        up.src = 'img/big_up.png';
    }
    down.onmousedown = function() {
        down.src = 'img/small_down.png';
    }
    down.onmouseup = function() {
            down.src = 'img/small_up.png';
        }
        //增加静音按钮及功能；
    var sounder = document.getElementById('sound1');
    myvideo.onvolumechange = function() {
            if (myvideo.muted) {
                sounder.style.width = "0";
            } else {
                sounder.style.width = myvideo.volume * 70 + "px"
            }
        }
        //调节音量按钮 以及音量条；
    var next = document.getElementById('img_next');
    next.onclick = function() {
        if (myvideo.src == "https://media.w3.org/2010/05/sintel/trailer.mp4") {
            myvideo.src = "http://media.w3.org/2010/05/bunny/trailer.mp4";
            myvideo.play();
        } else {
            if (myvideo.src == "http://media.w3.org/2010/05/bunny/trailer.mp4") {
                myvideo.src = "http://media.w3.org/2010/05/bunny/movie.mp4";
                myvideo.play();
            } else {
                myvideo.src = "https://media.w3.org/2010/05/sintel/trailer.mp4";
                myvideo.play();
            }
        }
    }
    var front = document.getElementById('img_front');
    front.onclick = function() {
        if (myvideo.src == "https://media.w3.org/2010/05/sintel/trailer.mp4") {
            myvideo.src = "http://media.w3.org/2010/05/bunny/movie.mp4";
            myvideo.play();
        } else if (myvideo.src == "http://media.w3.org/2010/05/bunny/movie.mp4") {
            myvideo.src = "http://media.w3.org/2010/05/bunny/trailer.mp4";
            myvideo.play();
        } else {
            myvideo.src = "https://media.w3.org/2010/05/sintel/trailer.mp4";
            myvideo.play();
        }
    }
    front.onmousedown = function() {
        front.src = "img/front_down.png";
    }
    front.onmouseup = function() {
        front.src = "img/front_up.png";
    }
    next.onmousedown = function() {
        next.src = "img/next_down.png";
    }
    next.onmouseup = function() {
            next.src = "img/next_up.png";
        }
        //前一个 后一个 按钮；
    img_go.onmousedown = function() {
        if (img_go.src == "img/go_up.png") {
            img_go.src = "img/go_down.png";
        } else {
            img_go.src = "img/stop_down.png";
        }
    }
    img_go.onmouseup = function() {
        if (img_go.src == "img/go_down.png") {
            img_go.src = "img/go_up.png";
        } else {
            img_go.src = "img/stop_up.png"
        }
    }
    back.onmousedown = function() {
        back.src = "img/back_down.png";
    }
    back.onmouseup = function() {
        back.src = "img/back_up.png";
    }
    ahead.onmousedown = function() {
        ahead.src = "img/ahead_down.png";
    }
    ahead.onmouseup = function() {
            ahead.src = "img/ahead_up.png";
        }
        // 
    var cur = document.getElementById('current_time');
    var tal = document.getElementById('total_time');
    cle_img.ondragstart = function(event) {
        x_sta = event.clientX;
        x_cur = cur.clientWidth;
        x_dur = tal.clientWidth;
    }

    cle_img.ondragend = function(event) {
        x_end = event.clientX;
        x_len = (x_cur - x_sta + x_end) / x_dur;
        if (x_len <= 0) {
            x_len = 0;
        } else if (x_len >= 1) {
            x_len = 1;
        } else {
            x_len = x_len;
        }
        myvideo.currentTime = x_len * myvideo.duration;
        jindu_cur();
    }

    function jindu_cur() {
        jindu_current.style.width = (video1.currentTime / video1.duration) * 100 + '%';
    }
}(window))
