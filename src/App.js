import logo from './logo.svg';
import './App.css';



function App() {

  //javascript object:In javascript object holds multiple keys and values , properties and methods.
  let nagarathnaDetails=
  {
   name:"nagarathna",
   age:"22",
   height:"5.2",
   fathername:"achireddy",
   mothername:"shamala",
   hobbies:"swimming,travelling",
   //we can also use methods below as follows
   aboutnagarathna:()=>
   {
     console.log("Iam nagarathna from andhrapradesh,iam graduated from a1 global engineering college,now i joined in brn infotech to learn react native course which is booming in industry.")
   }
  }
console.log(nagarathnaDetails.name)
console.log(nagarathnaDetails.age)
console.log(nagarathnaDetails.height)
console.log(nagarathnaDetails.fathername)
console.log(nagarathnaDetails.mothername)
console.log(nagarathnaDetails.hobbies)
nagarathnaDetails.aboutnagarathna()
//we can pass data from one programming language into another programming language using json,json can be understood by all languages in the world

console.log(JSON.stringify(nagarathnaDetails))
//object destructuring:object destructuring can extract multiple properties from object into one statement
let {name,age,height,fathername,mothername,hobbies} = nagarathnaDetails
console.log(name)
console.log(age)
console.log(height)
console.log(fathername)
console.log(mothername)
console.log(hobbies)

//array destructuring :Destructuring in JavaScript is a simplified method of extracting multiple properties from an array by taking the structure and deconstructing it down into its own constituent parts through assignments by using a syntax that looks similar to array literals
let nagarathnaMarks = [90,80,70,60,50,45]
let [engMarks,telMarks,hinMarks,matMarks,sciMarks,socMarks]=nagarathnaMarks
console.log(engMarks)
console.log(telMarks)
console.log(hinMarks)
console.log(matMarks)
console.log(sciMarks)
console.log(socMarks)
//if you want particular subject marks you can write as below follows

//rest parameter:it is improved way to the handle function parameter,allowing us to more easily handle various inputs as parameter 
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,



function calculateTotal(...d)

{
  let total =0 //parseInt(engMarks)+parseInt(telMarks)+parseInt(hinMarks)+parseInt(matMarks)+parseInt(sciMarks)+parseInt(socMarks)
d.forEach((num) => {
    total += num
  });
  console.log(`Total is ${total}`)
}
calculateTotal(50,60,30,40,50,60,70,40,40,75,85,95,6,45,25,15,35,85,45,100)


 //spread operator:unpacking values from an array
 function naguMarks(engMarks,telMarks,hinMarks,matMarks,sciMarks,socMarks)
 {
   let passMarks=35
   if(engMarks>=passMarks&&telMarks>=passMarks&&hinMarks>=passMarks&&matMarks>=passMarks&&sciMarks>=passMarks&&socMarks>=passMarks)
   {
     console.log("Student passed")
   }
   else
   {
     console.log("Student failed")
   }
   
 }
 let marksArr = [10,10,10,10,75,85]
 naguMarks(...marksArr)






  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Objects

        </a>
      </header>
    </div>
  );
}

export default App;
