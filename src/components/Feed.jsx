import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
const Feed = () => {
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
        <Sidebar />
        <Typography 
          variant='body2' 
          sx={{ mt: 1.5, color: '#fff'}}
        >
          Copyright 2025 XYL
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed;
