$(document).ready(function(){
    $.getJSON(
    'src/config/left-nav.json',
    function(data) {
        $('#tree1').tree({
            data: data
        });
    }
    );
});