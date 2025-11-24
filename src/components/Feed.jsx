import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useEffect, useState } from 'react';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos, setVideos] = useState([]);

  useEffect(() => {
      fetchFromAPI("search", {
        part: "snippet",
        q: "Soccer",
        regionCode: "CA",
        maxResults: 50,
      })
        .then((data) => setVideos(data.items));    
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row'} }}>
      <Box 
        sx={{
          width: { xs: '100%', md: '200px' },  
          height: { xs: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2 },
          color: '#fff'
        }}
      >  
        <Sidebar 
           selectedCategory={selectedCategory}
           setSelectedCategory={setSelectedCategory}
        />
        <Typography 
          variant='body2' 
          sx={{ mt: 1.5, color: '#fff'}}
        >
          Copyright 2025 XYL
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',
      height:'90vh', flex:2}}>
        <Typography variant="h4"
        fontWeight="bold" mb={2} sx={{color: "white"}}>
          {selectedCategory} <span style={{color: '#F31503'}}>
            videos
          </span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;
