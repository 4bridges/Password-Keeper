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
          <Typography variant='h5'>Header 1</Typography>
          <Typography variant='body1' color='text.secondary'>
          Unleash Decentalized Safety - Secure Password-Keeper built on decentral storage bridging the Off-Chain-World into the Web3-Space.
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
          <Typography variant='h5'>Header 2</Typography>
          <Typography variant='body1' color='text.secondary'>
          Storing passwords or wallet seed phrases offline, such as on paper at home or in an office, is a common practice, but it comes with risks. Unexpected events like fire, water damage, or unauthorized access by third parties can lead to the loss of these crucial credentials. As a result, a more security-conscious segment of society, around 5%, has shifted towards using centralized password managers, based on Web2 technology. These centralized platforms offer solutions to protect against unforeseen disasters like fire or water damage, minimizing the risk of physical loss. However, the convenience of centralized storage introduces its own set of concerns, notably the concentration of sensitive information in one location. This creates a vulnerability as Web2 companies face the looming threat of cyberattacks from malicious hackers, risking the compromise of user data and security. Balancing the need for accessibility with the imperative for robust security remains a significant challenge in the digital world.
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
