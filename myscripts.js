$(document).ready(function() {
	getLocation();
	
	function getLocation(){
	$.get("https://ipinfo.io", function(location) {
  $(".location").append(location.city + ",").append(location.country);
  getWeather(location.loc);
}, "jsonp");
}
	function getWeather(loc){
		var API_KEY="b07691f16495483da9d93038172305";
		var url="http://api.apixu.com/v1/current.json?key="+API_KEY +"&q=" + loc;
		console.log(url);
		$.getJSON(url,function(weather){
			console.log(weather);
			$(".temperature").append(weather.current.temp_c);
			var iconNum="http:"+weather.current.condition.icon;
			
			$(".icon").append("<img src="+ iconNum +">");
		});
		
	}
});