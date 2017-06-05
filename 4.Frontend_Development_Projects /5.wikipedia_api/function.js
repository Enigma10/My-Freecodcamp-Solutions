function showResult(){
  document.getElementById("display-results").textContent="";

  var keywords = document.getElementById('keywords').value;
  //console.log(keywords);
  findResult(keywords);


}


function findResult (keywords) { //AJAX request
	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keywords + "&prop=info&inprop=url&utf8=&format=json",
		dataType: "jsonp",
		success: function(response) {
			console.log(response.query);
			if (response.query.searchinfo.totalhits === 0) {
				//showError(keyword);
        alert("Opps");
			}

			else {
          showResults(response);
			}
		},

  });
}

function showResults(response)
{
    // console.log(response.query.search.length);

    var results =response.query.search;
      results.forEach(function(element){
      var textBox = document.createElement("a");
      var title= element.title.replace(/ /g, '_');
      console.log(title);
      var link="https://en.wikipedia.org/wiki/"+title;
      textBox.setAttribute("href",link);
      textBox.setAttribute("target","_blank");

      //console.log(link);
      textBox.setAttribute("onclick","changeTemprature()");
      textBox.textContent=element.title;
      document.getElementById("display-results").appendChild(textBox).setAttribute("id", "temp");
      var br = document.createElement("br");
      

      // html = '<a href="' +link+'" '+'target="_blank">'+element.title+'</a><br>';
      // document.getElementById("display-results").appendChildhtml;

    });



}
