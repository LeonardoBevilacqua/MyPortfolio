/**
 * Method responsible to handle the tabs
 * @param {the tab identification} id 
 */
function toggleTab(id) {
    // remove the current tab class
    currentTab = document.getElementsByClassName("currentTab")[0];
    currentTab.classList.remove("currentTab");

    currentSection = document.getElementsByClassName("currentSection")[0];
    currentSection.classList.replace("currentSection", "hidden");
    // add tab class to new current
    newCurrentTab = document.getElementById(id + "-tab");
    newCurrentTab.classList.add("currentTab");

    newCurrentSection = document.getElementById(id);
    newCurrentSection.classList.replace("hidden", "currentSection");
}

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

/*
=====
UTILS
=====
*/
function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open("GET", file, true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(JSON.parse(xobj.responseText));
          }
    };
    xobj.send(null);  
 }

/* 
=========
AUTO LOAD
=========
 */
(function() {
    loadExperiencesContent();
 })();