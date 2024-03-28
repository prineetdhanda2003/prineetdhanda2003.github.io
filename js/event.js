$(document).ready(function () {
    $("button").click(function () {
        $.getJSON('event.json', function (jd) {
            $.each(jd, function (i, field) {
                $("#event").prepend($('<img>', {id: 'event', src: field.image}));
                $("#title").html(field.title);
            });
        });
    });
});