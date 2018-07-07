function produceDrivingRange(totalRange){
  return function (block1, block2){
    let range = parseInt(block2) - parseInt(block1)
      if (range < totalRange) {
        return `within range by ${totalRange - range}`
      } else {
        return `${range - totalRange} blocks out of range`
      }
  }
}


function produceTipCalculator(percentage){
  return function(total){
    return total*percentage
  }
}
