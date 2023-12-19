var upper1 = document.getElementById('upper1');
var upper2 = document.getElementById('upper2');
var upper3 = document.getElementById('upper3');
var lower1 = document.getElementById('lower1');
var lower2 = document.getElementById('lower2');
var lower3 = document.getElementById('lower3');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');

upper1.addEventListener("click", function() {
    option2.className = option2.className.replace(" active", "");
    option3.className = option3.className.replace(" active", "");
    option1.className += " active";
    lower2.className = lower2.className.replace(" displaying", "");
    lower3.className = lower3.className.replace(" displaying", "");
    lower1.className += " displaying";
});

upper2.addEventListener("click", function() {
    option1.className = option1.className.replace(" active", "");
    option3.className = option3.className.replace(" active", "");
    option2.className += " active";
    lower1.className = lower1.className.replace(" displaying", "");
    lower3.className = lower3.className.replace(" displaying", "");
    lower2.className += " displaying";
});

upper3.addEventListener("click", function() {
    option1.className = option1.className.replace(" active", "");
    option3.className = option3.className.replace(" active", "");
    option3.className += " active";
    lower2.className = lower2.className.replace(" displaying", "");
    lower1.className = lower1.className.replace(" displaying", "");
    lower3.className += " displaying";
});