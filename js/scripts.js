function placesVisited(place, date, landmarks){
  this.place = place;
  this.date= date;
  this.landmarks = landmarks;
};

var japan = new placesVisited("Japan", "Summer 2014", ["Tokyo", " Mt. Fuji", " Kyoto", " Lake Saiko"]);
var southDakota = new placesVisited("South Dakota", " 1993-2011", [" Mt. Rushmore", " Crazy Horse", "Wall Drug"]);
var portland = new placesVisited("Portland, OR", "2011-2017", ["Mt. Hood", " Waterfalls", " Great Coffee", " Great Beer"]);

var philadelphia = new placesVisited("Philadelphia", "2004 - 2009", ["Reading Terminal Market", " Museum of Art", " Liberty Bell"]);
var alameda = new placesVisited("Alameda", "2000 - 2004", ["Naval Base", " Great Ice Cream", " The Beach"]);
var cleveland = new placesVisited("Cleveland", "1998 - 2000", ["Rock and Roll Hall of Fame", " Pierogis", " Lake Erie"]);


var display =function(personName, placeName) {
  // var urlString = "url(../img/" + placeName + ".jpg)";
  $("#" + personName + "Output").text("");
  for(var key in placeName) {
    $("#" + personName + "Output").append("<li>" + placeName[key] + "</li>")
    };
    console.log(placeName);
  };

$(function(){

  $("#southDakota").click(function(){
    display("stormi", southDakota);
    $('.jumbotron').css('background-image', 'url(img/southDakota.jpg)');

    });
  $("#portland").click(function(){
    display("stormi", portland);
    $('.jumbotron').css('background-image', 'url(img/portland.jpg)');
    });
  $("#japan").click(function(){
    $('.jumbotron').css('background-image', 'url(img/japan.jpg)');
    display("stormi", japan);
    });
  $("#philadelphia").click(function(){
    display("blake", philadelphia);
    $('.jumbotron').css('background-image', 'url(img/philadelphia.jpeg)');
    });
  $("#alameda").click(function(){
    display("blake", alameda);
    $('.jumbotron').css('background-image', 'url(img/alameda.jpeg)');
    });
  $("#cleveland").click(function(){
    display("blake", cleveland);
    $('.jumbotron').css('background-image', 'url(img/cleveland.jpeg)');
    });
});
