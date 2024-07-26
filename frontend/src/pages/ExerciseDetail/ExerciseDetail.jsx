import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import Detail from '../../components/Detail/Detail'
import ExerciseVideos from '../../components/ExerciseVideos/ExerciseVideos'
import SimilarExercises from '../../components/SimilarExercises/SimilarExercises'
import { excerciseOptions, fetchData, youtubeOptions } from '../../utils/fetchData'
import { useParams } from 'react-router-dom'

const ExerciseDetail = () => {

  const {id} = useParams();

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {

    const fetchExerciseData = async () =>{

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, excerciseOptions);
      setExerciseDetail(exerciseDetailData);


      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, excerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, excerciseOptions);
      setEquipmentExercises(equimentExercisesData);


    };

    fetchExerciseData();
   
  }, [id]);
  


  return (
    <Box>

    <Detail exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    
    </Box>
  )
}

export default ExerciseDetail