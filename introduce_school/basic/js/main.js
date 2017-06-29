/* 양영디지털 고등학교 나영채 */
        // resize / ready
        function winSet(){
            $('.con').css("height", $(window).height());
            $('.page_num').css("top", $(window).height()/2-200)
        }
        
        // scroll
        function con_scroll(n,s){
            $('html, body').stop().animate({
                scrollTop : $('.con').eq(n).offset().top
            }, s);
            $('.nav_btn').eq(n).addClass("this").siblings().removeClass("this");
        }
        
        // map
        function mapSetting (){
            var latlng = new google.maps.LatLng(37.374178, 127.141053);
            var myOptions = {
                zoom: 14,
                center:latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), myOptions);
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: "양영디지털고등학교"
            });
            var infowindow = new google.maps.InfoWindow({
                content:'<h5><a href="http://y-y.hs.kr">양영디지털고등학교</a></h5>',
                maxWidth:300
            })
            google.maps.event.addListener(marker, 'click', function(){
                infowindow.open(map, marker);
            })
        }
        
        $(document).ready(function(){
            winSet();
            mapSetting();
            $('.nav_btn').eq(0).addClass("this");
            setTimeout(function(){
                $('#c0 svg').remove()
                $('#sdown').animate({
                    top:'50%'
                }, 1000)
                $('#sdown').animate({
                    top:'48%'
                }, 200)
                $('#sdown').animate({
                    top:'50%'
                }, 200)
            },7000);
        });
        $(window).resize(winSet);
        $(document).on('mousewheel', function(e){
            if ($("html").is(":animated") || $("body").is(":animated") ) return;
            for(var i=0;i<6;i++){
                if($(window).scrollTop()+1 > $(document).height() - $(window).height()){
                    if(e.originalEvent.wheelDelta >= 0){ // up
                        con_scroll(4, 400)   
                    }
                }else if($(document).scrollTop()-$(".con").height()/2 < $(".con").eq(i).offset().top &&
                    $(document).scrollTop()+$(".con").height()/2 > $(".con").eq(i).offset().top){
                    if(e.originalEvent.wheelDelta >= 0){ // up
                        if(i != 0){con_scroll(i-1, 850);}
                    }else{ // down
                        if(i != 5){con_scroll(i+1, 850);}
                    }
                    break;
                }   
            }
        });