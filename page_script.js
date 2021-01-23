/* 
======================
set the page variables
======================
*/
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modal-content");
const captionText = document.getElementById("caption");
var slideIndex = 1;
var touchStart;

/**
 * Method responsible to handle the tabs
 * @param {the tab identification} id 
 */
function toggleTab(id) {
    // remove the current tab class
    currentTab = document.getElementsByClassName("current-tab")[0];
    currentTab.classList.remove("current-tab");

    currentSection = document.getElementsByClassName("currentSection")[0];
    currentSection.classList.replace("currentSection", "hidden");
    // add tab class to new current
    newCurrentTab = document.getElementById(id + "-tab");
    newCurrentTab.classList.add("current-tab");

    newCurrentSection = document.getElementById(id);
    newCurrentSection.classList.replace("hidden", "currentSection");
}

/**
 * Method repsonsible to load the experiences content
 */
function loadExperiencesContent() {
    loadJSON("experiences.json", (experiencesData) => {
        // set total
        let iterations = experiencesData.length;
        // loop the data
        for (const experienceData of experiencesData) {
            /* === create experience div === */
            var experience = document.createElement("div");
            experience.className = "experience";

            /* === create experience name div === */
            var experienceName = document.createElement("div");
            experienceName.className = "experience-name";
            // title
            var title = document.createElement("h3");
            title.innerHTML = experienceData.name;
            // period
            var period = document.createElement("span");
            period.innerHTML = experienceData.period
                // append
            experienceName.append(title, period);
            experience.append(experienceName);

            /* === create paragraphs === */
            for (const content of experienceData.content) {
                var paragraph = document.createElement("p");
                paragraph.innerHTML = content;

                experience.append(paragraph);
            }

            /* === create end line if is not last === */
            if (--iterations) {
                var endline = document.createElement("hr");
                endline.className = "secondary";
                experience.append(endline);
            }

            document.getElementById("experiences").append(experience);
        }

    });
}

function loadProjectsContent() {
    loadJSON("projects.json", (projectsData) => {
        // set total
        let iterations = 1;
        // loop the data
        for (const projectData of projectsData) {
            /* === create the slide === */
            var projectSlide = document.createElement("div");
            projectSlide.className = "project-slide fade";

            /* === create the content container === */
            var project = document.createElement("div");
            project.className = "project";
            // title
            var projectName = document.createElement("div");
            projectName.className = "project-name";
            var title = document.createElement("h3");
            title.innerHTML = projectData.name;
            // append title
            projectName.append(title);
            project.append(projectName);

            /* === generate the content === */
            for (const content of projectData.content) {
                // set the value
                var contentValue;
                if (content.text) {
                    // set paragraphs
                    contentValue = document.createElement("p");
                    contentValue.innerHTML = content.text;
                } else if (content.image) {
                    // set image containers
                    var videoContainer = document.createElement("div");
                    videoContainer.className = "image-container";
                    // set image
                    var video = document.createElement("img");
                    video.className = "modal-triger";
                    video.setAttribute("alt", content.description);
                    video.setAttribute("src", content.image);
                    video.setAttribute("onClick", "setModalImage(this)");

                    var description = document.createElement("i");
                    description.innerHTML = content.description;

                    videoContainer.append(video);
                    videoContainer.append(description);

                    contentValue.append(videoContainer);
                } else if (content.video) {
                    // set video containers
                    var videoContainer = document.createElement("div");
                    videoContainer.className = "video-container";
                    // set video
                    var video = document.createElement("iframe");
                    video.setAttribute("alt", content.description);
                    video.setAttribute("src", content.video);
                    video.setAttribute("frameborder", "0");
                    video.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
                    video.setAttribute("allowfullscreen", "true");

                    var description = document.createElement("i");
                    description.innerHTML = content.description;

                    videoContainer.append(video);
                    videoContainer.append(description);

                    contentValue.append(videoContainer);
                }
                // append content value
                project.append(contentValue);
            }

            // append content container
            projectSlide.append(project);
            document.getElementById("slideshow-container").append(projectSlide);

            // generate dots for navigation
            var dot = document.createElement("span");
            dot.className = "dot";
            dot.setAttribute("onClick", `displaySlide(${iterations})`);
            document.getElementById("project-selector").append(dot);

            iterations++;
        }

        //display first slide
        displaySlide(1);

    });
}

/**
 * Method responsible to open modal with selected image
 * @param {selected image} img 
 */
function setModalImage(img) {
    // display modal
    modal.style.display = "flex";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

}

/**
 * Method responsible to close modal
 */
function closeModal() {
    modal.style.display = "none";
}

/**
 * Method responsible to another slide
 * @param {slide increment/decrement value} index 
 */
function navigateToSlide(index) {
    loadSlide(slideIndex += index);
}

/**
 * Method responsible to load the selected slide
 * @param {slide index value} index 
 */
function displaySlide(index) {
    loadSlide(slideIndex = index);
}

/**
 * Method responsible to load the slide
 * @param {slide index} index 
 */
function loadSlide(index) {
    // set const of slides and dots
    const slides = document.getElementsByClassName("project-slide");
    const dots = document.getElementsByClassName("dot");

    // change index if necessary
    slideIndex = index > slides.length ? 1 : index < 1 ? slides.length : slideIndex;

    // remove current selection
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        const dot = dots[i];

        slide.style.display = "none";
        dot.className = dot.className.replace(" active", "");
    }

    // set new slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*
=====
UTILS
=====
*/
/**
 * Method responsible to load a json content from file and execute a callback function
 * @param {the file path} file 
 * @param {callback function} callback 
 */
function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", file, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

/**
 * Method responsible to get the touch start position
 * @param {touch event} event 
 */
function onTouchStart(event) {
    touchStart = event.touches[0].clientX;
}

/**
 * Method responsible to get the touch end position
 * @param {touch event} event 
 */
function onTouchEnd(event) {
    var touchEnd = event.changedTouches[0].clientX;

    var swipeDirection = - Math.sign(touchEnd - touchStart);
    
    if (swipeDirection) {
        this.navigateToSlide(swipeDirection);
    }
}
/* 
=========
AUTO LOAD
=========
 */
/**
 * Executed when the page is loaded
 */
(function() {
    // load experiences content
    loadExperiencesContent();
    // load projects content
    loadProjectsContent();
    // toggle tab
    var path = window.location.href.split("#");
    if (path[1]) {
        toggleTab(path[1]);
    }
})();