// * Complete this function which checks whether 2 objects have
// * exactly same keys and values
function checkEqualObjects (object1, object2) {
  let object1_enteries = Object.entries(object1);
  let object2_enteries = Object.entries(object2);
  if (object1_enteries.length === object2_enteries.length) {
    for (let i=0; i<object1_enteries.length; i++) {
      if ( typeof object1_enteries[i][1] && typeof object2_enteries[i][1] === 'object') {
        if (object1_enteries[i][0] !== object2_enteries[i][0]) {
          return false;
        } else {
          let result = checkEqualObjects(object1_enteries[i][1], object2_enteries[i][1])
          if (result === false) {
            return false;
          } 
        }
      } else {
        if (object1_enteries[i][0] !== object2_enteries[i][0] || object1_enteries[i][1] !== object2_enteries[i][1]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = function (object1, object2) {
  return checkEqualObjects(object1, object2);
};
