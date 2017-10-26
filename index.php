<?php
$wxParams = curlGet("http://www.wexue.top/weixinjs.php?url=" . base64_encode('http://www.wexue.top' . $_SERVER["REQUEST_URI"]));
function curlGet($url, $method = 'get', $data = '')
{
    $ch = curl_init();
    $header = "Accept-Charset: utf-8";
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, strtoupper($method));
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $temp = curl_exec($ch);
    return $temp;
}

?>

<!DOCTYPE HTML>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <title>谋篇人才 恒昌2017海外招募</title>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="x-dns-prefetch-control" content="on">

    <!-- S 引用前端页面片 -->
    <link rel="stylesheet" href="css/gb.min.css"/>
    <link rel="stylesheet" href="css/index.css?v=311"/>

    <script>
        !function (x) {
            function w() {
                var v, u, t, tes, scale,
                    s = x.document,
                    r = s.documentElement,
                    a = r.clientWidth,
                    h = r.clientHeight,
                    ratio = 1080 / 1736;
                if (!v && !u) {
                    var n = !!x.navigator.appVersion.match(/AppleWebKit.*Mobile.*/);
                    v = x.devicePixelRatio;
                    //tes=x.devicePixelRatio;
                    v = n ? v : 1, u = 1 / v;
                }
                r.style.fontSize = a / h > ratio ? h * ratio / 320 * 20 + "px" : a / 320 * 20 + "px";
                scale = a / h > ratio ? h / 1736 : a / 1080;
                document.write('\
          <style>\
           .m{ -webkit-transform:scale(' + scale + ') translate3d(-50%,-50%,0); transform:scale(' + scale + ') translate3d(-50%,-50%,0); -webkit-transform-origin:0 0; transform-origin:0 0;}\
          </style>\
            ');
            }

            w();
        }(window);
    </script>
</head>
<!-- 注：加ontouchstart使css：active生效 -->

