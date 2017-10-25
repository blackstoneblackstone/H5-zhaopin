/**
 * Created by lihongbin on 2017/10/20.
 */
var startY, p1, p2, p3, p4, p5, p6, p7, $p1 = document.getElementById("p1"), isMoveTouch = false, isEnglish = false,
    $p2 = document.getElementById("p2"), $p3 = document.getElementById("p3"),
    $p4 = document.getElementById("p4"), $p5 = document.getElementById("p5"),
    $p6 = document.getElementById("p6"), $p7 = document.getElementById("p7");

function stopEvent(e) {
    e.stopPropagation()
}
function touchStart(e) {
    e.stopPropagation();
    e.preventDefault()
    startY = e.touches[0].pageY
}

function clickP1(e) {
    p1.next()
}

function p3TouchEnd(e) {
    e.stopPropagation();
    e.preventDefault()
    var endY = e.changedTouches[0].pageY - startY
    if (endY < -10) {
        p3.next()
        isMoveTouch = true
    }
    if (endY > 10) {
        p3.pre()
        isMoveTouch = true
    }
}
function p4TouchEnd(e) {
    e.stopPropagation();
    e.preventDefault()
    var endY = e.changedTouches[0].pageY - startY
    if (endY < -10) {
        p4.next()
        isMoveTouch = true
    }
    if (endY > 10) {
        p4.pre()
        isMoveTouch = true
    }
}
function p5TouchEnd(e) {
    e.stopPropagation();
    e.preventDefault()

    var endY = e.changedTouches[0].pageY - startY
    if (endY < -10) {
        p5.next()
        isMoveTouch = true
    }
    if (endY > 10) {
        p5.pre()
        isMoveTouch = true
    }
}
function p6TouchEnd(e) {
    e.stopPropagation();
    e.preventDefault()

    var endY = e.changedTouches[0].pageY - startY
    if (endY < -10) {
        p6.next()
        isMoveTouch = true
    }
    if (endY > 10) {
        p6.pre()
        isMoveTouch = true
    }
}
function p7TouchEnd(e) {
    e.stopPropagation();
    e.preventDefault()

    var endY = e.changedTouches[0].pageY - startY
    if (endY > 10) {
        p7.pre()
        isMoveTouch = true
    }
}
function clickEnglish(e) {
    e.stopPropagation()
    setTimeout(function () {
        console.log(isMoveTouch)
        console.log(isEnglish)
        if (!isMoveTouch) {
            if (isEnglish) {
                document.getElementById("p3Cn").classList.remove("hidden")
                document.getElementById("p3En").classList.add("hidden")
                document.getElementById("p3EnglishT").innerText = "English"
                isEnglish = false
            } else {
                document.getElementById("p3EnglishT").innerText = "中文"
                document.getElementById("p3Cn").classList.add("hidden")
                document.getElementById("p3En").classList.remove("hidden")
                isEnglish = true
            }
        }
    }, 200)
}
function p1Touch() {
    document.getElementById("p1").addEventListener("touchstart", clickP1);
}
function p3Touch() {
    document.getElementById("p3En").addEventListener("touchstart", stopEvent);
    document.getElementById("p3En").addEventListener("touchend", stopEvent);
    document.getElementById("p3").addEventListener("touchstart", touchStart);
    document.getElementById("p3").addEventListener("touchend", p3TouchEnd);
    document.getElementById("p3EnglishT").removeEventListener("touchend", clickEnglish);
    document.getElementById("p3EnglishT").addEventListener("touchend", clickEnglish);
}
function p4Touch() {
    document.getElementById("p4s").removeEventListener("touchstart", touchStart);
    document.getElementById("p4s").removeEventListener("touchend", p4TouchEnd);
    document.getElementById("p4s").addEventListener("touchstart", touchStart);
    document.getElementById("p4s").addEventListener("touchend", p4TouchEnd);
}
function p5Touch() {
    var p5dc = document.getElementsByClassName("p5d-cn")
    for (var i = 0; i < p5dc.length; i++) {
        p5dc[i].removeEventListener("touchstart", stopEvent);
    }
    for (var i = 0; i < p5dc.length; i++) {
        p5dc[i].removeEventListener("touchend", stopEvent);
    }
    for (var i = 0; i < p5dc.length; i++) {
        p5dc[i].addEventListener("touchstart", stopEvent);
    }
    for (var i = 0; i < p5dc.length; i++) {
        p5dc[i].addEventListener("touchend", stopEvent);
    }
    var p5dc5 = document.getElementsByClassName("p5lm")
    for (var i = 0; i < p5dc5.length; i++) {
        p5dc5[i].addEventListener("touchend", function (e) {
            setTimeout(function () {
                if (!isMoveTouch) {
                    p5.showDetail(e)
                }
            }, 200)
        });
    }
    document.getElementById("p5dClose").addEventListener("touchstart", function (e) {

        e.stopPropagation()
        p5.hideDetail()
    });
    document.getElementById("p5list").removeEventListener("touchstart", touchStart);
    document.getElementById("p5list").removeEventListener("touchend", p5TouchEnd);
    document.getElementById("p5list").addEventListener("touchstart", touchStart);
    document.getElementById("p5list").addEventListener("touchend", p5TouchEnd);
}
function p6Touch() {
    document.getElementById("p6").removeEventListener("touchstart", touchStart);
    document.getElementById("p6").removeEventListener("touchend", p6TouchEnd);
    document.getElementById("p6").addEventListener("touchstart", touchStart);
    document.getElementById("p6").addEventListener("touchend", p6TouchEnd);
}
function p7Touch() {
    document.getElementById("baoming").addEventListener("touchstart", function (e) {
        e.stopPropagation()
        window.location.href = "https://www.linkedin.com/company/6666770/"
    });
    document.getElementById("p7").removeEventListener("touchstart", touchStart);
    document.getElementById("p7").removeEventListener("touchend", p7TouchEnd);
    document.getElementById("p7").addEventListener("touchstart", touchStart);
    document.getElementById("p7").addEventListener("touchend", p7TouchEnd);
}


