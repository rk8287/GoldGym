import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { excerciseOptions, fetchData } from '../../utils/fetchData';
import Loader from '../Loader/Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
 


  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);


   // Pagination
   const indexOfLastExercise = currentPage * exercisesPerPage;
   const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
   const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
 
  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    
  const fetchedExcercisesData = async ()=>{


    let excerciseData = [];

    if(bodyPart == 'all'){
      excerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=0',excerciseOptions)
    }else{
      excerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100&offset=0`, excerciseOptions)
    }

    setExercises(excerciseData);
  }

  fetchedExcercisesData();


  }, [bodyPart])

  
  
  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' }, mt: '50px', p: '20px' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Showing Result
      </Typography>

      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exercises.length > 0 ? (
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        ) : (
          <Typography>No exercises found</Typography>
        )}
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>

    </Box>
  );
};

export default Exercises;
