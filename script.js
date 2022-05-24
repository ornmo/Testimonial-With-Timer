const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'John McNeil',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/48.jpg',
        text: 'This lady did phenominal work for us. From start to finish she was a pleasure to work with, professional with excellent communication. I would recommend her to anyone',
    },
    {
        name: 'Simon De Vort',
        position: 'Owner',
        photo: 'https://randomuser.me/api/portraits/men/36.jpg',
        text: 'Orna&#39;s work was excellent. She helped us to resolve issues before they came up and explained clearly why she was recommending the solutions she did.',
    },
    {
        name: 'Jane Humphries',
        position: 'CEO',
        photo: 'https://randomuser.me/api/portraits/women/48.jpg',
        text: 'Orna helped us to create a quick and easy website that met and exceeded our needs. I will use her again',
    },
    {
        name: 'Elaine Dane',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/women/58.jpg',
        text: 'Thanks for all your help with our online needs Orna! Your help has made such a difference to the traffic to our site and in turn helped our business grow',
    },
]

let idx = 1

function updateTestinonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestinonial, 10000)
