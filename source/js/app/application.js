$(document).ready(function() {
	var a = new Application();
});

function Application()
{
	var server 		    = 'http://tr-cache-2.appspot.com/massrelevance/';
	var schedules 		= new ScheduleController();
	var tweetlist 		= new TweetListController();

	var tweetBox		= $('#tbox');
	
	this.toString	   	= toString;
	
	function onScheduleChange( e )
	{

	};
	
	
	
	function toString() { return "Application"; };
};