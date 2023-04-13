import React, {useEffect, useState} from 'react';
import courses from './data/courses';
import styles from './Courses.module.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import queryString from 'query-string';
import {logDOM} from '@testing-library/react';

const SORT_KEYS = ['title', 'id', 'slug']

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {return sortedCourses;}
  else {  sortedCourses.sort((prev, next) => prev[key] > next[key] ? 1 : -1);
    return sortedCourses;}
}

const Courses = () => {
 const location = useLocation();
const query = queryString.parse(location.search);
const navigate = useNavigate();
const [sortKey,setSortKey] = useState(query.sort);
  const [sortedCourses, setSourtedCourses] = useState(sortCourses(courses, sortKey));


useEffect(() => {
  if (!SORT_KEYS.includes(sortKey)){
    navigate('.', {replace: true});
    setSortKey(undefined);
    setSourtedCourses([...courses]);
  }
}, [sortKey, navigate]);


  return (
    <div className={styles.courses}>
      <h1>{
        sortKey ? `Courses sorted by ${sortKey}` : 'Courses'
      }</h1>
 <select value={sortKey} onChange={(e) => {
           navigate(`?sort=${e.target.value}`);
         setSortKey(e.target.value);
          setSourtedCourses(sortCourses(courses, e.target.value));}}>
   <option value="">None</option>
   <option value="title">Title</option>
   <option value="id">Id</option>
   <option value="slug">Slug</option>
        </select>
      <ul>
        {sortedCourses.map((course) => (
          <li key={course.id}>

            <p>{course.description}</p>
            <Link to={course.slug}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
