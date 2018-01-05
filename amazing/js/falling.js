
/* Define the number of element to be used in the animation */
const RedPacketNumber = 10;
const YuanbaoNumber = 4;
const ColourBarNumber = 24;

/* 
    Called when the page is completely loaded.
*/
function init()
{
    var $eggBrake = $('.egg-brake');
	/* Get a reference to the element that will contain the element */
    var container = document.getElementById('fallingContainer');
    /* Fill the empty container with new elements */
    for (var i = 0; i < RedPacketNumber; i++) 
    {
		$(container).append(createRedPacket());
    }
    for (var i = 0; i < YuanbaoNumber; i++) 
    {
		$(container).append(createYuanbao());
    }
    for (var i = 0; i < ColourBarNumber; i++) 
    {
		$(container).append(createColourBar());
    }
	setTimeout(function(){
		$('.RedPacket').fadeOut(600);
		$('.Yuanbao').fadeOut(600);
		setTimeout(function(){
			$(container).fadeOut(1000);
		}, 2000);
		eggsFlipIn();
	}, 3000);
}


/*
    Receives the lowest and highest values of a range and
    returns a random integer that falls within that range.是小数
*/
function randomInteger(low, high)
{
    return low + Math.floor(Math.random() * (high - low));
}
/*
   Receives the lowest and highest values of a range and
   returns a random float that falls within that range.
*/
function randomFloat(low, high)
{
    return low + Math.random() * (high - low);
}
/*
    Receives a number and returns its CSS pixel value.
*/
function pixelValue(value)
{
    return value + 'px';
}
/*
    Returns a duration value for the falling animation.
*/
function durationValue(value)
{
    return value + 's';
}

//创建红包
function createRedPacket()
{
    /* Start by creating a wrapper div, and an empty img element */
    var leafDiv = document.createElement('div');
    var image = document.createElement('img');
    
    /* Randomly choose a leaf image and assign it to the newly created element */
    image.src = 'images/redPacket.png';
    
	leafDiv.className = 'RedPacket';
    leafDiv.style.top = "-100px";

    /* Position the leaf at a random location along the screen */
    leafDiv.style.left = pixelValue(randomInteger(0, 600));
    
    /* Randomly choose a spin animation */
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    
    /* Set the -webkit-animation-name property with these values */
    leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;
    
    /* Figure out a random duration for the fade and drop animations */
    var fadeAndDropDuration = durationValue(randomFloat(1, 3));
    
    /* Figure out another random duration for the spin animation */
    var spinDuration = durationValue(randomFloat(2, 5));
    /* Set the -webkit-animation-duration property with these values */
    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

    var leafDelay = durationValue(randomFloat(0, 3));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;

    image.style.webkitAnimationDuration = spinDuration;

    // add the <img> to the <div>
    leafDiv.appendChild(image);

    /* Return this img element so it can be added to the document */
    return leafDiv;
}

//创建元宝
function createYuanbao()
{
    /* Start by creating a wrapper div, and an empty img element */
    var leafDiv = document.createElement('div');
    var image = document.createElement('img');
    
    /* Randomly choose a leaf image and assign it to the newly created element */
    image.src = 'images/egg-small.png';
    
	leafDiv.className = 'Yuanbao';
    leafDiv.style.top = "-100px";

    /* Position the leaf at a random location along the screen */
    leafDiv.style.left = pixelValue(randomInteger(0, 600));
    
    /* Randomly choose a spin animation */
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    
    /* Set the -webkit-animation-name property with these values */
    leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;
    
    /* Figure out a random duration for the fade and drop animations */
    var fadeAndDropDuration = durationValue(randomFloat(1, 1));
    
    /* Figure out another random duration for the spin animation */
    var spinDuration = durationValue(randomFloat(2, 5));
    /* Set the -webkit-animation-duration property with these values */
    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

    var leafDelay = durationValue(randomFloat(0, 3));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;

    image.style.webkitAnimationDuration = spinDuration;

    // add the <img> to the <div>
    leafDiv.appendChild(image);

    /* Return this img element so it can be added to the document */
    return leafDiv;
}

//创建彩带
function createColourBar()
{
    var leafDiv = document.createElement('div');
    var image = document.createElement('img');
    
    image.src = 'images/colourBar' + randomInteger(1, 8) + '.png';
    
	leafDiv.className = 'ColourBar';
    leafDiv.style.top = "-100px";

    leafDiv.style.left = pixelValue(randomInteger(0, 600));

    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    
    leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;

    var fadeAndDropDuration = durationValue(randomFloat(1, 4));
    
    var spinDuration = durationValue(randomFloat(1, 3));

    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

    var leafDelay = durationValue(randomFloat(0, 1));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;

    image.style.webkitAnimationDuration = spinDuration;

    leafDiv.appendChild(image);


    return leafDiv;
}
//文档加载完成后执行
$(function () { init();})
