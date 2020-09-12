let courses = [{
    id: 1,
    title: 'The basis of Web development',
    tags: 'HTML, CSS, RWD',
    description: 'Basics of HTML, CSS, semantics, good code writing practices and RWD. Create awsome responsive websites!',
    prices: {
        new: 20,
        old: 100,
        free: false
    },
    link: 'https://www.udemy.com/course/od-zera-do-front-end-developera-cz1/?couponCode=6CF428EE836BC00A1870',
    img: './assets/c-part1.jpg',
    tag: {
        show: true,
        type: 'hot-offer',
        daysleft: 2
    }
}, {
    id: 2,
    title: 'The intermediate Web development',
    tags: 'SASS, JS, Bootstrap',
    description: 'Advanced CSS, JavaScript basics, Bootstrap and more! Learn to create responsive and very professional websites!',
    prices: {
        new: 25,
        old: 125,
        free: false
    },
    link: 'https://www.udemy.com/course/od-zera-do-front-end-developera-cz2/?couponCode=594BE6C39C803E9FDD9E',
    img: `./assets/c-part2.jpg`,
    tag: {
        show: true,
        type: 'hot-offer',
        daysleft: 2
    }
},
{
    id: 3,
    title: 'The advanced Web development',
    tags: 'Git, BEM, Flexbox, Grid, Projects',
    description: "Git and GitHub basics, BEM methodology and you'll create some advanced front-end projects. Join now!",
    prices: {
        new: 30,
        old: 130,
        free: false
    },
    link: 'https://www.udemy.com/course/od-zera-do-front-end-developera-cz2/?couponCode=594BE6C39C803E9FDD9E',
    img: `./assets/c-part3.jpg`,
    tag: {
        show: true,
        type: 'hot-offer',
        daysleft: 2
    }
},
{
    id: 4,
    title: 'JavaScript',
    tags: 'JavaScript, JSON, OOP',
    description: "Learn JavaScript from scratch and learn advanced applications! Projects, Objects, JSON and more...",
    prices: {
        new: 30,
        old: 130,
        free: false
    },
    link: 'https://www.udemy.com/course/javascript-jedyny-kurs-ktorego-potrzebujesz/?couponCode=EE8C595AABE66BE14CEC',
    img: `./assets/c-js.jpg`,
    tag: {
        show: true,
        type: 'hot-offer',
        daysleft: 2
    }
}, {
    id: 5,
    title: '10 projects in pure JavaScript part 1',
    tags: 'Projecs, API',
    description: "Convert your theoretical knowledge into practical knowledge and build 10 projects in JavaScript! :) ",
    prices: {
        new: 30,
        old: 130,
        free: false
    },
    link: 'https://www.udemy.com/course/javascript-jedyny-kurs-ktorego-potrzebujesz/?couponCode=EE8C595AABE66BE14CEC',
    img: `./assets/c-jsp.jpg`,
    tag: {
        show: true,
        type: 'hot-offer',
        daysleft: 2
    }
}, {
    id: 6,
    title: '10 projects in pure JavaScript part 2',
    tags: 'Projecs, API, OOP',
    description: "Convert your theoretical knowledge into practical knowledge and build 10 projects in JavaScript! :) ",
    prices: {
        new: '??',
        old: "???",
        free: false
    },
    link: 'https://www.udemy.com/course/10-projektow-w-czystym-javascript-cz-1/?couponCode=F0455B9B20140F07EC46',
    img: `./assets/c-jsp2.jpg`,
    tag: {
        show: true,
        type: 'hot-offer',
        daysleft: 2
    }
}, {
    id: 7,
    title: 'Bootstrap From Scratch',
    tags: 'Bootstrap, Layout, Components',
    description: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit.",
    prices: {
        new: 10,
        old: 50,
        free: false
    },
    link: 'https://www.udemy.com/course/bootstrap-flexbox-od-podstaw-projekty/?couponCode=1B32719C86326B4C9C8C',
    img: `./assets/c-bootstrap.jpg`,
    tag: {
        show: true,
        type: 'hot-offer',
        daysleft: 2
    }
}, {
    id: 8,
    title: 'Visual Studio Code',
    tags: 'VSC, Extensions',
    description: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
    prices: {
        new: 0,
        old: 0,
        free: true
    },
    link: 'https://www.youtube.com/watch?v=_JBGV8jVcbw&feature=youtu.be&ab_channel=MMCSchool',
    img: `./assets/c-vsc.png`,
    tag: {
        show: true,
        type: 'hot-offer',
        daysleft: 2
    }
}, {
    id: 9,
    title: 'CSS GRID Course',
    tags: 'CSS, GRID, Layout',
    description: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
    prices: {
        new: 0,
        old: 0,
        free: true
    },
    link: 'https://www.youtube.com/playlist?list=PLxv_3XVN6Gc2Ki7m4H4vJAnDpnwysjD7C',
    img: `./assets/c-grid.jpg`,
    tag: {
        show: true,
        type: 'hot-offer',
        daysleft: 2
    }
}
];


// const fetchData = () => {
//     console.log("fetch");
//     console.log(courses);
//     fetch("../data/courses.json")
//         .then((res) => res.json())
//         .then((data) => {
//             courses = data.courses;
//             console.log(courses);
//         })
//         .catch(err => console.log(err))
// }

// fetchData();


const coursesContainer = document.querySelector('.courses-container');

const uploadData = () => {
    courses.forEach(course => {
        createCourseCard(course)
    })
}

const createCourseCard = course => {
    const courseCard = document.createElement("a");
    courseCard.classList.add('course-item');
    courseCard.setAttribute('href', course.link)
    courseCard.innerHTML = `
                    <div class="card">
                        <div class="card__head" style=" background-image: url(${course.img});">
                            <div class="card__tag">
                                <i class="fas fa-fire"></i>
                                <p>HOT OFFER, ${course.tag.daysleft} days left</p>
                            </div>
                        </div>
                        <div class="card__body">
                            <div class="card__title">
                                <div class="card__theme">${course.tags}</div>
                                <div class="card__course-title">${course.title}
                                </div>
                                <p class="card__description">
                                    ${course.description}</p>
                            </div>
                            <div class="card__footer">
                                <div class="card__btn">
                                    <button class="btn btn--primary btn--s">Enroll now</button>
                                </div>
                                <div class="card__prices">
                                    <p class="new-price">$${course.prices.new}</p>
                                    <p class="old-price">$${course.prices.old}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    `
    console.log(course.img);
    coursesContainer.appendChild(courseCard)
}





uploadData()


