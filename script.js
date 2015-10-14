$( document ).ready(function() {
		//getting background images
		var urls = [];

		$.getJSON("http://www.reddit.com/r/CozyPlaces/.json?jsonp=?", function(data) {

			$.each(data.data.children, function(i,item){
				var fileExtension = item.data.url.split('.').pop();
				//console.log(fileExtension);
				var imgExtensions = ["jpg", "jpeg", "png", "gif"]

				if ($.inArray(fileExtension, imgExtensions) > -1) {
		    		urls.push(item.data.url);
				}
	        	
		    })
			
		}).done(
			function(){
				$.backstretch(urls, {duration: 15000, fade: 1200});
			}
		);

		//Getting videos (BUG)
		/*var videoIds = [];

		$.getJSON("http://www.reddit.com/r/jazznoir/.json?jsonp=?", function(data) {

			$.each(data.data.children, function(i,item){
				if (item.data.domain = "youtube.com" || "youtu.be") {
					var fn = item.data.secure_media.oembed.url.split('/').reverse()[0];
					videoIds.push(fn);
				}	        	
		    })
			
		}).done(
			function(){
				$.backstretch(urls, {duration: 15000, fade: 1200});
			}
		);

		// Load the IFrame Player API code asynchronously.
		  var tag = document.createElement('script');
		  tag.src = "https://www.youtube.com/player_api";
		  var firstScriptTag = document.getElementsByTagName('script')[0];
		  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		  // Replace the 'ytplayer' element with an <iframe> and
		  // YouTube player after the API code downloads.
		  var player;
		  function onYouTubePlayerAPIReady() {
		    player = new YT.Player('ytplayer', {
		      height: '200',
		      width: '200',
		      playlist: videoIds;
		    });
		  }*/
});