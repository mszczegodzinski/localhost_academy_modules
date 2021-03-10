import helpers from './helpers'
helpers.someFn()

// example task
function isTriangleRectangular(x1: number, x2: number, x3: number): boolean {

    const [a, b, c] = [x1, x2, x3].sort((n1, n2) => n1 - n2)

    const areAllSidesPositive = a > 0
    if (!areAllSidesPositive) {
        throw new Error('triangle sides have to be positive numbers')
    }

    const canTriangeBeBuild = a + b > c
    if (!canTriangeBeBuild) {
        throw new Error('triangle cannot be build from this sides')
    }

    const canBuildRectangularTriangle = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)

    return canBuildRectangularTriangle
}

export default isTriangleRectangular