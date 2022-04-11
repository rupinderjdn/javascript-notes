let stdDetails = {
    name:'Rupinder Singh',
    Roll_no:72,
    Class:'ECE',
    friends : ['prajakta','prateek','pratyush']
}
// document.getElementById('p1').innerText = JSON.stringify(stdDetails)

// let x = '{"name":"Rupinder Singh","Roll no":72,"Class":"ECE"}'

// console.log(JSON.parse(x))

// console.log(Object.entries(stdDetails))
// Object.keys()
// Object.values()

// For In -> Iterating through objects
// for(x in stdDetails){
//     console.log(x +":"+stdDetails[x])
// }

// For of -> Iterating through Arrays
// for(x of stdDetails.friends){
//     console.log(x)
// }
for(x of stdDetails.Class){
    console.log(x)
}
for(x in stdDetails.Class){
    console.log(stdDetails.Class[x])
}