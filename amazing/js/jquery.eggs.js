
function eggsFlipIn(){
	//鸡蛋落下
	var $eggs = $('.eggs li');
	$eggs.eq(0).show().addClass('animated1s bounceInDown');
	$eggs.eq(1).show().addClass('animated2s bounceInDown');
	$eggs.eq(2).show().addClass('animated3s bounceInDown');
	//鸡蛋晃动
	setTimeout(function(){
		$eggs.eq(0).attr('class', 'animated3s swing');
	}, 1000);
	setTimeout(function(){
		$eggs.eq(1).attr('class', 'animated3s swing');
	}, 1200);
	setTimeout(function(){
		$eggs.eq(2).attr('class', 'animated3s swing');
	}, 1400);
	//选择鸡蛋，放大、居中、砸开动画
	setTimeout(function(){
		$eggs.one('click', function(){
			var dist01 = $eggs.eq(1).offset().left;
			var dist02 = $(this).offset().left;
			$(this).attr('class','pos-relative').siblings('li').attr('class','animated0s fadeOutDown');
			$(this).find('img').attr('class','animated0s zoomIn')
			if(!$eggs.is(':animated')){
				$(this).stop(true, false).animate({left:(dist01- dist02)}, 300).animate({'opacity': '0'}, 300).hide(300);
				setTimeout(function(){
					
					var $eggBrake = $('<li class="egg-brake"><img src="images/egg-brake0.png" /></li>');
					$('.eggs').append($eggBrake);
					$eggBrake.show();
					var i=0;
					setInterval(function(){ 
						if(i<10){
							i+=1;
							var url = 'images/egg-brake'+ i + '.png';
							$eggBrake.find('img').attr('src', url);
						}
					}, 100);
					setTimeout(function(){
						giftFadeIn();
					}, 500);

				}, 300);
			}
		});
	}, 2800);
};

//礼物呈现动画
function giftFadeIn(){
	var $giftImg = $('.gift-img');
	var $giftNum = $('.gift-num');
	var $giftTxt = $('.gift-txt');
	var $giftBtn = $('.gift-btn');
	var $shareInfo = $('.share-info');
	var $closeBtn = $('.close-btn');
	$giftNum.hide();
	$('.gift').show();
	$giftImg.addClass('animated4s bounceIn');
	$('.lightbg').fadeIn();
	setTimeout(function(){
		var numMarginLeft = $giftNum.width()/2;
		$giftNum.css('margin-left',-numMarginLeft).show().addClass('animated4s bounceIn');
		/*setTimeout(function(){
			$('.stars').fadeIn();
		}, 700);*/
		setTimeout(function(){
			$giftTxt.removeClass('opacity0').addClass('animated4s slideInDown');
			$giftBtn.removeClass('dsn').addClass('animated4s slideInUp');
			$giftBtn.click(function(){
				$giftBtn.hide();
				$closeBtn.show().addClass('animated4s slideInDown');
				$shareInfo.show().find('li').addClass('animated4s slideInUp');
			});
		}, 200);
	}, 700);
	
};

//文字居中
$(function(){
	function setNumMarginLeft(){
		var $giftNum = $('.gift-num');
		var numMarginLeft = $giftNum.width()/2;
		$giftNum.css('margin-left',-numMarginLeft);
	}
	setNumMarginLeft();
	$(window).resize(function(){
		setNumMarginLeft();
	});
});

//关闭页面
$(function(){
	function giftClose(cmd,parameter1){
		document.location="jfq://"+cmd+":/"+parameter1;
	};
	
	$('.close-btn').click(function(){
		giftClose();
		window.amazing.giftClose();
	});
});