import { useState } from 'react';
import './App.css';
import CourseList from './HomePage/Courses/CourseList'
import { Typography } from '@mui/material';

const App = () => {
  const [isButtonShow, setIsButtonShow] = useState(false)

  const showButton = () => setIsButtonShow(true)
  const removeButton = () => setIsButtonShow(false)

  return (
    <>
      <Typography variant='h2'>Courses List</Typography>
      <CourseList showButton={showButton} removeButton={removeButton} />
    </>
  );
}

export default App;