var P1 = function () {
}, P2 = function () {
}, P3 = function () {
}, P4 = function () {
}, P5 = function () {
}, P6 = function () {
}, P7 = function () {
}
P1.prototype = {
    $el: $p1,
    pre: function () {
        document.querySelector(".part1").classList.add('in');
    },
    next: function () {
        anime({
                targets: '#p1',
                scale: 0,
                translateY: -500,
                duration: 500,
                easing: 'easeInOutQuad',
                complete: function (a) {
                    $p1.style.transform = "scale(1)"
                    $p1.classList.remove('in');
                    p3.show()
                }
            }
        );
    },
    show: function () {
        $p1.classList.add('in');
        p1Touch()
    },
}

P3.prototype = {
    $el: $p3,
    show: function () {
        isMoveTouch = false
        $p3.classList.add("in")
        p3Touch()
        anime({
                targets: '#p3C',
                scale: 1,
                duration: 300,
                easing: 'linear'
            }
        );
    },
    pre: function () {
        this.hide(function () {
            p1.show()
        })
    },
    hide: function (fun) {
        anime({
            targets: '#p3C',
            scale: 0,
            duration: 300,
            easing: 'easeInSine',
            complete: function () {
                $p3.classList.remove("in")
                fun()
            }
        });
    },
    next: function () {
        this.hide(function () {
            p4.show()
        })
    }
}

