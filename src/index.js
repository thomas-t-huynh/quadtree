import { createCanvas } from 'p5'
import { Rectangle, QuadTree } from './quadtree'

function setup() {
    createCanvas(400, 400)
    let boundary = new Rectangle(200, 200, 200, 200)
    let qt = new QuadTree(boundary, 4)

    for (let i = 0; i < 5; i++) {
        let p = new Point(random(width), random(height))
        qt.insert(p)
    }
    console.log(qt)
}

setup()