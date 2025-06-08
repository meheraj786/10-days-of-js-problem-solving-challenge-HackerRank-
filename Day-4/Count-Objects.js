/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let n=0
  objects.filter((object)=>{
    if (object.x===object.y) {
      n+=1
    }
  })
  return n
  
}


