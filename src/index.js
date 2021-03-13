module.exports = function check(str, bracketsConfig) {
  // your solution


if (str.length % 2) {
  return false;
}
let bracketArr = [];

for (let i = 0; i < str.length; i++) {

  for (let j = 0; j < bracketsConfig.length; j++) {

    if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] == bracketArr[bracketArr.length - 1]) {
      bracketArr.pop();

    } else if (str[i] == bracketsConfig[j][0]) {
      bracketArr.push(str[i]);
    }

  }

}

if (bracketArr.length != 0) {
  return false;
}

return true;





}