<body>
<div class="mod_container" id="main">
    <div id="particles-js" class="mod_container"></div>
    <!-- <athena widget:international/widget/load> -->
    <div class="load" id="load">
        <canvas id="loadCanvas"></canvas>
        <div class="load_main" id="loadMain"></div>
        <div class="load_txt" id="loadTxt">loading...</div>
        <div class="load_jdc">数字金融，普惠大众</div>
        <div class="load_circle"></div>
        <div class="load_circle2"></div>
        <!-- 	<div class="load_circle3"></div> -->
    </div>

    <div class="bg">
        <!--<ul class="bg_float">-->
        <!--<li class="float float1"></li>-->
        <!--<li class="float float2"></li>-->
        <!--<li class="float float3"></li>-->
        <!--<li class="float float4"></li>-->
        <!--<li class="float float5"></li>-->
        <!--<li class="float float6"></li>-->
        <!--</ul>-->
    </div>

    <!-- <athena widget:/international/widget/bg> -->
    <div class="campus" id="campus">
        <div class="part part1" id="p1">
            <div class="cover">
                <!--<ul class="cover_float">-->
                <!--<li class="layer" data-depth="0.40">-->
                <!--<span class="float float4"></span>-->
                <!--</li>-->
                <!--<li class="layer" data-depth="0.40">-->
                <!--<span class="float float7"></span>-->
                <!--</li>-->
                <!--<li class="layer" data-depth="0.60">-->
                <!--<span class="float float3"></span>-->
                <!--</li>-->
                <!--<li class="layer" data-depth="0.60">-->
                <!--<span class="float float6"></span>-->
                <!--</li>-->
                <!--<li class="layer" data-depth="0.60">-->
                <!--<span class="float float10"></span>-->
                <!--</li>-->
                <!--<li class="layer" data-depth="0.80">-->
                <!--<span class="float float1"></span>-->
                <!--</li>-->
                <!--<li class="layer" data-depth="0.80">-->
                <!--<span class="float float5"></span>-->
                <!--</li>-->
                <!--<li class="layer" data-depth="0.80">-->
                <!--<span class="float float8"></span>-->
                <!--</li>-->
                <!--<li class="layer" data-depth="1.00">-->
                <!--<span class="float float2"></span>-->
                <!--</li>-->
                <!--<li class="layer" data-depth="1.00">-->
                <!--<span class="float float9"></span>-->
                <!--</li>-->
                <!--</ul>-->
                <div class="cover_txt">
                    <div class="layer" data-depth="0.20">
                        <div class="cover_jd"></div>
                    </div>
                    <div class="layer" data-depth="0.10">
                        <div class="cover_txt1" id="p1Right">
                            <div class="cover_txt4 p1-left"></div>
                        </div>
                    </div>
                    <div class="layer" data-depth="0.15">
                        <div class="cover_txt2 p1-left"></div>
                    </div>
                    <div class="layer" data-depth="0.40">
                        <div class="cover_txt3 p1-left"></div>
                    </div>
                </div>
            </div>
        </div>
        <!--导航页-->
        <div class="part part2" id="p2" style="transform: scale(0.3) translateX(-80px)
        translateY(20px);">
            <div class="p2-line">
                <!--<div id="t1" class="p2-t" style="left: -0.6rem;top:3.2rem;">公司简介</div>-->
                <!--<div id="t2" class="p2-t" style="left: -0.6rem;top:6.2rem;">职位信息</div>-->
                <!--<div id="t3" class="p2-t" style="left: -0.6rem;top:9.2rem;">活动行程</div>-->
                <!--<div id="t4" class="p2-t" style="left: -0.6rem;top:12.2rem;">高管简介</div>-->
                <!--<div id="t5" class="p2-t" style="left: -0.6rem;top:15.2rem;">加入我们</div>-->
            </div>
        </div>
        <div class="part part3" id="p3">
            <div class="p-title">
                公司简介
                <img data-src="images/title_bg.png">
            </div>
            <div id="p3C" class="p3-content" style="transform: scale(0);">
                <div class="content">
                    <p class="p3-p" id="p3Cn">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;恒昌集团（HCFS）是一家发展迅猛、充满活力和多元化的互联网金融集团。我们的业务遍及财富管理、投资、有抵押和无抵押个人贷款等领域，为来自中国300多个城市的数百万客户提供服务。 作为中国最具创新力的科技金融公司之一，恒昌高度重视人才，持续引进全球最有才华的金融和科技精英。我们利用尖端技术，建立一流的系统，重新定义数字金融，为公众的福祉服务。
                    </p>
                    <p class="p3-p hidden" id="p3En">
                        &nbsp;&nbsp;HC&nbsp;Financial&nbsp;Service&nbsp;Group&nbsp;is&nbsp;a&nbsp;fast&#45
                        <br>growing,&nbsp;dynamic&nbsp;and&nbsp;diversified&nbsp;financial
                        <br>service&nbsp;provider.&nbsp;With&nbsp;businesses&nbsp;ranging
                        <br>from&nbsp;wealth&nbsp;management,&nbsp;investment,
                        <br>secured&nbsp;and&nbsp;unsecured&nbsp;personal&nbsp;loans,
                        <br>we&nbsp;are&nbsp;serving&nbsp;millions&nbsp;of&nbsp;customers
                        <br>from&nbsp;more&nbsp;than&nbsp;300&nbsp;cities&nbsp;in&nbsp;China.
                        <br>As&nbsp;one&nbsp;of&nbsp;the&nbsp;most&nbsp;innovative&nbsp;FinTech
                        <br>companies&nbsp;in&nbsp;the&nbsp;country,&nbsp;HCFS&nbsp;values&nbsp;
                        <br>its&nbsp;people&nbsp;and&nbsp;keeps&nbsp;attracting&nbsp;the&nbsp;
                        <br>most&nbsp;talented&nbsp;financial&nbsp;and&nbsp;technical&nbsp;elites
                        <br>worldwide.We&nbsp;leverage&nbsp;cutting&nbsp;edge
                        <br>technologies,&nbsp;build&nbsp;first&#45class&nbsp;systems&nbsp;and&nbsp;
                        <br>redefine&nbsp;digitalfinance&nbsp;everyday&nbsp;to&nbsp;serve&nbsp;
                        <br>public&nbsp;well-being.
                    </p>
                </div>
                <div class="english" id="p3EnglishT">English</div>
            </div>
            <img data-src="./images/p2-1.png" id="p3English" class="p2-bottom">
        </div>
        <div class="part part4" id="p4">
            <div class="p-title" id="p4title">
                招聘职位
                <img data-src="images/title_bg.png">
            </div>
            <div class="starry on" id="p4s" style="transform: scale(0)">
                <div class="starry_trails_wrap">
                    <canvas class="starry_trails" id="canvas"></canvas>
                </div>
                <div class="mainstar_wrap" id="starEnter">
                    <img data-src="images/taiy.gif" style="position: absolute;
    height: 4rem;
    left: 0.6rem;">
                    <!--<img data-src="images/2-2.png" class="p4s-y" style="position: absolute;height: 6rem">-->
                </div>
                <div class="starry_stars">
                    <!-- <li class="layer" data-depth="1.00"> -->
                    <a href="javascript:;" data-id="1" class="star star1" id="star1">
                        <span class="star_flash"></span>
                    </a>
                    <!-- </li> -->
                    <!-- <li class="layer" data-depth="0.60"> -->
                    <a href="javascript:;" data-id="2" class="star star5" id="star5">
                        <span class="star_flash"></span></a>
                    <!-- </li> -->
                    <!-- <li class="layer" data-depth="0.80"> -->
                    <a href="javascript:;" data-id="3" class="star star3" id="star3">
                        <span class="star_flash"></span></a>
                    <!-- </li> -->
                    <!-- <li class="layer" data-depth="0.40"> -->
                    <a href="javascript:;" data-id="4" class="star star6" id="star6">
                        <span class="star_flash"></span></a>
                    <!-- </li> -->
                    <!-- <li class="layer" data-depth="0.60"> -->
                    <a href="javascript:;" data-id="5" class="star star4" id="star4">
                        <span class="star_flash"></span></a>
                    <!-- </li> -->
                    <!-- <li class="layer" data-depth="1.00"> -->
                    <a href="javascript:;" data-id="6" class="star star2" id="star2">
                        <span class="star_flash"></span>
                    </a>

                    <a href="javascript:;" data-id="7" class="star star7" id="star7">
                        <span class="star_flash"></span>
                    </a>
                    <a href="javascript:;" data-id="8" class="star star8" id="star8">
                        <span class="star_flash"></span>
                    </a>
                    <a href="javascript:;" data-id="9" class="star star9" id="star9">
                        <span class="star_flash"></span>
                    </a>
                    <a href="javascript:;" data-id="10" class="star star10" id="star10">
                        <span class="star_flash"></span>
                    </a>
                    <!-- </li> --
                     <!--<div class="star1" id="jishu">-->
                    <!--技术-->
                    <!--<div id="jsMask" class="p4-mask"></div>-->
                    <!--<img data-src="images/5-0.png" class="p4-s" style="-->
                    <!--position: absolute;-->
                    <!--top: -0.7rem;-->
                    <!--left: -0.7rem;-->
                    <!--height: 3.7rem;">-->
                    <!--<img data-src="images/guide.png" class="p4-h" style="position: absolute;-->
                    <!--top: 1rem;-->
                    <!--left: 0.5rem;-->
                    <!--height: 2.4rem;">-->
                    <!--</div>-->
                    <!--<div class="star2" id="fengkong">-->
                    <!--风控-->
                    <!--<div id="fkMask" class="p4-mask"></div>-->
                    <!--<img data-src="images/5-0.png" class="p4-s" style="position: absolute;-->
                    <!--top: -0.6rem;-->
                    <!--left: -0.6rem;-->
                    <!--height: 3.4rem;">-->
                    <!--</div>-->
                    <!--<div class="star3" id="jijin">-->
                    <!--基金-->
                    <!--<div id="jjMask" class="p4-mask"></div>-->
                    <!--<img data-src="images/5-0.png" class="p4-s"-->
                    <!--style="position: absolute;top: -0.8rem;left: -0.7rem;height: 4rem;">-->
                    <!--</div>>
                   -->
                </div>

            </div>
            <div class="p4-detail hidden" id="p4d" height="25rem" ;width="16rem" style="transform: scale(0)">
                <div class="p4-detail" id="p4dd">
                </div>
                <div class="p4d-close" id="p4dClose">
                </div>
            </div>
            <div class="p4-bottom" id="p4b">
                <span id="zonghe" style="color:#fff511;">综合</span>
                <span class="p4b-i">·	</span>
                <span id="fengkong" style="color:#ce8f2d;">风控</span>
                <span class="p4b-i">·	</span>
                <span id="jijin" style="color:#bbbabd;">基金</span>
                <span class="p4b-i">·	</span>
                <span id="jishu" style="color:#fcd230;">技术</span>
            </div>
            <img id="p4Guide" data-src="images/guide.png" class="guide" style="
                        position: absolute;
                        z-index: 1;
                        top: 11rem;
                        left: 9rem;
                        width: 2rem;
                        transform: scale(0) rotate(-30deg);">
        </div>
        <div class="part part5" id="p5">
            <div class="p-title">
                高管介绍
                <img data-src="images/title_bg.png">
            </div>
            <div class="p5-list" id="p5list">
                <div class="p5l" style="float: none;margin: auto;padding-top: 1px">
                    <div style="background:url(images/head/1.jpg) no-repeat;background-size:100%;" data-n=0
                         class="p5lm">
                    </div>
                    <div class="p5ll">秦洪涛 <span style="font-size: 0.2rem">创始人兼CEO</span></div>
                </div>
                <div class="p5l">
                    <div style="background:url(images/head/2.jpg) no-repeat;background-size:100%;" data-n=1
                         class="p5lm">
                    </div>
                    <div class="p5ll">黄立达 <span style="font-size: 0.2rem">首席顾问</span></div>
                </div>
                <div class="p5l">
                    <div style="background:url(images/head/3.jpg) no-repeat;background-size:100%;" data-n=2
                         class="p5lm">
                    </div>
                    <div class="p5ll">刘冰 <span style="font-size: 0.2rem">联席总裁</span></div>
                </div>
                <div class="p5l">
                    <div style="background:url(images/head/4.jpg) no-repeat;background-size:100%;" data-n=3
                         class="p5lm">
                    </div>
                    <div class="p5ll">翟南宾 <span style="font-size: 0.2rem">首席战略官</span></div>
                </div>
                <div class="p5l">
                    <div style="background:url(images/head/5.jpg) no-repeat;background-size:100%;" data-n=4
                         class="p5lm">
                    </div>
                    <div class="p5ll">陈以平 <span style="font-size: 0.2rem">首席风控官</span></div>
                </div>
                <div class="p5l">
                    <div style="background:url(images/head/6.jpg) no-repeat;background-size:100%;" data-n=5
                         class="p5lm">
                    </div>
                    <div class="p5ll">沈潇同 <span style="font-size: 0.2rem">首席财务官</span></div>
                </div>
                <div class="p5l">
                    <div style="background:url(images/head/7.jpg) no-repeat;background-size:100%;" data-n=6
                         class="p5lm">
                    </div>
                    <div class="p5ll">薛正华 <span style="font-size: 0.2rem">首席技术官</span></div>
                </div>
                <div class="p5l">
                    <div style="background:url(images/head/8.jpg) no-repeat;background-size:100%;" data-n=7
                         class="p5lm">
                    </div>
                    <div class="p5ll">赵辉 <span style="font-size: 0.2rem">首席投资官</span></div>
                </div>
                <div class="p5l">
                    <div style="background:url(images/head/9.jpg) no-repeat;background-size:100%;" data-n=8
                         class="p5lm">
                    </div>
                    <div class="p5ll">沙平卫 <span style="font-size: 0.2rem;transform: scale(0.7)">首席人力资源官</span></div>
                </div>
                <div class="p5l">
                    <div style="background:url(images/head/10.jpg) no-repeat;background-size:100%;" data-n=9
                         class="p5lm">
                    </div>
                    <div class="p5ll">潘磊 <span style="font-size: 0.2rem">恒昌副总裁</span></div>
                </div>
            </div>
            <img id="p5Guide" data-src="images/guide.png" class="guide" style="
                        position: absolute;
                        z-index: 1;
                        top: 5rem;
                        left: 9rem;
                        width: 2rem;
                        transform: rotate(-30deg) scale(0);">
            <div class="p5-content hidden" id="p5content" style="transform: scale(0)">
                <div id="p5c" style="height: 25rem;width: 16rem;">
                </div>
                <div class="p4d-close" id="p5dClose">
                </div>
            </div>
        </div>
        <div class="part part6" id="p6">
            <div class="p-title">
                活动行程
                <img data-src="images/title_bg.png">
            </div>
            <div class="p6-content" id="p6c">
                <img data-src="./images/xingcheng-4.png?v=2" id="xingcheng" class="p6c-xc">
                <img data-src="./images/fly.png" class="fly fly-1">
            </div>
        </div>
        <div class="part part7" id="p7">
            <div class="address">
                <div class="address_info">
                    <div class="address_btns">
                        <img data-src="./images/code.png" style="height: 8.5rem;transform: scale(0);margin-top: 0.5rem;"
                             id="code">
                        <img data-src="./images/code_bg.png" style="opacity: 0" class="code-bg">
                        <img data-src="./images/lx_bg.png" class="lx-bg">
                        <div id="baoming" class="p7-btn" style="opacity: 0" id="baoming"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="music"></div>
