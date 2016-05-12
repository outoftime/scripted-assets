window.addAlbum = function(object) {
  var $container = $('<div class="album"></div>');
  var $image = $('<img>').attr('src', object.imageURL).appendTo($container);
  var $title = $('<div class="title"></div>').text(object.title).appendTo($container);
  var $year = $('<div class="year"></div>').text(object.year).appendTo($container);
}
