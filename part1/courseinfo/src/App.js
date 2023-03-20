const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = props => (

    <p>
      {props.part.name} : {props.part.excercise}
    </p>
)
  


const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />

    </div>
    
  )
}
const Total = (props) => {
  return(
    <p>Number of excercises : {props.parts.reduce((total, part) => part.excercise + total, 0)}</p>
    
  )
}




const App = () => {
  const course = {
    name: 'Half Stack App Dev', 
    parts: [
      {name:'Fundamentals of React', excercise: 10},
      {name:'Using props to pass data', excercise: 7},
      {name:'State of a component', excercise: 14}
    ]

}

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />

    </div>
)
}
export default App;