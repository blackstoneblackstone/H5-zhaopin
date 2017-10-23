/**
 * Created by lihongbin on 2017/10/20.
 */
var startY, currentSlid = 0, p1, p2, p3, p4, p5, p6, p7, $p1 = document.getElementById("p1"), isP5Touch = false,
  isP4Touch = false,
  $p2 = document.getElementById("p2"), $p3 = document.getElementById("p3"),
  $p4 = document.getElementById("p4"), $p5 = document.getElementById("p5"),
  $p6 = document.getElementById("p6"), $p7 = document.getElementById("p7"),
  gaoguanList = [{
    content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/1.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      秦洪涛\
      </div>\
      <div class="p5d-desc">\
      恒昌公司创始人\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
      <p> ·	北大光华管理学院金融首期班EMBA</p>\
       <p> ·	清华大学五道口金融管理学院EMBA</p>\
       <p> ·	清华大学苏世民书院荣誉院董</p>\
       <p> ·	中国中小企业协会副会长</p>\
       <p> ·	亚杰商会会员</p>\
      <p>  ·	新金融家联盟副理事长</p>\
      <p>  ·	2014年  “履行社会责任十大杰出企业家”</p>\
      <p>·	2000年  涉足新闻传媒行业</p>\
    <p>·	2003年  涉足互联网行业</p>\
    <p>·	2004年  加入清华园企业家商会</p>\
    <p>·	2006年  参加《赢在中国》，并创办中国拼客网</p>\
    <p>·	2011年  创立恒昌公司</p>\
    </div>\
    </div>'
  }, {
    content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/2.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      黄立达\
      </div>\
      <div class="p5d-desc">\
      股东、首席顾问\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
    <p> ·	26年德勤会计师事务所工作经验，德勤合伙人，德勤华北区审计主管合伙人 </p>\
    <p> ·	曾担任格林豪泰连锁酒店首席财务官</p>\
    <p> ·	大全新能源（纽交所：DQ）独立董事</p>\
    <p> ·	华视传媒（纳斯达克：VISN）独立董事</p>\
    <p> ·	中国汽车系统（纳斯达克：CAAS）独立董事</p>\
    <p> ·	天华阳光（纳斯达克：SKYS）独立董事</p>\
    <p> ·	学大教育集团（纽交所：XUE）独立董事</p>\
    <p> ·	中国枫叶教育集团（港交所：1317）独立董事</p>\
    <p> ·	旧金山大学应用经济学士</p>\
    <p> ·	美国注册会计师协会会员</p>\
    <p> ·	香港会计师公会资深会员</p>\
    <p> ·	特许公认会计师公会资深会员</p>\
    </div>\
    </div>'
  }, {
    content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/3.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      刘冰\
      </div>\
      <div class="p5d-desc">\
      联席总裁\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
      <p> ·	清华大学工商管理硕士</p>\
         <p> ·	24年相继服务于AT&T、华为技术、甲骨文（中国）、尼尔森、澳大利亚电信（中国）和阿里巴巴集团，先后出任销售经理、办事处副主任、总监、总经理、副总裁、首席代表和阿里巴巴副总裁等职务。</p>\
 <p> ·	分别为所在公司的营销、业务发展、政府关系、公共关系、战略合作、投资和投后管理等领域作出重要贡献，尤其是在为阿里巴巴工作期间，刘冰先生积极推动云计算、大数据同中央及地方政府、中央企业的合作，推进云计算和大数据成为信息经济的基础设施以及“双创”时代的到来，强化同中央政府在云计算和大数据的政策合作，为推动DT（数据处理技术）时代的到来做出了重要贡献。</p>\
    </div>\
    </div>'
  }, {
    content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/4.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      翟南宾博士\
      </div>\
      <div class="p5d-desc">\
      首席战略官（CSO）\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
      <p> ·	清华大学工商管理硕士</p>\
      <p> ·	24年相继服务于AT&T、华为技术、甲骨文（中国）、尼尔森、澳大利亚电信（中国）和阿里巴巴集团，先后出任销售经理、办事处副主任、总监、总经理、副总裁、首席代表和阿里巴巴副总裁等职务。</p>\
      <p> ·	分别为所在公司的营销、业务发展、政府关系、公共关系、战略合作、投资和投后管理等领域作出重要贡献，尤其是在为阿里巴巴工作期间，刘冰先生积极推动云计算、大数据同中央及地方政府、中央企业的合作，推进云计算和大数据成为信息经济的基础设施以及“双创”时代的到来，强化同中央政府在云计算和大数据的政策合作，为推动DT（数据处理技术）时代的到来做出了重要贡献。</p>\
    </div>\
    </div>'
  }, {
    content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/5.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      陈以平\
      </div>\
      <div class="p5d-desc">\
      恒昌首席风控官（CRO）\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
    <p> ·	现任首席风控官，全面负责恒昌旗下各业务条线的风险管理事务。</p>\
    <p> ·	美国乔治华盛顿大学运筹学&计算机学博士。</p>\
    <p> ·	曾先后担任过普天信金融集团、M4金融集团、NestCard.inc、富国银行、摩根大通银行、Ebay/PayPal、前海微众银行的高管职务。</p>\
    <p> ·	创办C&W咨询公司并担任总裁，为银行、支付公司、互联网贷款公司提供数据分析、大数据应用以及各类风险管理服务；</p>\
    <p> · 美国风控领域顶级专家，拥有二十多年数据分析和风险管理经验，具有金融业宏观风险管理、运作风险管理、信贷风险管理、风险预测、银行诈骗及网络诈骗防御方面的丰富经验，尤其擅长电子商务、P2P及线上支付行业的风险管理。</p>\
    </div>\
    </div>'
  }, {
    content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/6.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      沈潇同\
      </div>\
      <div class="p5d-desc">\
      首席财务官（CFO）\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
       <p> ·	毕业于中国清华大学电子工程专业，其后获得美国哥伦比亚大学商学院金融财务专业硕士学位。</p>\
         <p> ·	先后担任多家国内外企业的首席财务官，并曾兼任其他中国在美上市公司独立董事及审计委员会主席，涉猎互联网、跨境电商、传媒、旅游、电子等多个领域。</p>\
<p> ·曾经主持敦煌网、波士顿电池、酷6传媒、比克电池等多家知名企业的赴美IPO、私募融资、财务并购重组等项目，具有多年的上市公司财务及管理经验。</p>\
    </div>\
    </div>'
  },
    {
      content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/7.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      薛正华\
      </div>\
      <div class="p5d-desc">\
      首席技术官（CTO）\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
       <p> ·	西安交通大学计算机系博士学位，国内知名云计算、大数据专家</p>\
         <p> ·	中国计算机学会高级会员，大数据专业委员会委员。</p>\
 <p> ·	曾就职百度，先后负责百度大数据业务、百度技术体系发展规划，对百度技术有全面、深入的认识。</p>\
 <p> ·	曾就职用友集团，负责公有云、大数据业务，为中国上万企业提供了稳定、高效的企业互联网服务，作为主要领导者，该业务板块在香港主板成功上市。</p>\
 <p> ·	曾任中科院副研究员，领导研发的大规模集群操作系统、大数据并行处理系统，处于领先水平。</p>\
 <p> ·	长期专注互联网技术及商业变现。发表了50多篇学术论文，申请和获得了8项国家发明专利，领导了超过30多款商用大规模系统的研发、运维、运营，直接商业利益过亿。</p>\
 <p> ·	首批入选中科院青年创新促进会的优秀青年科学家。</p>\
 <p> ·	微软优秀学者。</p>\
   <p> ·国家科技进步奖获得者</p>\
    </div>\
    </div>'
    }, {
      content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/8.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      赵辉\
      </div>\
      <div class="p5d-desc">\
      首席产品官\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
       <p> ·	赵辉先生，清华大学经济学硕士，拥有20余年的金融证券行业从业经验，同时具有海内外大型投行的工作经验和国有大型资产管理公司的投资经验。</p>\
        <p> ·	从业20余年，相继服务于光大金控、中德证券、瑞银证券、中银国际、国泰君安及国家信息中心等公司，先后出任总经理、执行总经理及执行董事等职务，擅长公司的资产组合投资，包括股权投资、定向增发、股票投资、固定收益业务以及公司自有资金的投资管理，在金融证券行业具有广泛的人脉关系和政府关系。</p>\
    </div>\
    </div>'
    }, {
      content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/9.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      沙平卫\
      </div>\
      <div class="p5d-desc">\
      首席人力资源官（CHRO）\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
       <p> ·	加拿大滑铁卢大学管理学硕士，世界500强公司及民营联网企业超过24年工作经验。</p>\
         <p> ·	曾任暴风科技人力资源及行政副总裁、完美世界人力资源及行政副总裁、搜狐视频人力资源总监、职脉互联技术COO、UT斯达康人力资源总监等职；</p>\
 <p> ·	熟悉互联网及高科技行业，深入理解人力资源作为业务伙伴的角色和责任。优秀的领导能力及团队管理能力，熟悉人力资源各模块，在行业人才招聘、培养、激励、保留等方面有丰富经验。</p>\
    </div>\
    </div>'
    }, {
      content: '<div class="p4d-item">\
      <div class="p5d-title">\
      <img src="images/head/10.jpg" class="p5d-s3">\
      </div>\
      <div class="p5d-name">\
      潘磊\
      </div>\
      <div class="p5d-desc">\
      恒昌副总裁\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p5d-cn">\
      <p class="p4d-z">\
      简历\
      </p>\
       <p> ·	先后供职于海尔集团、平安集团，拥有丰富的管理经验和互联网金融从业经验。 </p>\
         <p> ·	2013年年初加盟恒昌公司，先后担任青岛分公司城市经理、华东区总监、汇财二部副总裁、汇财事业群负责人等职务，追随恒昌一路成长与发展！ </p>\
 <p> ·	他用了3年多时间将团队从几十人打造到上万人，实现了每个月业绩从300万到40亿、近千倍的成长，创造了连续三年业务量十亿、百亿、三百亿的巨大突破，在CEO秦总的英明指导下，他带领英勇、勤奋的财富端伙伴众志成城，创造了互联网金融行业一个又一个奇迹！ </p>\
    </div>\
    </div>'
    }];

