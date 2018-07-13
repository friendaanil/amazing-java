function changeBackground(){
	var c = getRandomColor();
	 background(c);
	 $("#red").val(c.levels[0]);
	 $("#green").val(c.levels[1]);
	 $("#blue").val(c.levels[2]);
}


function getRandomColor(){
	return color(random(255),random(255),random(255));
}

function loadingFunc(){
 loading = new Loading({
    // 'ver' or 'hor'
    direction: 'ver',
    // loading title
    title: undefined,
    // text color
    titleColor: '#FFF',
    // font size
    titleFontSize: 14,
    // extra class(es)
    titleClassName: undefined,
    // font family
    titleFontFamily:   undefined,
    // loading description
    discription: undefined,
    // text color
    discriptionColor:  '#FFF',
    // font size
    discriptionFontSize: 14,
    // extra class(es)
    discriptionClassName: undefined,
    // font family
    directionFontFamily: undefined,
    // width/height of loading indicator
    loadingWidth: 'auto',
    loadingHeight: 'auto',
    // padding in pixels
    loadingPadding: 20,
    // background color
    loadingBgColor: '#252525',
    // border radius in pixels
    loadingBorderRadius: 12,
    // loading position
    loadingPosition: 'fixed',
    // shows/hides background overlay
    mask: true,
    // background color
    maskBgColor: 'rgba(0, 0, 0, .6)',
    // extra class(es)
    maskClassName: undefined,
    // mask position
    maskPosition: 'fixed',
    // 'image': use a custom image
    //loading <a href="https://www.jqueryscript.net/animation/">Animation</a>: 'origin',

    // path to loading spinner
    animationSrc: undefined,
   // width/height of loading spinner
    animationWidth: 40,
    animationHeight: 40,
    animationOriginWidth: 4,
    animationOriginHeight: 4,
    // color
    animationOriginColor: '#FFF',
    // extra class(es)
    animationClassName: undefined,
    // auto display
    defaultApply: true,
    // animation options
    animationIn: 'animated fadeIn',
    animationOut: 'animated fadeOut',
    animationDuration:  1000,
    // z-index property
    zIndex: 0,
});
return loading;
}
