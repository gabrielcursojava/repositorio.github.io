function animateProject(project) {
    project.classList.add('animate');
}


$(document).ready(function(){
    $(".titulo-animate").each(function(){
        animateProject(this);
    });
});
$(document).ready(function(){
    animateProject(document.querySelector('header img'));
    animateProject(document.querySelector('header h1'));
});