function stopEvent(e) {
  e.stopPropagation()
}
function touchStart(e) {
  e.stopPropagation();
  e.preventDefault()
  startY = e.touches[0].pageY
}

function p1TouchEnd(e) {
  e.stopPropagation();
  e.preventDefault()
  var endY = e.changedTouches[0].pageY - startY
  if (endY < -10) {
    p1.next()
  }
}
function p3TouchEnd(e) {
  e.stopPropagation();
  e.preventDefault()

  var endY = e.changedTouches[0].pageY - startY
  if (endY < -10) {
    p3.next()
  }
}
function p4TouchEnd(e) {
  e.stopPropagation();
  e.preventDefault()

  var endY = e.changedTouches[0].pageY - startY
  if (endY < -10) {
    p4.next()
    isP4Touch = true
  }
  if (endY > 10) {
    p4.pre()
    isP4Touch = true
  }
}
function p5TouchEnd(e) {
  e.stopPropagation();
  e.preventDefault()

  var endY = e.changedTouches[0].pageY - startY
  if (endY < -10) {
    p5.next()
    isP5Touch = true
  }
  if (endY > 10) {
    p5.pre()
    isP5Touch = true
  }
}
function p6TouchEnd(e) {
  e.stopPropagation();
  e.preventDefault()

  var endY = e.changedTouches[0].pageY - startY
  if (endY < -10) {
    p6.next()
  }
  if (endY > 10) {
    p6.pre()
  }
}
function p7TouchEnd(e) {
  e.stopPropagation();
  e.preventDefault()

  var endY = e.changedTouches[0].pageY - startY
  if (endY > 10) {
    p7.pre()
  }
}
function p1Touch() {
  document.getElementById("p1").addEventListener("touchstart", touchStart);
  document.getElementById("p1").addEventListener("touchend", p1TouchEnd);
}
function p3Touch() {
  document.getElementById("p3En").removeEventListener("touchstart", stopEvent);
  document.getElementById("p3En").removeEventListener("touchend", stopEvent);
  document.getElementById("p3").removeEventListener("touchstart", touchStart);
  document.getElementById("p3").removeEventListener("touchend", p3TouchEnd);
  document.getElementById("p3En").addEventListener("touchstart", stopEvent);
  document.getElementById("p3En").addEventListener("touchend", stopEvent);
  document.getElementById("p3").addEventListener("touchstart", touchStart);
  document.getElementById("p3").addEventListener("touchend", p3TouchEnd);
}
function p4Touch() {
  document.getElementById("p4s").removeEventListener("touchstart", touchStart);
  document.getElementById("p4s").removeEventListener("touchend", p4TouchEnd);
  document.getElementById("p4s").addEventListener("touchstart", touchStart);
  document.getElementById("p4s").addEventListener("touchend", p4TouchEnd);
}
function p5Touch() {

  var p5dc = document.getElementsByClassName("p5d-cn")
  console.log(p5dc)

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
    p5dc5[i].addEventListener("touchstart", function (e) {
      setTimeout(function () {
        if (!isP5Touch) {
          p5.showDetail(e)
        }
      }, 300)
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
          $p1.classList.remove('in');
          $p2.classList.add('in');
          p3.show()
        }
      }
    );
  },
  show: function () {
    p1Touch()
  },
}

