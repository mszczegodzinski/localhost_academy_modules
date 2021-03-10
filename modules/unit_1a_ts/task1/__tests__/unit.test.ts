import isTriangleRectangular from '../task'

describe('function works correctly',()=>{
    test('if shows error when sides are not positive numbers',()=>{
        try{
            isTriangleRectangular(-1,0,1)
        }
        catch(err){
            expect(err.message).toBe('triangle sides have to be positive numbers')
        }
    })
    test('if shows error when sides are able to build triangle',()=>{
        try{
            isTriangleRectangular(1,2,3)
        }
        catch(err){
            expect(err.message).toBe('triangle cannot be build from this sides')
        }
    })
    test('when shows false if sides arent able to build rectangular triangle',()=>{
        expect(isTriangleRectangular(3,4,5)).toBe(true)
        expect(isTriangleRectangular(2,2,2)).toBe(false)
    })
    test('when shows true if sides are able to build rectangular triangle',()=>{
        expect(isTriangleRectangular(3,4,5)).toBe(true)
        expect(isTriangleRectangular(2,2,2)).toBe(false)
    })
})