import "./styles.css";
let charData;

let loadCharacters = function(res, getFresh) {
  if (charData && !getFresh) return charData;
  else
    charData = new Promise((resolve, reject) => {
      setTimeout(() => resolve(res), Math.random() * 10000);
    }).then();
  return charData;
};

console.log("start");

let a = async function() {
  let r = await loadCharacters({ a: 5, b: 10 });
  let r2 = await loadCharacters({ a: 5, b: 10 });
  r2.a = 6;
  console.log(r);
};

let b = async function() {
  let r = await loadCharacters("b", true);
  console.log(r);
};

console.log("the end");

document.getElementById("app").innerHTML = `


<button id = "btn">Test A</button>
<button id = "btn2">Test B</button>
`;

document.querySelector("#btn").addEventListener("click", a);
document.querySelector("#btn2").addEventListener("click", b);