P2.prototype = {
  $el: $p2,
  pre: function () {

  },
  hide: function (fun) {
    var t = anime.timeline();
    t.add({
      targets: '.p2-t',
      opacity: 0,
      duration: 200,
      easing: 'easeOutBack'
    })
      .add({
        targets: '#p2',
        scale: 0.3,
        duration: 500,
        translateX: -80,
        translateY: 20,
        easing: 'linear',
        complete: fun
      }).add({
      targets: '.pg',
      scale: 1.5,
      easing: 'linear',
      duration: function (el, i, l) {
        return 200 + (i * 200);
      }
    }).add({
      targets: '.pg',
      scale: function (el, i, l) {
        if (i != 0) {
          return 1;
        } else {
          return 1.5;
        }
      },
      opacity: function (el, i, l) {
        if (i != 0) {
          return 0.5;
        } else {
          return 1;
        }
      },
      easing: 'linear',
      duration: function (el, i, l) {
        return 200 + (i * 200);
      }, complete: function () {
        anime({
          targets: '#pg1',
          scale: 1.4,
          duration: 1000,
          easing: 'linear'
        });
      }
    })
  },
  next: function () {
    this.hide(function () {
      p3.show()
    })
  },
  show: function () {
    $p2.classList.add('in');
    anime({
        targets: '#p2Line',
        height: "87%",
        duration: 2000,
        easing: 'linear'
      }
    );
    var tl = anime.timeline();
    tl.add({
      targets: '#t1',
      opacity: 1,
      translateX: 100,
      duration: 200,
      easing: 'linear',
    }).add({
      targets: '#t2',
      opacity: 1,
      translateX: -100,
      duration: 200,
      easing: 'linear',
    }).add({
      targets: '#t3',
      opacity: 1,
      translateX: 100,
      duration: 200,
      easing: 'linear',
    }).add({
      targets: '#t4',
      opacity: 1,
      translateX: -100,
      duration: 200,
      easing: 'linear',
    }).add({
      targets: '#t5',
      opacity: 1,
      translateX: 100,
      duration: 200,
      easing: 'linear',
    })
    var p2g = anime.timeline();
    p2g
      .add({
        targets: '#p2Logo1',
        scale: 1,
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: '#pg1',
        scale: 1,
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: '#pg2',
        scale: 1,
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: '#pg3',
        scale: 1,
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: '#pg4',
        scale: 1,
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: '#pg5',
        scale: 1,
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: '#p2Logo2',
        scale: 1,
        duration: 200,
        easing: 'linear',
        complete: this.next.bind(this)
      });
  }
}
P3.prototype = {
  $el: $p3,
  isEnglish: false,
  show: function () {
    anime({
      targets: '#pg1',
      scale: 1.4,
      opacity: 1,
      duration: 500,
      easing: 'linear',
    })
    $p3.classList.add("in")
    document.getElementById("p3English").addEventListener("touchend", function (e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        window.event.returnValue == false;
      }
      if (this.isEnglish) {
        document.getElementById("p3Cn").classList.remove("hidden")
        document.getElementById("p3En").classList.add("hidden")
        this.innerText = "English"
        this.isEnglish = false
      } else {
        this.innerText = "中文"
        this.isEnglish = true
        document.getElementById("p3Cn").classList.add("hidden")
        document.getElementById("p3En").classList.remove("hidden")
      }
    });
    anime({
        targets: '#p3C',
        scale: 1,
        duration: 300,
        easing: 'linear'
      }
    );
    anime({
        targets: '#p3K',
        scale: 1,
        duration: 500,
        easing: 'easeInSine',
        complete: p3Touch
      }
    );
  },
  pre: function () {
    anime({
        targets: '#p3K',
        scale: 0,
        duration: 300,
        easing: 'easeInSine',
        complete: function () {
          var t = anime.timeline();
          t.add({
            targets: '#p2',
            scale: 1,
            duration: 500,
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            complete: function () {
              $p3.classList.remove("in")
            }
          }).add({
            targets: '.pg',
            scale: 1,
            opacity: 1,
            easing: 'linear',
            duration: function (el, i, l) {
              return 200 + (i * 200);
            }
          }).add({
            targets: '.p2-t',
            opacity: 1,
            duration: function (el, i, l) {
              return 200 + (i * 200);
            },
            easing: 'easeOutBack'
          })
        }
      }
    );
    anime({
        targets: '#p3C',
        scale: 0,
        duration: 300,
        easing: 'easeInSine',
      }
    );
  },
  hide: function (fun) {
    anime({
      targets: '#pg1',
      scale: 1,
      opacity: 0.6,
      duration: 300,
      easing: 'linear',
    })
    anime({
      targets: '#pg2',
      scale: 1.4,
      opacity: 1,
      duration: 300,
      easing: 'linear',
      complete: function () {
        anime({
            targets: '#pg2',
            scale: 1.5,
            duration: 1000,
            easing: 'linear'
          }
        );
      }
    })
    anime({
        targets: '#p3K',
        scale: 0,
        duration: 300,
        easing: 'easeInSine',
        complete: fun
      }
    );
    anime({
        targets: '#p3C',
        scale: 0,
        duration: 300,
        easing: 'easeInSine',
      }
    );
  },
  next: function () {
    this.hide(function () {
      $p3.classList.remove("in")
      p4.show()
    })
  }
}

