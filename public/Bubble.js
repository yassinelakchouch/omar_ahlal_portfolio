bubbleAnimation("#feature1","#circle1")
bubbleAnimation("#feature2","#circle2")
bubbleAnimation("#feature3","#circle3")
// eslint-disable-next-line no-undef
function bubbleAnimation(id1 ,id2){
// eslint-disable-next-line no-undef
$(id1).mousemove(function(e) {
  parallaxIt(e, id2, -35,id1);
});

}
function parallaxIt(e, target, movement,id1) {

  // eslint-disable-next-line no-undef
  var $this = $(id1);
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

 
  // eslint-disable-next-line no-undef
  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
