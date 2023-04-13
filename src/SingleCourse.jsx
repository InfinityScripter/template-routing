import React, {useEffect} from 'react';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import courses from './data/courses';
import NotFound from './NotFound';


const SingleCourse = () => {
  const {slug} = useParams();
 const navigate =  useNavigate();
  // const {lang} = useParams();
  const course = courses.find((course) => course.slug === slug);


  useEffect (() => {
    if (!course) {
      navigate('..', {relative: 'path' });
    }
  }, [course, navigate]);

  // if (!course) {
  //   return (
  //     <>
  //       <NotFound/>
  //       <Link to='..' relative='path'>Back to courses</Link>
  //     </>)}

  return (
    <>
      <ul> <h1>{course?.title}</h1>
      <li>     <p>{course?.description}</p></li>
        <li>      id: {course?.id}</li>
        {/*<li>     <Link to={'/courses'}>Back to courses</Link></li>*/}
        <li><Link to='..' relative='path'>Back to courses</Link> </li>
      </ul>




    </>
  );
};

export default SingleCourse;
