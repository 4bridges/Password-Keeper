import React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import Box from '@mui/system/Box';

function Landing() {
  return (
    <Box>
      <Stack direction='row' spacing={4} sx={{ margin: '72px' }}>
        <Box
          sx={{
            padding: '8px',
            border: 1,
            borderRadius: 2,
            borderColor: '#b3b7bf',
          }}
        >
          <Typography variant='h5'>Unleash Decentalized Safety</Typography>
          <Typography variant='body1' color='text.secondary'>
          Secure Password-Keeper built on decentral storage bridging the Off-Chain-World into the Web3-Space.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: '8px',
            border: 1,
            borderRadius: 2,
            borderColor: '#b3b7bf',
          }}
        >
          <Typography variant='h5'>Balancing Accessibility & Security</Typography>
          <Typography variant='body1' color='text.secondary'>
          The ease of centralized storage raises critical concerns, particularly regarding the consolidation of sensitive data in a single location. This vulnerability exposes the system to potential cyber threats posed by malicious hackers, jeopardizing the delicate equilibrium between accessibility and security. PKeep unleashes Decentalized Safety.
           </Typography>
        </Box>
      </Stack>
      <Box display='flex' justifyContent='center' mt='20px'>
        <Link href='/passwordKeeper'>Demo</Link>
      </Box>
    </Box>
  );
}
export default Landing;
