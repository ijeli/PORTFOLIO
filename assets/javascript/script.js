var content = $("#content");
var about = $("#about");
var resume = $("#resume");
var works = $("#works");
var contact = $("#contact");

// about.hover(
//     function() { $("#aboutCard").removeClass("hidden")
//     }, 
//     function() { $("#aboutCard").addClass("hidden")
// });

// resume.hover(
//     function() { $("#resumeCard").css("display", "inherit")
//     }, 
//     function() { $("#resumeCard").css("display", "none")
// });

// works.hover(
//     function() { $("#worksCard").css("display", "inherit")
//     }, 
//     function() { $("#worksCard").css("display", "none")
// });

// contact.hover(
//     function() { $("#contactCard").css("display", "inherit")
//     }, 
//     function() { $("#contactCard").css("display", "none")
// });


about.on("click", function() {
    $("#aboutCard").removeClass("hidden")
    $("#aboutCard").addClass("fadeInDown animated")
    $("#resumeCard").addClass("hidden")
    $("#worksCard").addClass("hidden")
    $("#contactCard").addClass("hidden")
});

resume.on("click", function() {
    $("#aboutCard").addClass("hidden")
    $("#resumeCard").removeClass("hidden")
    $("#resumeCard").addClass("fadeInDown animated")
    $("#worksCard").addClass("hidden")
    $("#contactCard").addClass("hidden")
});

works.on("click", function() {
    $("#aboutCard").addClass("hidden")
    $("#resumeCard").addClass("hidden")
    $("#worksCard").removeClass("hidden")
    $("#worksCard").addClass("fadeInDown animated")
    $("#contactCard").addClass("hidden")
});

contact.on("click", function() {
    $("#aboutCard").addClass("hidden")
    $("#resumeCard").addClass("hidden")
    $("#worksCard").addClass("hidden")
    $("#contactCard").removeClass("hidden")
    $("#contactCard").addClass("fadeInDown animated")
});






