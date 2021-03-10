import isTriangleRectangular from './task'

// example app
function main(){
    try{
        const works = isTriangleRectangular(1,4,5)
        console.log('works', works)
    }
    catch(err){
        console.error(err.message)
    }
}

export default main