import React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
// import Link from '@mui/material/Link';

function Landing() {
  return (
    <Box>
      <section>
        <Typography variant='h5'>Header 1</Typography>
        <Typography variant='body1' gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </section>
      <section style={{ marginTop: '20px' }}>
        <Typography variant='h5'>Header 2</Typography>
        <Typography variant='body1' gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </section>
      <Box display='flex' justifyContent='center' mt='20px'>
        <Link href='/passwordKeeper'>Demo</Link>
      </Box>
    </Box>
  );
}
export default Landing;
