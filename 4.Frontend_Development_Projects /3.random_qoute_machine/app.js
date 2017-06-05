var Qauthor,Qtext;
Qtext=document.getElementById('text');
Qauthor=document.getElementById('author');

function newQuote(){
  console.log("hello  1");
  var request = new XMLHttpRequest();
  request.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.setRequestHeader("Accept","application/json");
  request.setRequestHeader("X-Mashape-Key","AfGvPwU8elmshQQcfqFPI8dLUqVCp1gZEcRjsnmGmyiJRugoLA");
  request.send()
  request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
      console.log(data.quote);
    Qtext.textContent=data.quote;
    Qauthor.textContent=data.author;

    console.log(Qauthor);
  }
  else {
   alert("ERROR");
    // We reached our target server, but it returned an error

  }
  };

}


function postIt(sel)
{

  if(sel==document.getElementById('new-quote').id)
  {
      newQuote();
  }
  if(sel==document.getElementById('tweet-quote').id)
  {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + Qtext.textContent + '" ' + Qtext.textContent));
  }
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