<div class="logo-all"></div>
<div class="next" id="next"></div>
</div>
<!--<script src="js/parallax.min.js"></script>-->
<script src="js/tweenlite.min.js"></script>
<script src="js/san.min.js"></script>
<script src="js/anime.min.js"></script>
<script src="js/islider.js"></script>
<script src="js/index.js"></script>
<script src="js/config.js?v=123"></script>
<script src="js/main.js?v=232d2"></script>

<script type="text/javascript">
    window.loadingAn = true;
    var loadCanvas = document.getElementById("loadCanvas");
    loadCanvas.width = document.documentElement.clientWidth;
    loadCanvas.height = document.documentElement.clientHeight;
    var particles = new Particles({
        canvasId: 'loadCanvas',
        imgUrl: './images/logo.png',
        cols: 50,
        rows: 50,
        startX: 0,
        startY: 0,
        imgX: 0,
        imgY: 200,
        delay: 0,
        duration: 500,
        interval: 2,
        fillStyle: '#fcd230',
        particleOffset: 2,
        ease: 'easeInOutBack'
    });
    particles.animate();
    // 加载
    function preloadImg(config) {
        var source = config.source;
        len = source.length,
            count = 0,
            prefix = config.prefix || '',
            onComplete = config.onComplete;
        for (var i = 0; i < len; i++) {
            var img = new Image();
            img.src = prefix + source[i];
            img.onerror = img.onload = function () {
                count++;
                if (count == len) {
                    onComplete();
                }
            }
        }
    }

    function onComplete() {

        var imgs = document.getElementsByTagName("img")
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src = imgs[i].dataset.src
        }
