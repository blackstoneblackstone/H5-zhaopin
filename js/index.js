function Dot(t, i) {
  this.ctx = t,
    this.config = i,
    this.init()
}

Dot.prototype = {
  init: function () {
    var t = this.config;
    this._x = this.x = t.x,
      this._y = this.y = t.y,
      this.rad = t.rad,
      this.parent = t.parent
  },
  draw: function () {
    var t = this.ctx
      , i = this.config;
    t.save(),
      t.globalAlpha = this.parent.opacity,
      t.fillStyle = i.color || "rgba(255, 255, 255, 1)",
      t.beginPath(),
      t.arc(this.x, this.y, i.r, 0, 2 * Math.PI, !1),
      t.closePath(),
      t.fill(),
      t.restore()
  }
};
var Circle = function (t, i) {
    this.ctx = t,
      this.config = i,
      this.init()
  }
;
Circle.prototype = {
  init: function () {
    this._r = this.config.r,
      this.r = 0,
      this.rotation = 0,
      this.opacity = 0,
      this.createDots()
  },
  animateIn: function () {
    var t = this;
    TweenLite.to(t, .3, {
      delay: .5,
      r: this._r,
      opacity: .7,
      rotation: -40,
      onCompleteScope: t,
      onUpdate: function () {
        t.update(.005)
      },
      onComplete: function () {
        t.explode()
      }
    })
  },
  animateOut: function (t) {
    var i = this;
    TweenLite.to(i, .5, {
      r: 0,
      opacity: .3,
      rotation: 40,
      onStart: i.stop,
      callbackScope: i,
      onUpdate: function () {
        i.update(.005)
      },
      ease: Linear.easeNone
    })
  },
  stop: function () {
    for (var t = this.dots, i = t.length, e = 0; e < i; e++) {
      var s = t[e];
      TweenLite.killTweensOf(s)
    }
  },
  explode: function () {
    var t = this;
    this.obj;
    TweenLite.to(t, 1, {
      r: t._r + 10,
      onComplete: function () {
        t.implode()
      },
      onUpdate: function () {
        t.update()
      }
    })
  },
  implode: function () {
    var t = this;
    this.obj;
    TweenLite.to(t, 1, {
      r: t._r - 10,
      onComplete: function () {
        t.explode()
      },
      onUpdate: function () {
        t.update()
      }
    })
  },
  update: function (t) {
    for (var t = isNaN(t) ? .05 : t, i = this.dots, e = this.config.origin, s = this.r, n = 0, a = i.length; n < a; n++) {
      var o = i[n]
        , r = o.rad + this.rotation * Math.PI / 180;
      TweenLite.to(o, 1, {
        delay: n * t,
        x: Math.round(e.x + s * Math.cos(r)),
        y: Math.round(e.y + s * Math.sin(r)),
        onUpdateScope: o
      })
    }
  },
  reDraw: function () {
    for (var t = this.dots, i = 0, e = t.length; i < e; i++)
      t[i].draw()
  },
  createDots: function () {
    var t, i, e, s = this.config, n = this.config.origin, a = s.count, o = this.r;
    this.dots = [];
    for (var r = 0; r < a; r++) {
      e = 2 * r * Math.PI / a + this.rotation * Math.PI / 180,
        t = Math.round(n.x + o * Math.cos(e)),
        i = Math.round(n.y + o * Math.sin(e));
      var c = new Dot(this.ctx, {
        x: t,
        y: i,
        rad: e,
        r: 1.5,
        parent: this,
        color: "rgba(252,210,48,0.5)"
      });
      this.dots.push(c)
    }
  }
};
var track = {
  count: 3,
  circles: [],
  init: function () {
    var t, i = document.documentElement.clientWidth, e = document.documentElement.clientHeight,
      s = document.querySelector("#canvas");
    s.width = i,
      s.height = e,
      this.ctx = t = s.getContext("2d"),
      this.stage = s,
      this.inited = !0;
    if (this.circles.length == 0) {
      for (var n = 1, a = this.count; n <= a; n++) {
        var o = new Circle(t, {
          origin: {
            x: i / 2,
            y: e / 2
          },
          r: 70 * n,
          count: 12 * n
        });
        this.circles.push(o)
      }
    }
    this.animateIn()
  },
  animateIn: function () {
    var t = this.circles
      , i = this;
    this.isPlaying = !0;
    for (var e = 0, s = this.circles.length; e < s; e++)
      t[e].animateIn();
    TweenLite.ticker.addEventListener("tick", this.tick = function () {
        i.update()
      }
    )
  },
  animateOut: function () {
    var t = this.circles;
    this.isPlaying = !1;
    for (var i = 0, e = this.circles.length; i < e; i++)
      t[i].animateOut()
  },
  update: function () {
    this.ctx.clearRect(0, 0, this.stage.width, this.stage.height);
    for (var t = 0, i = this.circles.length; t < i; t++)
      this.circles[t].reDraw()
  }
};

var AudioPlayer = function () {
}, AP = {
  conf: {},
  extend: function (t, i) {
    var t = t
      , i = i;
    for (var e in i)
      t[e] = i[e];
    return t
  },
  PAUSED: 0,
  PLAYING: 1,
  construct: function (t) {
    this.conf = this.extend({
      src: null,
      loop: "loop",
      type: "audio/mpeg",
      autoplay: !0,
      preload: !0
    }, t),
      this.init()
  },
  init: function () {
    var t = this.conf;
    this.audio || (this.audio = new Audio);
    for (key in t)
      this.audio[key] = t[key];
    this.audio.autoplay ? this.status = this.PLAYING : (this.status = this.PAUSED,
      this.paused())
  },
  togglePlay: function () {
    this.status === this.PLAYING ? this.paused() : this.play()
  },
  play: function () {
    this.status = this.PLAYING,
    this.audio && this.audio.pause(),
    this.audio && this.audio.play()
  },
  paused: function () {
    this.status = this.PAUSED,
    this.audio && this.audio.pause()
  },
  stop: function () {
    this.status = this.PAUSED,
      this.audio.currentTime = 0,
      this.paused()
  },
  setSrc: function (t, i) {
    this.audio && (this.stop(),
      this.audio.src = t,
    i && (this.audio.type = i))
  },
  getStatus: function () {
    return this.status
  },
  destroy: function () {
    this.audio.pause(),
      this.audio = null
  }
};
var isPlay = false;
for (var key in AP)
  AudioPlayer.prototype[key] = AP[key];
var bgm = new AudioPlayer;
bgm.construct({
  src: "images/music2.mp3",
  autoplay: !0
});
var music = {
  music: document.querySelector(".music"),
  musicOn: "music",
  musicOff: "music music_off",
  init: function () {
    var t = this;
    t.musicToggle(),
      t.music.addEventListener("touchstart", function () {
        bgm.togglePlay(),
          t.musicToggle()
      })
  },
  musicToggle: function () {
    var t = bgm.getStatus()
      , i = this;
    t ? i.music.setAttribute("class", i.musicOn) : i.music.setAttribute("class", i.musicOff)
  }
};
music.init();
document.body.addEventListener("touchstart", bodyPlay)
function bodyPlay(e) {
  e.stopPropagation()
  if (!isPlay) {
    bgm.play()
    isPlay = true;
    document.body.removeEventListener("touchstart", bodyPlay)
  } else {
    document.body.removeEventListener("touchstart", bodyPlay)
  }
}