P4.prototype = {
    $el: $p4,
    $mel: document.getElementById("p4d"),
    show: function () {
        isMoveTouch = false
        document.getElementById("p4title").classList.add("hidden")
        $p4.classList.add("in")
        track.init()
        anime({
                targets: '#p4s',
                scale: 1,
                rotate: "360deg",
                duration: 500,
                easing: 'easeInSine',
                complete: this.clickInit.bind(this)
            }
        );
    },
    clickInit: function () {
        p4Touch()
        anime({
            targets: '#p4Guide',
            scale: 1,
            rotate: "-30deg",
            duration: 500,
            delay: 200,
            easing: 'linear',
            complete: function () {
                document.getElementById("p4Guide").style.animation = "guideAn 1s infinite"
            }
        })
        document.getElementById("starEnter").addEventListener("touchend", this.clickDetail.bind(this, 0))
        document.getElementById("star1").addEventListener("touchend", this.clickDetail.bind(this, 4))
        document.getElementById("star2").addEventListener("touchend", this.clickDetail.bind(this, 5))
        document.getElementById("star3").addEventListener("touchend", this.clickDetail.bind(this, 3))
        document.getElementById("star4").addEventListener("touchend", this.clickDetail.bind(this, 2))
        document.getElementById("star5").addEventListener("touchend", this.clickDetail.bind(this, 0))
        document.getElementById("star6").addEventListener("touchend", this.clickDetail.bind(this, 6))
        document.getElementById("star7").addEventListener("touchend", this.clickDetail.bind(this, 9))
        document.getElementById("star8").addEventListener("touchend", this.clickDetail.bind(this, 8))
        document.getElementById("star9").addEventListener("touchend", this.clickDetail.bind(this, 7))
        document.getElementById("star10").addEventListener("touchend", this.clickDetail.bind(this, 1))

        document.getElementById("zonghe").addEventListener("touchend", this.clickDetail.bind(this, 11))
        document.getElementById("jijin").addEventListener("touchend", this.clickDetail.bind(this, 12))
        document.getElementById("fengkong").addEventListener("touchend", this.clickDetail.bind(this, 13))
        document.getElementById("jishu").addEventListener("touchend", this.clickDetail.bind(this, 14))
    },
    clickDetail: function (type, e) {
        document.getElementById("p4Guide").style.animation = "none"
        anime({
            targets: '#p4Guide',
            opacity: 0,
            duration: 500,
            easing: 'linear',
        })
        e.stopPropagation()
        setTimeout(function () {
            if (!isMoveTouch) {
                p4.showDetail(type)
            }
        }, 200)
    },
    showDetail: function (type) {
        anime({
            targets: '#p4b',
            opacity: 0,
            scale: 0,
            duration: 500,
            easing: 'easeInSine'
        });
        this.hide(function () {
            anime({
                targets: '#p4d',
                scale: 1,
                duration: 500,
                easing: 'easeInSine'
            });
            document.getElementById("p4title").classList.remove("hidden")
            document.getElementById("p4s").classList.add("hidden")
            document.getElementById("p4d").classList.remove("hidden")
            // $p2.classList.remove("in")
            document.getElementById("next").classList.add("hidden")
            document.getElementById("p4dd").innerHTML = ""
            if (type == 11) {
                new iSlider({
                    data: zongheData,
                    dom: document.getElementById("p4dd"),
                    type: 'dom',
                    animateType: 'depth',
                    sliderIndex: 0
                });
            }
            if (type == 12) {
                new iSlider({
                    data: touziData,
                    dom: document.getElementById("p4dd"),
                    type: 'dom',
                    animateType: 'depth',
                    sliderIndex: 0
                });
            }
            if (type == 13) {
                new iSlider({
                    data: fengkongData,
                    dom: document.getElementById("p4dd"),
                    type: 'dom',
                    animateType: 'depth',
                    sliderIndex: 0
                });
            }
            if (type == 14) {
                new iSlider({
                    data: jishuData,
                    dom: document.getElementById("p4dd"),
                    type: 'dom',
                    animateType: 'depth',
                    sliderIndex: 0
                });
            }
            if (type < 11) {
                new iSlider({
                    data: domList,
                    dom: document.getElementById("p4dd"),
                    type: 'dom',
                    animateType: 'depth',
                    sliderIndex: type
                });
            }
            document.getElementById("p4dClose").addEventListener("touchstart", function () {
                document.getElementById("p4s").classList.remove("hidden")
                document.getElementById("p4title").classList.add("hidden")
                // $p2.classList.add("in")
                document.getElementById("next").classList.remove("hidden")
                track.animateIn()
                anime({
                    targets: '#p4Guide',
                    scale: 1,
                    rotate: "-30deg",
                    duration: 500,
                    opacity:1,
                    delay: 200,
                    easing: 'linear',
                    complete: function () {
                        document.getElementById("p4Guide").style.animation = "guideAn 1s infinite"
                    }
                })
                anime({
                        targets: '#p4d',
                        scale: 0,
                        duration: 500,
                        easing: 'easeInSine',
                        complete: function () {
                            document.getElementById("p4d").classList.add("hidden")
                        }
                    }
                )
                anime({
                    targets: '#p4b',
                    opacity: 1,
                    scale: 1,
                    duration: 500,
                    easing: 'easeInSine'
                });
                anime({
                        targets: '#p4s',
                        scale: 1,
                        rotate: "360deg",
                        duration: 500,
                        delay: 300,
                        easing: 'easeInSine'
                    }
                );
            })
        })
    },
    right: function () {
        anime({
            targets: '#p4d',
            duration: 1000,
            translateX: 400,
            delay: 300,
            easing: 'easeInSine'
        });
    }
    ,
    left: function () {
        anime({
            targets: '#p4d',
            duration: 1000,
            translateX: -400,
            delay: 300,
            easing: 'easeInSine'
        });
    },
    pre: function () {
        this.hide(function () {
            $p4.classList.remove("in")
            p3.show()
        })
    },
    next: function () {
        this.hide(function () {
            $p4.classList.remove("in")
            p6.show()
        })
    },
    hide: function (fun) {
        track.animateOut()
        anime({
                targets: '#p4s',
                scale: 0,
                rotate: "0deg",
                duration: 500,
                easing: 'easeInSine',
                complete: fun
            }
        );
    }
}
var i = 0
P5.prototype = {
    $el: $p5,
    next: function () {
        this.hide(function () {
            $p5.classList.remove("in")
            p7.show()
        })
    },
    pre: function () {
        this.hide(function () {
            $p5.classList.remove("in")
            p6.show()
        })
    },
    hideDetail: function () {
        anime({
            targets: '#p5Guide',
            scale: 1,
            opacity:1,
            rotate: "-30deg",
            duration: 500,
            easing: 'linear',
            complete: function () {
                document.getElementById("p5Guide").style.animation = "guideAn 1s infinite"
            }
        })
        anime({
            targets: '#p5content',
            scale: 0,
            duration: 500,
            easing: 'linear',
            complete: function () {
                document.getElementById("p5content").classList.add("hidden")
                document.getElementById("p5list").classList.remove("hidden")
            }
        });
        anime({
            targets: '#p5list',
            scale: 1,
            duration: 500,
            delay: 200,
            easing: 'linear',
            complete: function () {
                document.getElementById("next").classList.remove("hidden")
                // document.getElementById("p2").classList.add("in")
            }
        });
    },
    showDetail: function (e) {
        document.getElementById("p5Guide").style.animation = "none"
        anime({
            targets: '#p5Guide',
            opacity: 0,
            duration: 200,
            easing: 'linear',
        })
        var n = e.target.dataset.n
        anime({
            targets: '#p5list',
            scale: 0,
            duration: 300,
            easing: 'linear',
            complete: function () {
                document.getElementById("next").classList.add("hidden")
                document.getElementById("p2").classList.remove("in")
                document.getElementById("p5list").classList.add("hidden")
                document.getElementById("p5content").classList.remove("hidden")
                document.getElementById("p5c").innerHTML = ""
                new iSlider({
                    data: gaoguanList,
                    dom: document.getElementById("p5c"),
                    type: 'dom',
                    animateType: 'depth',
                    sliderIndex: parseInt(n)
                });
            }
        });
        anime({
            targets: '#p5content',
            scale: 1,
            duration: 500,
            delay: 200,
            easing: 'linear',
        });
    },
    hide: function (fun) {
        anime({
            targets: '#p5',
            scale: 0,
            duration: 500,
            easing: 'linear',
            complete: fun
        });
    },
    show: function () {
        isMoveTouch = false
        anime({
            targets: '#p5',
            scale: 1,
            duration: 500,
            easing: 'linear',
            complete: p5Touch
        });
        $p5.classList.add("in")
        anime({
            targets: '.p5l',
            rotateY: '360deg',
            opacity: 1,
            delay: function (el, i, l) {
                return 100 + (i * 100);
            },
            duration: 500,
            easing: 'linear',
            complete: function () {
                anime({
                    targets: '#p5Guide',
                    scale: 1,
                    rotate: "-30deg",
                    duration: 500,
                    easing: 'linear',
                    complete: function () {
                        document.getElementById("p5Guide").style.animation = "guideAn 1s infinite"
                    }
                })
                anime({
                    targets: '.p5l',
                    rotateY: 0,
                    opacity: 1,
                    duration: 0,
                    easing: 'linear',
                })
            }
        });
    }
}

