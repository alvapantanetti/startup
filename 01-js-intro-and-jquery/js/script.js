$(document).ready(function (){
    $('.fade-in-paragraph').fadeIn(4000);
    $('.my-name-query').on('click', function(){
        $.ajax({
            url: 'http://bootcamp.aws.af.cm/welcome/Alvaro',
            success: function(data){
                console.log(data.response);
                $('.query-response').text(data.response);
            },
            error: function(){
                $('.content').css('background-color','red');
            }
        });
    });
    $('.spotify-query').on('click', function(){
        $.ajax({
            url:'https://api.spotify.com/v1/search?q=Rolling+Stones&type=album',
            success: function(response){
                $.each(response.albums.items, function(index,album){
                    $('.spotify-response').append('<article>'+'<h4>'+"Title:"+album.name+'</h4>'+'<br/>'+"Type:"+album.type+'<br/>'+'<img src="'+album.images[1].url+'" alt="album image"/>'+'<br/>'+"Link: "+'<a href="'+album.external_urls.spotify+'">Go to spotify page!</a>'+'</article>');
                    console.log(album);
                });
            }
        });
    });
});




