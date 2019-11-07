let names=['roy','joy','grace'];
let parents=['jaswant','bhupinder'];

console.log(names.concat(parents));
names.push('babbu');
console.log(names);
parents.reverse();
console.log(parents);
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
for(parent of parents){
    console.log(parent);
}
