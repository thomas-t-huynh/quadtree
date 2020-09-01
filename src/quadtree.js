export class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

export class Rectangle {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    contains(point) {
        // checks if point is within the boundary
        return (point.x > this.x - this.w &&
            point.x < this.x + this.w &&
            point.y > this.y - this.h &&
            point.y < this.y + this.h
        )
    }
}

export class QuadTree {
    constructor(boundary, n) {
        this.boundary = boundary
        this.capacity = n
        this.points = []
        this.divided = false
    }

    subdivide() {
        let { x, y, w, h } = this.boundary
        console.log(x, y, w, h)
        let ne = new Rectangle(x + w/2, y - h/2, w/2, h/2)
        this.nw = new QuadTree(ne, this.capacity)
        let nw= new Rectangle(x - w/2, y - h/2, w/2, h/2)
        this.ne = new QuadTree(nw, this.capacity)
        let se= new Rectangle(x + w/2, y + h/2, w/2, h/2)
        this.sw = new QuadTree(se, this.capacity)
        let sw = new Rectangle(x - w/2, y + h/2, w/2, h/2)
        this.se = new QuadTree(sw, this.capacity)
        this.divided = true
    }

    insert(point) {

        // checks if point in within boundaries
        if (!this.boundary.contains(point)) {
            return
        }

        if (this.points.length < this.capacity) {
            this.points.push(point)
        } else {
            if (!this.divided) {
                this.subdivide()
            }

            this.ne.insert(point)
            this.nw.insert(point)
            this.se.insert(point)
            this.sw.insert(point)


        }
    }
}