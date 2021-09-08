/* Profile panel effect */
let profile_panel_is_opened = false

const section_is_opened = {
    'skills': true,
    'experiences': false,
    'portfolio-cards': false
}
const profile_infos_elem = document.getElementById('profile-infos')
const toggle_profile_panel = (event) => {
    profile_panel_is_opened = !profile_panel_is_opened
    if (!profile_panel_is_opened) {
        event.children[0].classList.remove('d-none')
        event.children[1].classList.remove('d-none')
        event.children[2].classList.add('d-none')
        profile_infos_elem.classList.add('hidden')
    } else {
        event.children[0].classList.add('d-none')
        event.children[1].classList.add('d-none')
        event.children[2].classList.remove('d-none')
        profile_infos_elem.classList.remove('hidden')
    }
}

/* Sections effect */
const toggle_section = (event, section_id) => {
    section_is_opened[section_id] = !section_is_opened[section_id]

    const section = document.getElementById(section_id)
    if (!section_is_opened[section_id]) {
        event.children[0].classList.remove('d-none')
        event.children[1].classList.add('d-none')
        section.classList.add('hidden')
    } else {
        event.children[0].classList.add('d-none')
        event.children[1].classList.remove('d-none')
        section.classList.remove('hidden')
    }
}

/* Modal effect */
const modal = document.getElementById('modal')
const page_body = document.getElementsByTagName('body')[0]
const open_modal = async (data_id) => {
    const portfolio_info = await load_json('./../data/portfolio-info.json')
    let info = portfolio_info.find(portfolio => portfolio.id == data_id)

    console.log(info)
    // set header
    modal.getElementsByTagName('h2')[0].innerHTML = info.name
    // set body
    const body = modal.getElementsByClassName('modal-body')[0]
    for (const content of info.content) {
        if (content.text) {
            // set paragraphs
            const content_value = document.createElement('p')
            content_value.innerHTML = content.text

            body.append(content_value)
            continue
        } 
       if (content.image) {
           // set image containers
           const image_container = document.createElement('div')
           image_container.className = 'image-container'
           // set image
           const image = document.createElement('img')
           image.className = 'modal-triger'
           image.setAttribute('alt', content.description)
           image.setAttribute('src', content.image)
           image.setAttribute('onClick', 'set_modal_image(this)')
           
           let description = document.createElement('i')
           description.innerHTML = content.description
           
           image_container.append(image)
           image_container.append(description)
           
           body.append(image_container)
           continue
        } 

         if (content.video) {
            // set video containers
            const video_container = document.createElement('div')
            video_container.className = 'video-container'
            // set video
            let video = document.createElement('iframe')
            video.setAttribute('alt', content.description)
            video.setAttribute('src', content.video)
            video.setAttribute('frameborder', '0')
            video.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')
            video.setAttribute('allowfullscreen', 'true')

            let description = document.createElement('i')
            description.innerHTML = content.description

            video_container.append(video)
            video_container.append(description)

            body.append(video_container)
            continue
        }
    }

    modal.classList.remove('hidden')
    page_body.classList.add('modal-opened')
    
}

const close_modal = () => {
    modal.classList.add('hidden')
    page_body.classList.remove('modal-opened')
    // clear header
    modal.getElementsByTagName('h2')[0].innerHTML = ''
    // clear body
    const body = modal.getElementsByClassName('modal-body')[0]
    body.innerHTML = ''
}

window.onclick = (event) => {
    if (event.target == modal) {
        close_modal()
    }
  }

/* Age calculation */
const calculate_age = () => {
    var diff_ms = Date.now() - new Date(1997, 10, 1).getTime()
    var age_dt = new Date(diff_ms)

    document.getElementById('current-age').append(Math.abs(age_dt.getUTCFullYear() - 1970))
}

/* call functions */
calculate_age()

/*
=====
UTILS
=====
*/
/**
 * Method responsible to load a json content from file and execute a callback function
 * @param {the file path} file 
 */
load_json = (file) => {
    return new Promise((resolve) => {
        var xobj = new XMLHttpRequest()
        xobj.overrideMimeType('application/json')
        xobj.open('GET', file)
        xobj.onreadystatechange = () => {
            if (xobj.status == 200 && xobj.readyState == 4) {
                resolve(JSON.parse(xobj.responseText))
            }
        }
        xobj.send()
    })
}