P6.prototype = {
    $el: $p6,
    next: function () {
        this.hide(function () {
            $p6.classList.remove("in")
            p5.show()
        })
    },
    pre: function () {
        this.hide(function () {
            $p6.classList.remove("in")
            p4.show()
        })
    },
    hide: function (fun) {
        anime({
                targets: '#xingcheng',
                scale: 0,
                rotateY: "0deg",
                duration: 500,
                easing: 'easeInSine',
                complete: fun
            }
        );
        anime({
                targets: '.fly',
                scale: 0,
                rotate: "0deg",
                duration: 500,
                easing: 'easeInSine'
            }
        );
    },
    show: function () {
        isMoveTouch = false
        $p6.classList.add("in")
        anime({
                targets: '#xingcheng',
                scale: 1,
                rotateY: "360deg",
                duration: 500,
                easing: 'easeInSine',
                complete: p6Touch
            }
        );
        anime({
                targets: '.fly',
                scale: 1,
                rotate: "360deg",
                duration: 500,
                easing: 'easeInSine',
            }
        );
    }
}
P7.prototype = {
    $el: $p7,
    show: function () {
        isMoveTouch = false
        anime({
            targets: '#code',
            scale: 1,
            duration: 500,
            easing: 'easeInSine',
        });
        anime({
            targets: '.code-bg',
            opacity: 1,
            duration: 500,
            easing: 'easeInSine',
        });
        anime({
            targets: '#baoming',
            opacity: 1,
            duration: 500,
            easing: 'easeInSine',
        });
        document.getElementById("next").classList.add("hidden")
        $p7.classList.add("in")
        p7Touch()
    },
    pre: function () {
        anime({
            targets: '#code',
            scale: 0,
            duration: 500,
            easing: 'easeInSine',
        });
        anime({
            targets: '.code-bg',
            opacity: 0,
            duration: 500,
            easing: 'easeInSine',
        });
        anime({
            targets: '#baoming',
            opacity: 0,
            duration: 500,
            easing: 'easeInSine',
            complete: function () {
                document.getElementById("next").classList.remove("hidden")
                $p7.classList.remove("in")
                p5.show()
            }
        });
    },
    next: function () {

    }
}
p1 = new P1()
p2 = new P2()
p3 = new P3()
p4 = new P4()
p5 = new P5()
p6 = new P6()
p7 = new P7()
