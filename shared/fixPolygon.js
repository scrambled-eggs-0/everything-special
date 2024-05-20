// takes in a series of points and computes the minimum convex hull
// which is what we need for SAT polygons. 
window.fixPolygon = (points) => {
    return new GrahamScan(points).hull;
}

const X = 0;
const Y = 1;
const REMOVED = -1;
class GrahamScan {
    constructor(points=[[0,1],[1,1]]){
        this.points = points;
        this.hull = this.getHull();
    }
    getHull() {
        const pivot = this.preparePivotPoint();

        let indexes = Array.from(this.points, (point, i) => i);
        const angles = Array.from(this.points, (point) => this.getAngle(pivot, point));
        const distances = Array.from(this.points, (point) => this.euclideanDistanceSquared(pivot, point));

        // sort by angle and distance
        indexes.sort((i, j) => {
            const angleA = angles[i];
            const angleB = angles[j];
            if (angleA === angleB) {
                const distanceA = distances[i];
                const distanceB = distances[j];
                return distanceA - distanceB;
            }
            return angleA - angleB;
        });

        // remove points with repeated angle (but never the pivot, so start from i=1)
        for (let i = 1; i < indexes.length - 1; i++) {
            if (angles[indexes[i]] === angles[indexes[i + 1]]) {  // next one has same angle and is farther
                indexes[i] = REMOVED;  // remove it logically to avoid O(n) operation to physically remove it
            }
        }

        const hull = [];
        for (let i = 0; i < indexes.length; i++) {
            const index = indexes[i];
            const point = this.points[index];

            if (index !== REMOVED) {
                if (hull.length < 3) {
                    hull.push(point);
                } else {
                    while (this.checkOrientation(hull[hull.length - 2], hull[hull.length - 1], point) > 0) {
                        hull.pop();
                    }
                    hull.push(point);
                }
            }
        }

        return hull.length < 3 ? [] : hull;
    }
    checkOrientation(p1, p2, p3) {
        return (p2[Y] - p1[Y]) * (p3[X] - p2[X]) - (p3[Y] - p2[Y]) * (p2[X] - p1[X]);
    }
    getAngle(a, b) {
        return Math.atan2(b[Y] - a[Y], b[X] - a[X]);
    }
    euclideanDistanceSquared(p1, p2) {
        const a = p2[X] - p1[X];
        const b = p2[Y] - p1[Y];
        return a * a + b * b;
    }
    preparePivotPoint() {
        let pivot = this.points[0];
        for (let i = 1; i < this.points.length; i++) {
            const point = this.points[i];
            if (point[Y] < pivot[Y] || point[Y] === pivot[Y] && point[X] < pivot[X]) {
                pivot = point;
            }
        }
        return pivot;
    }
}