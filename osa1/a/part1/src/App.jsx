


// Header, Content, Total
const Header = (props) => {
  console.log("wahuu")
  return (
    <>
      <p>{props.course}</p>
    </>

  )
}

const Content = (props) => {

  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Part = (props) => {

  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {

  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1}
               part2={part2}
               part3={part3}
               exercises1={exercises1}
               exercises2={exercises1}
               exercises3={exercises1}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App