var content = $("#content");
var about = $("#about");
var resume = $("#resume");
var works = $("#works");
var contact = $("#contact");



about.on("click", function() {
    $("#aboutCard").removeClass("hidden")
    $("#aboutCard").addClass("fadeInDown animated")
    // $("#resumeCard").addClass("hidden")
    $("#worksCard").addClass("hidden")
    $("#contactCard").addClass("hidden")
    $("#aboutCard").removeClass("fadeOutRight ")
    $("#worksCard").removeClass("fadeOutRight ")
    $("#contactCard").removeClass("fadeOutRight ")
});

// resume.on("click", function() {
//     $("#aboutCard").addClass("hidden")
//     $("#resumeCard").removeClass("hidden")
//     $("#resumeCard").addClass("fadeInDown animated")
//     $("#worksCard").addClass("hidden")
//     $("#contactCard").addClass("hidden")
// });

works.on("click", function() {
    $("#aboutCard").addClass("hidden")
    // $("#resumeCard").addClass("hidden")
    $("#worksCard").removeClass("hidden")
    $("#worksCard").addClass("fadeInDown animated")
    $("#contactCard").addClass("hidden")
    $("#aboutCard").removeClass("fadeOutRight ")
    $("#worksCard").removeClass("fadeOutRight ")
    $("#contactCard").removeClass("fadeOutRight ")
});

contact.on("click", function() {
    $("#aboutCard").addClass("hidden")
    // $("#resumeCard").addClass("hidden")
    $("#worksCard").addClass("hidden")
    $("#contactCard").removeClass("hidden")
    $("#contactCard").addClass("fadeInDown animated")
    $("#aboutCard").removeClass("fadeOutRight ")
    $("#worksCard").removeClass("fadeOutRight ")
    $("#contactCard").removeClass("fadeOutRight ")
});

$(".hideallbutton").on("click", function() {
    $("#aboutCard").addClass("fadeOutRight animated")
    $("#worksCard").addClass("fadeOutRight animated")
    $("#contactCard").addClass("fadeOutRight animated")
});






