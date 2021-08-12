/* Profile panel effect */
let profile_panel_is_opened = false;

const section_is_opened = {
    'skills': true,
    'experiences': false,
    'portfolio-cards': false
}
const profile_infos_elem = document.getElementById('profile-infos');
const toggle_profile_panel = (event) => {
    profile_panel_is_opened = !profile_panel_is_opened;
    if (!profile_panel_is_opened) {
        event.children[0].classList.remove('d-none');
        event.children[1].classList.remove('d-none');
        event.children[2].classList.add('d-none');
        profile_infos_elem.classList.add('hidden');
    } else {
        event.children[0].classList.add('d-none');
        event.children[1].classList.add('d-none');
        event.children[2].classList.remove('d-none');
        profile_infos_elem.classList.remove('hidden');
    }
}

/* Sections effect */
const toggle_section = (event, section_id) => {
    section_is_opened[section_id] = !section_is_opened[section_id];
    console.log(section_is_opened[section_id])
    
    const section = document.getElementById(section_id);
    if (!section_is_opened[section_id]) {
        event.children[0].classList.remove('d-none');
        event.children[1].classList.add('d-none');
        section.classList.add('hidden');
    } else {
        event.children[0].classList.add('d-none');
        event.children[1].classList.remove('d-none');
        section.classList.remove('hidden');
    }
}
