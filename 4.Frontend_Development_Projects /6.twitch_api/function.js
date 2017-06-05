var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "StarCraftII"];

function getChannelInfo() {
  channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    };
    $.getJSON(makeURL("streams", channel), function(data) {
      var game,
          status;
          console.log(data);
      if (data.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      };
      $.getJSON(makeURL("channels", channel), function(data) {
        var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
          name = data.display_name != null ? data.display_name : channel,
          description = status === "online" ? ': ' + data.status : "";
          html = '<div class="row '
           +status+'"'+'><div class="col-xs-2 col-sm-1" id="icon"><img src="' +
          logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' +
          data.url + '" target="_blank">' +
          name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+
          game + '<span class="hidden-xs">' +
          description + '</span></div></div>';
          status === "online" ? $("#showResult").prepend(html) : $("#showResult").append(html);
        console.log(data);
      });
    });
  });
};

$(document).ready(function() {
  getChannelInfo();
});

function resultTime(value)
{
//var val= document.getElementById('online').id;
//console.log(val);
if(value==document.getElementById('online').id){
  //console.log("hell");
  $('.online').show();
  $('.offline').hide();

}
else if(value==document.getElementById('offline').id){
  $('.online').hide();
  $('.offline').show();
}
else {
  $('.online').show();
  $('.offline').show();
}



}
