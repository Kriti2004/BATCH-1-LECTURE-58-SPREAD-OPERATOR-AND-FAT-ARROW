let a= ['Kriti', "Shruti", "smriti", "Mahi"]
console.log(a);

let b=[...a, "soni", 'Moni', "Rahul", 'Rajeev',"Rohan", 'Hari' ]
console.log(b);
console.log(b.length);

//It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the
let x=["It", "gets"];
let y=[...x, "shoter"];
let z=[...y, "If"];
let p=[...z, "the"];
let q=[...p, "function"];
let r=[...q, "has"];
let s=[...r, "only"];
let t=[...s, "one"];
let u=[...t, "statement,"];
let v=[...u, "and"];
let w=[...v, "the"];
let d=[...w, "statement"];
let e=[...d, "return"];
let f=[...e, "a"];
let g=[...f, "value"];

console.log(g);

var paragraph="";
for(var i=0; i<g.length;i++){
    console.log(g[i]);
    paragraph=paragraph+ g[i]+" "
}
console.log(paragraph);

