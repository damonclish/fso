const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return(
    <p>{props.part} : {props.excercise}</p>
  )
}
const Total = (props) => {
  return(
    <p>Number of excercises: {props.totalExc}</p>
  )
}


const App = () => {
  const course = 'Half Stack App Dev'
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} excercise={excercises1} />
      <Content part={part2} excercise={excercises2} />
      <Content part={part3} excercise={excercises3} />
      <Total totalExc={excercises1 + excercises2 + excercises3} />


    </div>
)
}
export default App;