$(function(){
// input焦点
	var text=$(".text input")
	var inimg=$(".inimg input")
	var yin=$(".yininput")
	text.focus(function(){
		$(".textzi").css("display","none")
		text.css("border-color","#ff7500")
		inimg.css("border-color","#ff7500")
		yin.css("display","block")
	})
	text.blur(function(){
		$(".textzi").css("display","block")
		yin.css("display","none")
		text.css("border-color","#E0E0E0")
		inimg.css("border-color","#E0E0E0")
	})


// 轮播
	var as=getClass("ban")[0].getElementsByTagName('img');
	var banbox=getClass("banbox")[0];
	var cons=getClass("con")[0].getElementsByTagName("a");
	var lbtn=getClass("lbtn")[0];
	var rbtn=getClass("rbtn")[0];
	// var aw=getStyle(as[0],"width");
	// alert(aw)
	var img=0;
	var t=setInterval(move,1000);
	function move(){
		img++;
		if (img>as.length-1) {
			img=0;
		};
		for (var i = 0; i < as.length; i++) {
			// as[i].style.zIndex="0";
			animate(as[i],{opacity:0})
			cons[i].style.background="rgba(0,0,0,0.4)";
			cons[i].style.borderColor="rgba(255,255,255,0.3)";
		};
		// as[img].style.zIndex="1";
		animate(as[img],{opacity:1})
		cons[img].style.background="rgba(255,255,255,0.3)";
		cons[img].style.borderColor="rgba(0,0,0,0.4)";
	}
    banbox.onmouseover=function(){
    	clearInterval(t)
    }
    banbox.onmouseout=function(){
    	t=setInterval(move,1000);
    }
    for (var j = 0; j < cons.length; j++) {
    	cons[j].aa=j;
    	cons[j].onclick=function(){
    		for (var i = 0; i < as.length; i++) {
    			// as[i].style.zIndex="0";
    			animate(as[i],{opacity:0})
    			cons[i].style.background="rgba(0,0,0,0.4)";
			    cons[i].style.borderColor="rgba(255,255,255,0.3)";
    		};
    		// as[this.aa].style.zIndex="1";
    		animate(as[this.aa],{opacity:1})
    		this.style.background="rgba(255,255,255,0.3)";
		    this.style.borderColor="rgba(0,0,0,0.4)";
		    img=this.aa;
    	}
    };

    lbtn.onclick=function(){
    	img--;
		if (img<0) {
			img=as.length-1;
		};
		for (var i = 0; i < as.length; i++) {
			// as[i].style.zIndex="0";
			animate(as[i],{opacity:0})
			cons[i].style.background="rgba(0,0,0,0.4)";
			cons[i].style.borderColor="rgba(255,255,255,0.3)";
		};
		// as[img].style.zIndex="1";
		animate(as[img],{opacity:1})
		cons[img].style.background="rgba(255,255,255,0.3)";
		cons[img].style.borderColor="rgba(0,0,0,0.4)";
    }
    rbtn.onclick=function(){
    	move();
    }

// 选项卡
	var lis=getClass('home1-rightbox1')[0].getElementsByTagName("li");
	var rt=getClass('home1-bottom1')[0].getElementsByTagName("ul");
	aa(lis,rt);
	var lis1=getClass('home1-rightbox1')[1].getElementsByTagName('li');
	// alert(lis1.length)
	var rt1=getClass('home1-bottom')[2].getElementsByTagName('ul');
	// alert(rt1.length)
	aa(lis1,rt1)
	var lis2=getClass('home1-rightbox1')[2].getElementsByTagName('li');
	// alert(lis2.length)
	var rt2=getClass('home1-bottom')[3].getElementsByTagName('ul');
	// alert(rt2.length)
	aa(lis2,rt2)
	function aa(links,lists){
		for (var i = 0; i < links.length; i++) {
		 	links[i].index=i;
		 	links[i].onmousemove=function(){
		 		for (var j = 0; j < lists.length; j++) {
		 			lists[j].style.zIndex="1";
		 			links[j].className="";
		 		};
		 		lists[this.index].style.zIndex="2";
		 		this.className="home1-re";
		 	}
		 };
	}
	
  // 小米明星单品  



var cbtns=getClass('home-hd-right')[0];
  var leftbtn=getClass('home-ltu')[0];
  var rightbtn=getClass('home-rtu')[0];
  var home=getClass('home-datu')[0];
  var tu1=home.getElementsByTagName('ul');
  var wt=parseInt(getStyle(tu1[0],"width"));
  var ff=0;
  rightbtn.onclick=function(){
    ff++;
    if (ff>=tu1.length) {
      ff=tu1.length-1;
    };
    animate(home,{marginLeft:-ff*wt},500)
  }
  leftbtn.onclick=function(){
    ff--;
    if (ff<=0) {
      ff=0;
    };
    animate(home,{marginLeft:-ff*wt},500)
  }








  // var home=getClass('homebox-header')[0];
  // var tu=getClass('home-datu')[0].getElementsByTagName('ul');
  // var wt=parseInt(getStyle(tu[0],"width"));
  // alert(wt)
  // var homeWidth=wt*(tu.length);
  // // alert(homeWidth)
  // var tu1=getClass('home-datu')[0];
  // tu1.style.width=14+homeWidth+"px";
  // // alert(wt);
  // // alert(tu.length)
  // var bb=0;
  // var t1=setInterval(move1,4000);
  // function move1(){
  // 	bb++;
  // 	if (bb==tu.length) {
  // 		bb=0;
  // 	};
  // 	animate(tu1,{marginLeft:-bb*wt},1000);
  // }
  // home.onmouseover=function(){
  // 	clearInterval(t1)
  // }
  // home.onmouseout=function(){
  // 	t1=setInterval(move1,4000)
  // }
//   var cbtns=getClass('home-hd-right')[0];
//   var leftbtn=getClass('home-ltu')[0];
//   var rightbtn=getClass('home-rtu')[0];
//   var la=getClass('home-ltu')[0].getElementsByTagName('a');
//   var ra=getClass('home-rtu')[0].getElementsByTagName('a');
//   // var falg=true;
//   var ee=0;
//   // for (var i = 0; i < cbtns.length; i++) {
//   //   cbtns[i].onclick=function(){
//   //     la.onmouseover=function(){
//   //         la[i].style.color="#ff6700";
//   //     }
//   //   }
//   // };
//   rightbtn.onclick=function(){
//     ee++;
//     // alert(ee)
//     if (ee>=cbtns.length) {
//       alert(cbtns.length)
//       ee=cbtns.length;
//     };
//     animate(tu1,{marginLeft:-ee*wt},1000);
//     // rightbtn.onmousemove=function(){
//       // rightbtn.style.color="#ff6700";
//     // }
//   }
// leftbtn.onclick=function(){
//     ee--;
//     // alert(ee)
//     if (ee<=0) {
//       ee=0;
//     };
//     animate(tu1,{marginLeft:-ee*wt},1000);
//   }


// 为你推荐
  var cbtns1=getClass('home-hd-right')[1];
  var leftbtn1=getClass('home-ltu')[1];
  var rightbtn1=getClass('home-rtu')[1];
  var home1=getClass('home-datu')[1];
  var tu2=home1.getElementsByTagName('ul');
  var wt1=parseInt(getStyle(tu2[0],"width"));
  var ff=0;
  rightbtn1.onclick=function(){
    ff++;
    if (ff>=tu2.length) {
      ff=tu2.length-1;
    };
    animate(home1,{marginLeft:-ff*wt1},500)
  }
  leftbtn1.onclick=function(){
    ff--;
    if (ff<=0) {
      ff=0;
    };
    animate(home1,{marginLeft:-ff*wt1},500)
  }
// 内容

// var nrbox=getClass('neirong-box')[0];
// var nrboxs=getClass('neirong-tushu1',nrbox);
// // alert(nrboxs.length)
// var nrbtns=getClass('xiaoquan')[0].getElementsByTagName('li');
// var nrw=parseInt(getStyle(nrboxs[0],'width'));
// // alert(nrw)
// var nrbox1=nrw*(nrboxs.length)+"px";
// // alert(nrbox1)
// // nrbox.style.width=nrw*(nrboxs.length)+"px";

// // alert(nrw)
// // alert(nrbtns.length)
// for (var i = 0; i < nrbtns.length; i++) {
//   nrbtns[i].dd=i;
//   nrbtns[i].onclick=function(){
//       for (var j = 0; j < nrboxs.length; j++) {
//         animate(nrboxs[j],{marginLeft:0})
//       };
//       animate(nrboxs[this.dd],{marginLeft:-this.dd*nrw})
//   }
// };


  var cbtns1=getClass('home-hd-right')[0];
  var nlbtn=getClass('neirong-lbtn')[0];
  var nrbtn=getClass('neirong-rbtn')[0];
  var nrbox=getClass('neirong-box')[0];
  var quan=getClass("xiaoquan")[0].getElementsByTagName("span");
  // alert(quan.length)
  // alert(nrbox.length)
  var nrdivs=getClass('neirong-tushu1');
  // alert(nrdivs.length)
  var nrwt=parseInt(getStyle(nrdivs[0],"width"));
  dianji(nlbtn,nrbtn,nrdivs,quan,nrbox)
  function dianji(nrlebtn,nrribtn,nrdiv,quans,nrboxs){
    var gg=0;
    nrribtn.onclick=function(){
      gg++;
      if (gg>=nrdiv.length) {
        gg=nrdiv.length-1;
      };
      for (var i = 0; i < quans.length; i++) {
        quans[i].style.border="";
        quans[i].style.background="";
      };
      animate(nrboxs,{marginLeft:-gg*nrwt},500)
      quans[gg].style.border="2px solid #FFAC13";
      quans[gg].style.background="#fff";
      // quans[gg].style.borderRadius="50%";
    }
    nrlebtn.onclick=function(){
      gg--;
      if (gg<=0) {
        gg=0;
      };
      for (var i = 0; i < quans.length; i++) {
        quans[i].style.border="";
        quans[i].style.background="";
      };
      animate(nrboxs,{marginLeft:-gg*nrwt},500)
      quans[gg].style.border="2px solid #FFAC13";
      quans[gg].style.background="#fff";
    }
  }
  






  var nlbtn1=getClass('neirong-lbtn1')[0];
  var nrbtn1=getClass('neirong-rbtn1')[0];
  var nrbox1=getClass('neirong-box3')[0];
  // console.log(nrbox1)
  var nrdivs1=getClass('neirong-tushu2');
  var quan1=getClass("xiaoquan")[1].getElementsByTagName("span");
  // alert(quan1.length)
  // alert(nrdivs1.length)
  dianji(nlbtn1,nrbtn1,nrdivs1,quan1,nrbox1)
  



   
  var nlbtn2=getClass('neirong-lbtn2')[0];
  var nrbtn2=getClass('neirong-rbtn2')[0];
  var nrbox2=getClass('neirong-box4')[0];
  // console.log(nrbox2)
  var nrdivs2=getClass('neirong-tushu3');
  var quan2=getClass("xiaoquan")[2].getElementsByTagName("span");
  // alert(quan2.length)
  // alert(nrdivs2.length)
  dianji(nlbtn2,nrbtn2,nrdivs2,quan2,nrbox2)




var nlbtn3=getClass('neirong-lbtn3')[0];
  var nrbtn3=getClass('neirong-rbtn3')[0];
  var nrbox3=getClass('neirong-box5')[0];
  // console.log(nrbox3)
  var nrdivs3=getClass('neirong-tushu4');
  var quan3=getClass("xiaoquan")[3].getElementsByTagName("span");
  // alert(quan3.length)
  // alert(nrdivs3.length)
  dianji(nlbtn3,nrbtn3,nrdivs3,quan3,nrbox3)


})

