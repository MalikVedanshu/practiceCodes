//     6
//    4 5
//   7 4 2
//  3 9 8 12

 

// let object = [[1,2,3],[4,5,6], [7,8,9], [10,11,12]]
// let lastiteration = object[object.length - 1]
// for(let i = 0; i < lastiteration.length; i++) {
//     for(let j = 0; j < object.length; j++){
//         console.log(object[j][i])
//     }
// }   


let object = [[1],[2,3],[4,5,6],[7,8,9,10]]



for(let i = object.length - 1; i >= 0; i--) {  
    for(let j = 0; j < object[i].length ; j++) {
        console.log(object[i][j], object[i-1][j])
    }
}
