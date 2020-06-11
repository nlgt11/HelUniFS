import React from 'react';

const Header = ({ courseName }) => <h1>{courseName}</h1>

const Content = ({ parts }) => {
  return parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id}/>)
}

const Part = ({ name, exercises }) => <p> {name} {exercises} </p>

const Total = ({ parts }) => {
  const total = parts.map(part => part.exercises).reduce((a, b) => a + b);
  return <p style={{fontWeight: 'bold'}}>Number of exercises {total}</p>
}

const Course = ({ course }) => {
    return (
      <div>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}

export default Course;
