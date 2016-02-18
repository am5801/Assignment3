$('div').on('click', function() {
  $(this).toggleClass('show-description');
});

$('#black').click(function(){
  $('header').css('background-image',"url('http://mechanical-enterprises.com/wp-content/uploads/2013/05/chalkboard.jpg')");
});

$('#red').click(function(){
  $('header').css('background-image',"url('http://encorestudio.biz/wp-content/uploads/2013/05/Red-Encore-Chalkboard-Background.png')");
});

$('#blue').click(function(){
  $('header').css('background-image',"url('http://i.istockimg.com/file_thumbview_approve/18288140/3/stock-photo-18288140-chalkboard-dark-blue-blackboard-texture-background.jpg')");
});

$('#green').click(function(){
  $('header').css('background-image',"url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT69Rncy_12ZfuCjxNxGxIXdHotOiO2NvCurLDot5RcOoICtzPJzg')");
});

$('#purple').click(function(){
  $('header').css('background-image',"url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRu9REAKbD1CYt_cENp_CfNxW3TSoDthlTO1c33II-El0g5Pc9')");
});

var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

var map = L.map('myMap', {
  scrollWheelZoom: false,
  center: [40.768058,-73.981891],
  zoom: 11
});

map.addLayer(layer)

var marker = L.marker([40.768058,-73.981891]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.")