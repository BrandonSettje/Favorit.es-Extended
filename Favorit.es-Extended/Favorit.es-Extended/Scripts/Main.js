$(document).ready(function () {
    $('body').on('click', '.photo a, .favorites a', function (event) {
        event.preventDefault();
        var theATag = $(this);
        var theATagHREF = theATag.attr('href');
        $.get(theATagHREF, function (data) {
            //theATag.children('div').toggleClass('heart');
            if (data == "favorited") {
                theATag.children('div').addClass('heart');
            }
            else if (data == 'unfavorited') {
                theATagHREF.children('div').removeClass('heart');
            }

        });

    });

    //$('body').on('click', '.photo a', function (event) {
    //    event.preventDefault();

    //    var theATag = $(this);
    //    var theATagHREF = theATag.attr('href');

    //    $.get(theATagHREF, function (data) {
    //        if (data == "OK") {
    //            theATag.children('div').addClass('heart');
    //        }
    //    });
    //});
    //$('body').on('click', '.favorite a', function (event) {
    //    event.preventDefault();

    //    var theATag = $(this);
    //    var theATagHREF = theATag.attr('href');

    //    $.get(theATagHREF, function (data) {
    //        if (data == "OK") {
    //            theATag.children('div').removeClass('heart');
    //        }
    //    });
    //});
});