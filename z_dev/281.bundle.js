"use strict";(self.webpackChunkomniserver=self.webpackChunkomniserver||[]).push([[281],{281:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// takes in a series of points and computes the minimum convex hull\r\n// which is what we need for SAT polygons. \r\nwindow.fixPolygon = (points) => {\r\n    return new GrahamScan(points).hull;\r\n}\r\n\r\nconst X = 0;\r\nconst Y = 1;\r\nconst REMOVED = -1;\r\nclass GrahamScan {\r\n    constructor(points=[[0,1],[1,1]]){\r\n        this.points = points;\r\n        this.hull = this.getHull();\r\n    }\r\n    getHull() {\r\n        const pivot = this.preparePivotPoint();\r\n\r\n        let indexes = Array.from(this.points, (point, i) => i);\r\n        const angles = Array.from(this.points, (point) => this.getAngle(pivot, point));\r\n        const distances = Array.from(this.points, (point) => this.euclideanDistanceSquared(pivot, point));\r\n\r\n        // sort by angle and distance\r\n        indexes.sort((i, j) => {\r\n            const angleA = angles[i];\r\n            const angleB = angles[j];\r\n            if (angleA === angleB) {\r\n                const distanceA = distances[i];\r\n                const distanceB = distances[j];\r\n                return distanceA - distanceB;\r\n            }\r\n            return angleA - angleB;\r\n        });\r\n\r\n        // remove points with repeated angle (but never the pivot, so start from i=1)\r\n        for (let i = 1; i < indexes.length - 1; i++) {\r\n            if (angles[indexes[i]] === angles[indexes[i + 1]]) {  // next one has same angle and is farther\r\n                indexes[i] = REMOVED;  // remove it logically to avoid O(n) operation to physically remove it\r\n            }\r\n        }\r\n\r\n        const hull = [];\r\n        for (let i = 0; i < indexes.length; i++) {\r\n            const index = indexes[i];\r\n            const point = this.points[index];\r\n\r\n            if (index !== REMOVED) {\r\n                if (hull.length < 3) {\r\n                    hull.push(point);\r\n                } else {\r\n                    while (this.checkOrientation(hull[hull.length - 2], hull[hull.length - 1], point) > 0) {\r\n                        hull.pop();\r\n                    }\r\n                    hull.push(point);\r\n                }\r\n            }\r\n        }\r\n\r\n        return hull.length < 3 ? [] : hull;\r\n    }\r\n    checkOrientation(p1, p2, p3) {\r\n        return (p2[Y] - p1[Y]) * (p3[X] - p2[X]) - (p3[Y] - p2[Y]) * (p2[X] - p1[X]);\r\n    }\r\n    getAngle(a, b) {\r\n        return Math.atan2(b[Y] - a[Y], b[X] - a[X]);\r\n    }\r\n    euclideanDistanceSquared(p1, p2) {\r\n        const a = p2[X] - p1[X];\r\n        const b = p2[Y] - p1[Y];\r\n        return a * a + b * b;\r\n    }\r\n    preparePivotPoint() {\r\n        let pivot = this.points[0];\r\n        for (let i = 1; i < this.points.length; i++) {\r\n            const point = this.points[i];\r\n            if (point[Y] < pivot[Y] || point[Y] === pivot[Y] && point[X] < pivot[X]) {\r\n                pivot = point;\r\n            }\r\n        }\r\n        return pivot;\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgxLmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbW5pc2VydmVyLy4vc2hhcmVkL2ZpeFBvbHlnb24uanM/MDRmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YWtlcyBpbiBhIHNlcmllcyBvZiBwb2ludHMgYW5kIGNvbXB1dGVzIHRoZSBtaW5pbXVtIGNvbnZleCBodWxsXHJcbi8vIHdoaWNoIGlzIHdoYXQgd2UgbmVlZCBmb3IgU0FUIHBvbHlnb25zLiBcclxud2luZG93LmZpeFBvbHlnb24gPSAocG9pbnRzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IEdyYWhhbVNjYW4ocG9pbnRzKS5odWxsO1xyXG59XHJcblxyXG5jb25zdCBYID0gMDtcclxuY29uc3QgWSA9IDE7XHJcbmNvbnN0IFJFTU9WRUQgPSAtMTtcclxuY2xhc3MgR3JhaGFtU2NhbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb2ludHM9W1swLDFdLFsxLDFdXSl7XHJcbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XHJcbiAgICAgICAgdGhpcy5odWxsID0gdGhpcy5nZXRIdWxsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRIdWxsKCkge1xyXG4gICAgICAgIGNvbnN0IHBpdm90ID0gdGhpcy5wcmVwYXJlUGl2b3RQb2ludCgpO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXhlcyA9IEFycmF5LmZyb20odGhpcy5wb2ludHMsIChwb2ludCwgaSkgPT4gaSk7XHJcbiAgICAgICAgY29uc3QgYW5nbGVzID0gQXJyYXkuZnJvbSh0aGlzLnBvaW50cywgKHBvaW50KSA9PiB0aGlzLmdldEFuZ2xlKHBpdm90LCBwb2ludCkpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlcyA9IEFycmF5LmZyb20odGhpcy5wb2ludHMsIChwb2ludCkgPT4gdGhpcy5ldWNsaWRlYW5EaXN0YW5jZVNxdWFyZWQocGl2b3QsIHBvaW50KSk7XHJcblxyXG4gICAgICAgIC8vIHNvcnQgYnkgYW5nbGUgYW5kIGRpc3RhbmNlXHJcbiAgICAgICAgaW5kZXhlcy5zb3J0KChpLCBqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlQSA9IGFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGVCID0gYW5nbGVzW2pdO1xyXG4gICAgICAgICAgICBpZiAoYW5nbGVBID09PSBhbmdsZUIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlQSA9IGRpc3RhbmNlc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlQiA9IGRpc3RhbmNlc1tqXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZUEgLSBkaXN0YW5jZUI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFuZ2xlQSAtIGFuZ2xlQjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHBvaW50cyB3aXRoIHJlcGVhdGVkIGFuZ2xlIChidXQgbmV2ZXIgdGhlIHBpdm90LCBzbyBzdGFydCBmcm9tIGk9MSlcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4ZXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmdsZXNbaW5kZXhlc1tpXV0gPT09IGFuZ2xlc1tpbmRleGVzW2kgKyAxXV0pIHsgIC8vIG5leHQgb25lIGhhcyBzYW1lIGFuZ2xlIGFuZCBpcyBmYXJ0aGVyXHJcbiAgICAgICAgICAgICAgICBpbmRleGVzW2ldID0gUkVNT1ZFRDsgIC8vIHJlbW92ZSBpdCBsb2dpY2FsbHkgdG8gYXZvaWQgTyhuKSBvcGVyYXRpb24gdG8gcGh5c2ljYWxseSByZW1vdmUgaXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaHVsbCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4ZXNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5wb2ludHNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBSRU1PVkVEKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaHVsbC5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHVsbC5wdXNoKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hlY2tPcmllbnRhdGlvbihodWxsW2h1bGwubGVuZ3RoIC0gMl0sIGh1bGxbaHVsbC5sZW5ndGggLSAxXSwgcG9pbnQpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodWxsLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBodWxsLnB1c2gocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaHVsbC5sZW5ndGggPCAzID8gW10gOiBodWxsO1xyXG4gICAgfVxyXG4gICAgY2hlY2tPcmllbnRhdGlvbihwMSwgcDIsIHAzKSB7XHJcbiAgICAgICAgcmV0dXJuIChwMltZXSAtIHAxW1ldKSAqIChwM1tYXSAtIHAyW1hdKSAtIChwM1tZXSAtIHAyW1ldKSAqIChwMltYXSAtIHAxW1hdKTtcclxuICAgIH1cclxuICAgIGdldEFuZ2xlKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihiW1ldIC0gYVtZXSwgYltYXSAtIGFbWF0pO1xyXG4gICAgfVxyXG4gICAgZXVjbGlkZWFuRGlzdGFuY2VTcXVhcmVkKHAxLCBwMikge1xyXG4gICAgICAgIGNvbnN0IGEgPSBwMltYXSAtIHAxW1hdO1xyXG4gICAgICAgIGNvbnN0IGIgPSBwMltZXSAtIHAxW1ldO1xyXG4gICAgICAgIHJldHVybiBhICogYSArIGIgKiBiO1xyXG4gICAgfVxyXG4gICAgcHJlcGFyZVBpdm90UG9pbnQoKSB7XHJcbiAgICAgICAgbGV0IHBpdm90ID0gdGhpcy5wb2ludHNbMF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMucG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBpZiAocG9pbnRbWV0gPCBwaXZvdFtZXSB8fCBwb2ludFtZXSA9PT0gcGl2b3RbWV0gJiYgcG9pbnRbWF0gPCBwaXZvdFtYXSkge1xyXG4gICAgICAgICAgICAgICAgcGl2b3QgPSBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGl2b3Q7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///281\n")}}]);