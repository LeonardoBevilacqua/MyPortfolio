/* Profile panel effect */
let profile_panel_is_opened = false;
const profile_infos_elem = document.getElementById('profile-infos');
const toggle_profile_panel = (event) => {
    profile_panel_is_opened = !profile_panel_is_opened;
    if (!profile_panel_is_opened) {
        event.children[0].classList.remove('d-none');
        event.children[1].classList.add('d-none');
        profile_infos_elem.classList.add('hidden');
    } else {
        event.children[0].classList.add('d-none');
        event.children[1].classList.remove('d-none');
        profile_infos_elem.classList.remove('hidden');
    }
}
