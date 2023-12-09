import Box from '@mui/system/Box';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';

function createData(label, password) {
  return { label, password};
}

const rows = [
  createData('pass1', 'bvckjsdbl'),
  createData('pass2', 'dsmnflkiohd'),
  createData('pass3', '322gdd2td'),
  createData('pass4', '9udjieh3'),
  createData('pass5', 'f89j43y9r'),
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
export default function BasicTable() {
  return (
    <>
      <Box my={10}>
      <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center">Label</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.label}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.label}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.password}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box display='flex'  justifyContent='center' my='20px'>
        <TextField
        sx={{marginRight:'15px'}}
          align="center"
          id="outlined-basic"
          label="Label"
          variant="outlined"
        />

        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </Box>
      
      <Button sx={{float:'right', marginRight:'25vw'}} variant="contained" color="success">Add</Button>
      </Box>
    </>
  );
}
