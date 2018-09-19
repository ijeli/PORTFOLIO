var content = $("#content");
var about = $("#about");
var works = $("#works");
var contact = $("#contact");
var skills = $("#skills");



about.on("click", function() {
    $("#aboutCard").removeClass("hidden")
    $("#aboutCard").addClass("fadeInDown animated")
    // $("#resumeCard").addClass("hidden")
    $("#worksCard").addClass("hidden")
    $("#contactCard").addClass("hidden")
    $("#aboutCard").removeClass("fadeOutUp ")
    $("#worksCard").removeClass("fadeOutUp ")
    $("#contactCard").removeClass("fadeOutUp ")
    $("#skillsCard").addClass("hidden")
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
    $("#skillsCard").addClass("hidden")

});

skills.on("click", function() {
    $("#aboutCard").addClass("hidden")
    // $("#resumeCard").addClass("hidden")
    $("#worksCard").addClass("hidden")
    $("#contactCard").addClass("hidden")
    $("#skillsCard").removeClass("hidden")
    $("#skillsCard").addClass("fadeInDown animated")
    $("#aboutCard").removeClass("fadeOutUp ")
    $("#worksCard").removeClass("fadeOutUp ")
    $("#skillsCard").removeClass("fadeOutUp ")
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
    $("#skillsCard").addClass("hidden")

});

$(".hideallbutton").on("click", function() {
    $("#aboutCard").addClass("fadeOutUp animated")
    $("#worksCard").addClass("fadeOutUp animated")
    $("#contactCard").addClass("fadeOutUp animated")
    $("#skillsCard").addClass("fadeOutUp animated")
});

$("#hideall").on("click", function () {
    $("#aboutCard").addClass("fadeOutUp animated")
    $("#worksCard").addClass("fadeOutUp animated")
    $("#contactCard").addClass("fadeOutUp animated")
});

$(".backtop").on("click", function () {
    window.scrollTo(0,0)
});