P4.prototype = {
  $el: $p4,
  $mel: document.getElementById("p4d"),
  show: function () {
    console.log("p4")
    anime({
      targets: '#pg1',
      scale: 1,
      opacity: 0.6,
      duration: 1000,
      easing: 'linear'
    });
    anime({
      targets: '#pg2',
      scale: 1.4,
      opacity: 1,
      duration: 1000,
      easing: 'linear'
    });
    $p4.classList.add("in")
    track.init()
    anime({
        targets: '#p4s',
        scale: 1,
        rotate: "360deg",
        duration: 1000,
        easing: 'easeInSine',
        complete: this.clickInit.bind(this)
      }
    );
  },
  pre: function () {
    this.hide(function () {
      p3.show()
    })
  },
  clickInit: function () {
    p4Touch()
    document.getElementById("star1").addEventListener("touchend", this.clickDetail.bind(this, 0))
    document.getElementById("star2").addEventListener("touchend", this.clickDetail.bind(this, 1))
    document.getElementById("star3").addEventListener("touchend", this.clickDetail.bind(this, 2))
    document.getElementById("star4").addEventListener("touchend", this.clickDetail.bind(this, 3))
    document.getElementById("star5").addEventListener("touchend", this.clickDetail.bind(this, 4))
    document.getElementById("star6").addEventListener("touchend", this.clickDetail.bind(this, 5))
  },
  clickDetail: function (type, e) {
    e.stopPropagation()
    setTimeout(function () {
      if (!isP4Touch) {
        p4.showDetail(type)
      }
    }, 300)
  },
  showDetail: function (type) {
    var domList = [
      {
        content: '<div class="p4d-item">\
      <div class="p4d-title">\
      <img src="images/qiu2.png" class="p4d-s3">\
      <img src="images/star-1.png" class="p4d-s1">\
      <img src="images/star-2.png" class="p4d-s2">\
      </div>\
      <div class="p4d-name">\
      机器学习算法工程师\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p4d-cn">\
      <p class="p4d-z">\
      工作职责\
      </p>\
      <p> ·	参与大规模机器学习平台的选型、部署以及研发优化工作，能够持续的支持业务的规模增长和需求升级；</p>\
      <p> ·	具备良好的复杂系统设计思想，灵活运用各成熟的离线、近线和在线机器学习计算框架接入成熟的离线/在线数据平台，完成数据清洗、数据回流、特征生成、在线算法预测、算法策略的部署监控等全流程平台框架工作。</p>\
      <p> ·	完成常见机器学习算法(聚类/分类/回归/协同过滤等)的接入工作，运用C/C++、Java、Python、Shell等，实现算法平台的功能落地。</p>\
    </div>\
    </div>'
      }, {
        content: '<div class="p4d-item">\
      <div class="p4d-title">\
      <img src="images/qiu3.png" class="p4d-s3">\
      <img src="images/star-1.png" class="p4d-s1">\
      <img src="images/star-2.png" class="p4d-s2">\
      </div>\
      <div class="p4d-name">\
      数据架构师\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p4d-cn">\
      <p class="p4d-z">\
      工作职责\
      </p>\
      <p> ·		负责大数据部门软件的设计，开发；对内对外沟通需求，组织协调开发人员完成项目。</p>\
      <p> ·	公司内业务系统数据采集，公司外用户授权数据抓取。</p>\
      <p> ·	三方征信数据接入和对公司内提供服务。</p>\
      <p> ·	搭建BI平台服务，协助公司内其他中心部门践行数据驱动的决策、精细化运营、产品优化；促进科学决策和发展。</p>\
      <p> ·		提供弹性的大数据存储和计算（实时、批处理）平台以及建立数据存储和应用的安全机制，降低大数据应用门槛，促进大数据能力的推广，并让其他部门专注于业务。</p>\
      <p> ·	征信系统开发和对外服务运营。</p>\
    </div>\
    </div>'
      }, {
        content: '<div class="p4d-item">\
      <div class="p4d-title">\
      <img src="images/qiu1.png" class="p4d-s3">\
      <img src="images/star-1.png" class="p4d-s1">\
      <img src="images/star-2.png" class="p4d-s2">\
      </div>\
      <div class="p4d-name">\
      风险管理大数据专家\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p4d-cn">\
      <p class="p4d-z">\
      工作职责\
      </p>\
      <p> ·应用大数据及数据挖掘技术进行客户风险分析。</p>\
    <p> · 基于大数据，利用并结合统计学、机器学习、数据挖掘等技术进行模型开发。</p>\
    <p> · 通过跨部门沟通协作提供风控模型，并指引业务部门解决问题。</p>\
    </div>\
    </div>'
      }, {
        content: '<div class="p4d-item">\
      <div class="p4d-title">\
      <img src="images/qiu4.png" class="p4d-s3">\
      <img src="images/star-1.png" class="p4d-s1">\
      <img src="images/star-2.png" class="p4d-s2">\
      </div>\
      <div class="p4d-name">\
      风险管理VP\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p4d-cn">\
      <p class="p4d-z">\
      工作职责\
      </p>\
      <p> · 对公司业务的风险关键指标及健康的风险级别负责。</p>\
    <p> · 对风险专家的风险报告、分析和建模进行管理。负责管理与员工和第三方服务相关的运营预算。</p>\
    <p> · 负责开发与推出新产品的引导和决策。</p>\
    </div>\
    </div>'
      }, {
        content: '<div class="p4d-item">\
      <div class="p4d-title">\
      <img src="images/qiu5.png" class="p4d-s3">\
      <img src="images/star-1.png" class="p4d-s1">\
      <img src="images/star-2.png" class="p4d-s2">\
      </div>\
      <div class="p4d-name">\
      风险模型专家\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p4d-cn">\
      <p class="p4d-z">\
      工作职责\
      </p>\
      <p> · 负责模型开发，包括但不限于欺诈风险、信用评分、行为评分和收集分数。</p>\
    <p> · 根据不同产品的风险特征，开发风险定价模型，完成风险测量工作。</p>\
    <p> · 针对对不同的客户群，开发相应的风险分析模型，并建立相应的信贷策略。</p>\
    <p> · 跟踪客户信息，拓展机会和优化政策，帮助业务发展。</p>\
    </div>\
    </div>'
      }, {
        content: '<div class="p4d-item">\
      <div class="p4d-title">\
      <img src="images/qiu6.png" class="p4d-s3">\
      <img src="images/star-1.png" class="p4d-s1">\
      <img src="images/star-2.png" class="p4d-s2">\
      </div>\
      <div class="p4d-name">\
      风险管理大数据专家\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p4d-cn">\
      <p class="p4d-z">\
      工作职责\
      </p>\
      <p> ·应用大数据及数据挖掘技术进行客户风险分析。</p>\
    <p> · 基于大数据，利用并结合统计学、机器学习、数据挖掘等技术进行模型开发。</p>\
    <p> · 通过跨部门沟通协作提供风控模型，并指引业务部门解决问题。</p>\
    </div>\
    </div>'
      },
      {
        content: '<div class="p4d-item">\
      <div class="p4d-title">\
      <img src="images/qiu1.png" class="p4d-s3">\
      <img src="images/star-1.png" class="p4d-s1">\
      <img src="images/star-2.png" class="p4d-s2">\
      </div>\
      <div class="p4d-name">\
      美元基金合伙人/董事总经理\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p4d-cn">\
      <p class="p4d-z">\
      工作职责\
      </p>\
      <p> · 筹集资金，建立高效的投资团队，与投资者保持良好关系。 </p>\
    <p> · 领导并管理团队，寻找并确定投资项目，尽职调查，起草投资意向书，由投资委员会批准。 </p>\
    <p> · 促进PE成员积极参与投前管理活动，包括投资委员会报告、项目监控、撤资项目等。</p>\
    <p> · 不断改善PE投资流程和操作策略来实现我们的长期愿景。</p>\
    <p> · 运用战略思维和前瞻性思维，具有广度和深度的分析商业趋势，制定策略以抓住投资机会。</p>\
    </div>\
    </div>'
      }, {
        content: '<div class="p4d-item">\
      <div class="p4d-title">\
      <img src="images/qiu1.png" class="p4d-s3">\
      <img src="images/star-1.png" class="p4d-s1">\
      <img src="images/star-2.png" class="p4d-s2">\
      </div>\
      <div class="p4d-name">\
      投资总监\
      </div>\
      <div class="p4d-line">\
      </div>\
      <div class="p4d-cn">\
      <p class="p4d-z">\
      工作职责\
      </p>\
      <p> · 	负责对投资项目的分析、论证、评估、选择、谈判和实施。</p>\
          <p> ·   	负责行业内的投资项目开拓，前期分析与项目挖掘，寻找和收集项目信息；对投资项目进行调研、分析，尽职调查，撰写可行性分析报告和商业计划书等项目文件；参与公司重大投融资决策，优化资本结构和资本配置，进行风险评估和风险控制。</p>\
	<p> ·作为项目负责人，全面负责运作项目：立项、尽职调查、交易、投资、产业链整合及投资退出，并参与被投资企业的投后管理负责。</p>\
    <p> ·在投资权限范围内，执行所管基金的投资组合的投资方案，并定期向总经理或合伙人汇报并回答有关质询。</p>\
      <p> ·对投资工作开展进行监督和指导并提出改进意见。</p>\
    </p>\
    </div>\
    </div>'
      }];

    document.getElementById("p4dd").innerHTML = domList[type].content
    this.hide(function () {
      anime({
        targets: '#p4d',
        scale: 1,
        duration: 500,
        easing: 'easeInSine'
      });
      document.getElementById("p4s").classList.add("hidden")
      document.getElementById("p4d").classList.remove("hidden")
      $p2.classList.remove("in")
      document.getElementById("next").classList.add("hidden")
      document.getElementById("p4dClose").addEventListener("touchstart", function () {
        document.getElementById("p4s").classList.remove("hidden")
        $p2.classList.add("in")
        document.getElementById("next").classList.remove("hidden")
        track.animateIn()
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
            targets: '#p4s',
            scale: 1,
            rotate: "360deg",
            duration: 1000,
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
  }
  ,
  closeDetail: function () {

  }
  ,
  pre: function () {
    this.hide(function () {
      $p4.classList.remove("in")
      p3.show()
      isP4Touch = false
    })
  }
  ,
  next: function () {
    this.hide(function () {
      $p4.classList.remove("in")
      p5.show()
      isP4Touch = false
    })
  },
  hide: function (fun) {
    track.animateOut()
    anime({
      targets: '#pg2',
      scale: 1,
      opacity: 0.6,
      duration: 500,
      easing: 'linear'
    });
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
      isP5Touch = false
      $p5.classList.remove("in")
      p6.show()
    })
  },
  pre: function () {
    anime({
      targets: '#pg3',
      scale: 1,
      opacity: 0.6,
      duration: 500,
      easing: 'linear'
    });
    anime({
      targets: '#pg2',
      scale: 1.4,
      opacity: 1,
      duration: 500,
      easing: 'linear'
    });
    this.hide(function () {
      isP5Touch = false
      $p5.classList.remove("in")
      p4.show()
    })
  },
  hideDetail: function () {
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
        document.getElementById("p2").classList.add("in")
      }
    });
  },
  showDetail: function (e) {
    var n = e.target.dataset.n
    document.getElementById("p5c").innerHTML = gaoguanList[n - 1].content
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
        p5Touch()
      }
    });
    anime({
      targets: '#p5content',
      scale: 1,
      duration: 500,
      delay: 200,
      easing: 'linear'
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
    anime({
      targets: '#pg2',
      scale: 1,
      opacity: 0.6,
      duration: 500,
      easing: 'linear'
    });
    anime({
      targets: '#pg3',
      scale: 1.4,
      opacity: 1,
      duration: 500,
      easing: 'linear'
    });
    anime({
      targets: '#p5',
      scale: 1,
      duration: 500,
      easing: 'linear'
    });
    $p5.classList.add("in")
    anime({
      targets: '.p5l',
      rotateY: '360deg',
      opacity: 1,
      duration: function (el, i, l) {
        return 100 + (i * 200);
      },
      easing: 'linear',
      complete: function () {
        anime({
          targets: '.p5l',
          rotateY: 0,
          opacity: 1,
          duration: 0,
          easing: 'linear',
        })
        p5Touch()
      }
    });
  }
}

