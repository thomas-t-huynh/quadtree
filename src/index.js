import p5 from 'p5'
import { Rectangle, QuadTree, Point } from './quadtree'
import './style.css'
import Icon from './assets/react.png';

const div = document.createElement('div')
const h1 = document.createElement('h1')

h1.innerHTML = 'QUAD TREE'

div.appendChild(h1)

div.classList.add('title')

const myIcon = new Image();
myIcon.src = Icon;

document.body.appendChild(myIcon);

document.body.appendChild(div);

const height = 200
const width = 200

function random (n) {
    return Math.random() * n
}

function s(sketch) {
    sketch.setup = () => {
        sketch.createCanvas(400, 400)
        let boundary = new Rectangle(200, 200, 200, 200)
        let qt = new QuadTree(boundary, 4)
        console.log('before',qt)
        for (let i = 0; i < 5; i++) {
            let p = new Point(random(width), random(height))
            qt.insert(p)
        }
        console.log('after',qt)
    }
}

let myp5 = new p5(s)