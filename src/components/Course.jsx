import React from 'react';

const Course = ({ courseTitle, courseSchedule, campus }) => {
  return (
    <article className="course">
      <h3 className="course__name">{courseTitle}</h3>
      {courseSchedule.map((sch) => (
        <>
          <p className="course__schedule">
            <strong>{sch.dia}</strong>:
          </p>
          <p className="course__hour">{sch.hora}</p>
        </>
      ))}
      <p className="course__campus">{campus}</p>
    </article>
  );
};

export default Course;
