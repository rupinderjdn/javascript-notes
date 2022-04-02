const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i=0;i<companies.length;i++){
//      console.log(companies[i])
// }

//ForEach
// companies.forEach(function(company,i,companies) {
//     console.log(company.name+" "+i)
// });

//Filter
// Get 21 nad Older
// let canDrink = [];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink)

// let canDrink = ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
//     return false;
// })


const canDrink = ages.filter(age => age>=21)

// Filter retail Companies

// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail')return true;
// })

const retailCompanies = companies.filter(company => company.category === 'Retail')

// Get 80s companies
const eighties = companies.filter(company => company.start>=1980 && company.start<1990)

//Lasted 10 years
const lastedten = companies.filter(company => company.end-company.start>=10)

// Map
// Create Array of company names
const companyNames = companies.map(company => company.name)
const companyData = companies.map(company => `${company.name} -> ${company.start} - ${company.end}`)

const agesSquare = ages.map(age => Math.pow(age,2))

const ageMap = ages
.map(age => age*2)
.map(age => age+10)

//Sort 
//sort companies
const sortedCompanies = companies.sort((a,b)=> a.start-b.start)
//sort ages
const sortAges = ages.sort() 
const sortedAges = ages.sort((age1,age2)=> age1-age2);

//Reduce
let ageSum=0;
for(let i=0;i<ages.length;i++){
    ageSum += ages[i];
}

ageSum = ages.reduce(function(total, age){
    return total+age;
},0)
ageSum = ages.reduce((total, age)=> total+age, 0)

//Get total years
const totalYears = companies.reduce((total,company) => total + (company.end-company.start),0);

// Combine Methods
const combine = ages
.map(age=> age*2)
.filter(age => age>=40)
.sort((a,b)=> a-b)
.reduce((total,age)=> total+age,0)
console.log(combine)


