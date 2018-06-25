$(document).ready(function() {
    $(".dummy").viewportChecker({
        offset: "98%",
        repeat: !0,
        callbackFunction: function(e, o) {
            console.log(o), "add" == o ? $(".plashka").addClass("fixed") : $(".plashka").removeClass("fixed")
        }
    })
});
