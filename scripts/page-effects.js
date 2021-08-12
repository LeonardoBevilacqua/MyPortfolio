/* Profile panel effect */
let profile_panel_is_opened = true;
const profile_infos_elem = document.getElementById('profile-infos');
const toggle_profile_panel = (event) => {
    profile_panel_is_opened = !profile_panel_is_opened;
    if (!profile_panel_is_opened) {
        event.children['collapse-button-open'].classList.remove('d-none');
        event.children['collapse-button-close'].classList.add('d-none');
        profile_infos_elem.classList.add('hidden');
    } else {
        event.children['collapse-button-open'].classList.add('d-none');
        event.children['collapse-button-close'].classList.remove('d-none');
        profile_infos_elem.classList.remove('hidden');
    }
}
