// locate content id 
const pageContent = document.getElementById('content');

if (pageContent) {
    console.log('found page content id');
} else {
    console.log('Could not find content id, please debug');
}

// pageContent data 

const msg = [
    'Cake can be delicious but so is little knowledge',
    'No one like a series spoiler',
    'In space we are lost for words',
    'The first two pieces of pizza will not be your last',
    'Knowing you know nothing can be smart',
    'Nothing done too fast is down well overall',
    'Take quick moments to slow down'
];

const emojis = [
    '😘',
    '😲',
    '🍍',
    '🦄',
    '🍕',
]

// generate random msg from array
let randomMsg = msg[Math.floor(Math.random()*msg.length)]

// generate random emoji from array
let randomEmoji = emojis[Math.floor(Math.random()*emojis.length)]

let copy = randomMsg + randomEmoji
const pageContentDataArticle = `
<article>${copy}</article>
` 

// load all page content
const pageContentData = pageContentDataArticle;

// add test element to content
if (pageContentData != '') {
    pageContent.innerHTML = pageContentData;
} else {
    console.log('No page content to add, start creating');
}
