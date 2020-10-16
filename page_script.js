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