P6.prototype = {
  $el: $p6,
  next: function () {
    this.hide(function () {
      $p6.classList.remove("in")
      p7.show()
    })
  },
  pre: function () {
    anime({
      targets: '#pg4',
      scale: 1,
      opacity: 0.6,
      duration: 500,
      easing: 'linear'
    });
    anime({
      targets: '#p5',
      scale: 1,
      opacity: 1,
      duration: 500,
      easing: 'linear'
    });
    this.hide(function () {
      $p6.classList.remove("in")
      p5.show()
    })
  },
  hide: function (fun) {
    anime({
        targets: '#xingcheng',
        scale: 0,
        rotateY: "360deg",
        duration: 500,
        easing: 'easeInSine',
        complete: fun
      }
    );
  },
  show: function () {
    anime({
      targets: '#pg3',
      scale: 1,
      opacity: 0.6,
      duration: 500,
      easing: 'linear'
    });
    anime({
      targets: '#pg4',
      scale: 1.4,
      opacity: 1,
      duration: 500,
      easing: 'linear'
    });
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
  }
}
P7.prototype = {
  $el: $p7,
  show: function () {
    anime({
      targets: '#p7',
      opacity: 1,
      duration: 500,
      easing: 'linear'
    });
    anime({
      targets: '#pg4',
      scale: 1,
      opacity: 0.6,
      duration: 500,
      easing: 'linear'
    });
    anime({
      targets: '#pg5',
      scale: 1.4,
      opacity: 1,
      duration: 500,
      easing: 'linear',
      complete: p7Touch
    });
    anime({
      targets: '#p7 img',
      scale: 1,
      opacity: 1,
      duration: function (el, i, l) {
        return 300 + (i * 300);
      },
      easing: 'linear',
    });
    document.getElementById("next").classList.add("hidden")
    $p7.classList.add("in")
  },
  pre: function () {
    anime({
      targets: '#pg5',
      scale: 1,
      opacity: 0.6,
      duration: 500,
      easing: 'linear',
      complete: p7Touch
    });
    anime({
      targets: '#p7',
      opacity: 0,
      duration: 500,
      easing: 'linear',
      complete: function () {
        document.getElementById("next").classList.remove("hidden")
        $p7.classList.remove("in")
        p6.show()
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
