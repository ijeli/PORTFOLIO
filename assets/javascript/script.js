var content = $("#content");
var about = $("#about");
var works = $("#works");
var contact = $("#contact");



about.on("click", function() {
    $("#aboutCard").removeClass("hidden")
    $("#aboutCard").addClass("fadeInDown animated")
    // $("#resumeCard").addClass("hidden")
    $("#worksCard").addClass("hidden")
    $("#contactCard").addClass("hidden")
    $("#aboutCard").removeClass("fadeOutUp ")
    $("#worksCard").removeClass("fadeOutUp ")
    $("#contactCard").removeClass("fadeOutUp ")
});


works.on("click", function() {
    $("#aboutCard").addClass("hidden")
    // $("#resumeCard").addClass("hidden")
    $("#worksCard").removeClass("hidden")
    $("#worksCard").addClass("fadeInDown animated")
    $("#contactCard").addClass("hidden")
    $("#aboutCard").removeClass("fadeOutUp ")
    $("#worksCard").removeClass("fadeOutUp ")
    $("#contactCard").removeClass("fadeOutUp ")
});

contact.on("click", function() {
    $("#aboutCard").addClass("hidden")
    // $("#resumeCard").addClass("hidden")
    $("#worksCard").addClass("hidden")
    $("#contactCard").removeClass("hidden")
    $("#contactCard").addClass("fadeInDown animated")
    $("#aboutCard").removeClass("fadeOutUp ")
    $("#worksCard").removeClass("fadeOutUp ")
    $("#contactCard").removeClass("fadeOutUp ")
});

$(".hideallbutton").on("click", function() {
    $("#aboutCard").addClass("fadeOutUp animated")
    $("#worksCard").addClass("fadeOutUp animated")
    $("#contactCard").addClass("fadeOutUp animated")
});






