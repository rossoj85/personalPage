//technologies 
export const aframe ={name:'A-FRAME Virtual Reality Framework', img:'/photos/tech/Aframe.png'}
export const react = {name: 'React', img: '/photos/tech/react.png'}
export const redux ={name:'Redux', img: '/photos/tech/redux.png'}
export const postgres ={name: 'PostgreSQL Database', img:'/photos/tech/postgres.png'}
export const socket ={name:'Socket.io Websockets',img: '/photos/tech/socket.png'}
export const sequelize = {name: 'Sequelize', img: '/photos/tech/sequelize.png'}
export const feathers = {name: 'Feathers.js Server', img: '/photos/tech/feathers.jpg'}
export const translate ={name: 'Google Translate API', img: '/photos/tech/translate.jpg'}
export const nodeEx = {name: 'Express Server in Node.js', img: '/photos/tech/nodeEX.jpg'}
export const aws ={name: 'Amazon Web Services Image Hosting', img:'/photos/tech/aws.jpg'}
export const oauth = {name:'OAuth Authentication Service', img: '/photos/tech/oauth.png'}
export const p5 ={name: 'P5 Processing Environment', img:'/photos/tech/p5.png'}
export const css={name: 'CSS', img: '/photos/tech/css.jpg'}
//Projects 
export  const vart={name: 'V-aRt', 
img: '/photos/V-aRt-logo.png',
description: 'V-art is a digital three-dimensional VR art gallery. It gives users a canvas to create works of art, or allows them upload their own and place them in surrealistic 3-D environments. Users can save their works, share them with friends and browse the works of other artists.',
thumbs: ['/photos/nightScene.png','/photos/theDesert.png','/photos/vanGogh.png'],
technologies: [aframe,react,redux,feathers,postgres,aws],
youTube: 'https://www.youtube.com/embed/GZujO5liB9I',
github: 'https://github.com/VaRt-io/V-aRt',
site: 'https://tranquil-island-62126.herokuapp.com',
}

export const globeChat={name: 'Globe Chat', 
img: '/photos/languageTree.png',
description: 'Inspired my time teaching and learning languages abroad, Globe Chat is a Slack-inspired chat app that supports integrated language translation. Users set their language of preference and then receive all their message in said language. Globe chat makes use of the Goolgle translate app and Socket.io',
technologies:[react,redux,nodeEx,socket,postgres,translate],
thumbs: ['/photos/globeChatSS1.png','/photos/globeChatSS2.png'],
youTube:"https://www.youtube.com/embed/4hqXcIR77OM",
github: 'https://github.com/rossoj85/globe-Chat'
}

export const uShop={name: 'U-Shop', 
description: 'A fully integrated e-commerce site written in Node.js and React and supported by a postgreSQL database. U-Shop supports log-in and user authentication powered by OAuth, complete with both user and administrator accounts. Administrators can create, update and delete products, while users can browse the store and make purchases.',
img: '/photos/neonCart.png',
technologies: [react,redux,nodeEx,postgres,oauth],
github:'https://github.com/Fullstack-Untouchables/u-shop'
}

export const jsAcademy={name: 'Academy of Javascript',
description: 'My first major project at bootcamp. Academy of Javascript is a create, read, update and destroy (CRUD) appliction. The app is used to keep track of student and campus information at the fictional "Interplanetary Academy Of Javascript." Data is stored in a PostgresQL data base that users interact with through a React front-end and node/express backend.',
img: '/photos/planetIcon.png',
thumbs: ['/photos/jsAcademy1.png','/photos/jsAcademy2.png','/photos/jsAcademy3.png'],
technologies: [react,nodeEx,postgres],
github: 'https://github.com/rossoj85/senior-enrichment',
site: 'https://javascript-academy.herokuapp.com'
}


//VISUAL ART
export const vaporWave ={ name: 'Vaporwave',
    description: "A trip back into the 80's...",
    img: '/photos/vaporwave.png',
    technologies: [react, aframe],
    enterBtn: true,
    btnLink: 'projects/vaporwave'
}
export const rain={name: 'RAiN',
    description: "An experimental rain effect produced in P5.js with CSS layering",
    img: "/photos/rain.jpg",
    technologies: [p5, css],
    enterBtn: true,
    btnLink: '/projects/rain'
}
export const theDesert ={name: "The Desert",
    description: "A Dali-inspired 3D virtual reality scene built for V-aRt",
    img: "/photos/theDesert.png",
    technologies: [react, aframe],
    enterBtn: true,
    btnLink: '/projects/theDesert'
}
export const vanGogh={name: "Van Gogh",
    description: "A VanGogh-inspired 3D virtual reality scene built for V-aRt",
    img: '/photos/vanGogh.png',
    technologies: [react, aframe],
    enterBtn: true,
    btnLink:'/projects/vangogh'
};

export const nightScene={name: "NightScene",
    description: "A Halloween inspired 3D virtual reality scene built for V-aRt",
    img:'/photos/nightScene.png',
    technologies: [react, aframe],
    enterBtn: true,
    btnLink: '/projects/nightScene'
};


