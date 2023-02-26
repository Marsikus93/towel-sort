
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res=[]
    let isReverse=false
    if (!matrix){return res}
    for (a of matrix){
        let c =isReverse ? a.reverse():a
        for (b of c ){
            res.push(b)
        }
        isReverse=!isReverse
    }
  return res;
}
