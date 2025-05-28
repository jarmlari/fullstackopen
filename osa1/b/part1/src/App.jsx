


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
  console.log(props)
  return (
    <div>
      <Part part={props.part1}/>
      <Part part={props.part2}/>
      <Part part={props.part3}/>
    </div>
  )
}

const Part = (props) => {

  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content part1={part1}
               part2={part2}
               part3={part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}


/**
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
 */
export default App