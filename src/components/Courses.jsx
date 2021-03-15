import React, { useContext } from 'react';
import Course from './Course';
import AppContext from '../context/AppContext';

const Courses = () => {
  const { state } = useContext(AppContext);
  const { courses, links } = state;
  return (
    <section className="courses">
      <h2 className="courses__heading">Oferta 2021-1</h2>
      {courses.map((e) => (
        <a className="courses__link" target="_blank" href={links.incripcion}>
          <Course
            key={e.courseTitle}
            courseTitle={e.courseTitle}
            courseSchedule={e.courseSchedule}
            campus={e.courseCampus}
          />
        </a>
      ))}
    </section>
  );
};

export default Courses;