//    var p5lms = document.getElementsByClassName("p5lm")
//    for (var i = 0; i < p5lms.length; i++) {
//      p5lms[i].style = p5lms[i].dataset.style
//    }
        var ser = setInterval(function () {
            if (!window.loadingAn) {
                clearInterval(ser);
                document.querySelector(".load").classList.add('finish');
                document.querySelector(".load_circle").addEventListener('webkitAnimationEnd', function () {
                    document.getElementById("main").removeChild(document.getElementById("load"))
                    p1.show()
                })
            }
        }, 400)
    }
</script>
<script src="js/particles.min.js"></script>
<script type="text/javascript" src="js/jweixin-1.0.0.js"></script>
<script>
    preloadImg({
        source: [
            'cover_line.png',
            'hai.png',
            'hengchang.png'
        ],
        prefix: 'images/',
        onComplete: onComplete
    });
    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.1,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#996d27",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }
    );
    var _mtac = {};
    (function () {
        var mta = document.createElement("script");
        mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
        mta.setAttribute("name", "MTAH5");
        mta.setAttribute("sid", "500539127");
        mta.setAttribute("cid", "500539134");
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(mta, s);
        wx.config(
            <?php echo $wxParams;?>
        );
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: '谋篇人才 恒昌2017海外招募', // 分享标题
                link: 'http://www.wexue.top/games/hc/index.php', // 分享链接
                imgUrl: 'http://www.wexue.top/games/hc/images/logo_all-1.png', // 分享图标
                success: function () {
                    MtaH5.clickStat('shareCircle');
                },
                cancel: function () {
                }
            });
            wx.onMenuShareAppMessage({
                title: '谋篇人才 恒昌2017海外招募', // 分享标题
                desc: '新时代 新舞台，恒昌与你相约，数字金融，普惠大众！', // 分享描述
                link: 'http://www.wexue.top/games/hc/index.php', // 分享链接
                imgUrl: 'http://www.wexue.top/games/hc/images/logo_all-1.png', // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    MtaH5.clickStat('shareFriend');
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        });
    })();
</script>

</body>

</html>