
const App = () => {

const course = 'Half Stack App Dev'
const parts = [
  {name: 'Fundamentals of React', excercises: 10},
  {name: 'Using props to pass data', excercises: 7},
  {name: 'State of a component', excercises: 14}
]
const totalExc = parts[0].excercises+parts[1].excercises+parts[2].excercises
return(
  <>
    <p>{parts[0].name} : {parts[0].excercises}</p>
    <p>{parts[1].name} : {parts[1].excercises}</p>
    <p>{parts[2].name} : {parts[2].excercises}</p>
    <p>Total number of excercises: {totalExc}</p>
  </>
)
 
}
export default App;