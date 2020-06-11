import React from 'react';

const Course = ({ course }) => {
    const Header = props => <h1>{props.courseName}</h1>
    const Content = props => {
      return props.parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id}/>)
    }
    const Part = props => <p> {props.name} {props.exercises} </p>
    const total = course.parts.map(part => part.exercises).reduce((a, b) => a + b);
    const Total = props => <p style={{fontWeight: 'bold'}}>Number of exercises {total}</p>
  
    return (
      <div>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}

export default Course;
