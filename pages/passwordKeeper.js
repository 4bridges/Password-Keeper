import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Box from '@mui/system/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, InputAdornment } from '@mui/material';
import { IconButton } from '@mui/joy';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { MetaMaskSDK } from '@metamask/sdk';
import lighthouse from '@lighthouse-web3/sdk';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const LIGHTHOUSE_API_KEY_OLD = 'e77de238.d80129659a504ce6bd0b2fa5e5081475';
const LIGHTHOUSE_API_KEY = '920df0ff.6c00853f66bd4e97bb14865295b05fd1';

function createData(label, password) {
  return { label, password, showPassword: false };
}

const rows = [
  // createData("pass1", "bvckjsdbl"),
  // createData("pass2", "dsmnflkiohd"),
  // createData("pass3", "322gdd2td"),
  // createData("pass4", "9udjieh3"),
  // createData("pass5", "f89j43y9r"),
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
  const [passwordData, setPasswordData] = useState(rows);
  const [label, setLabel] = useState('');
  const [password, setPassword] = useState('');

  const [sdk, setSDK] = useState();

  useEffect(() => {
    const doAsync = async () => {
      const clientSDK = new MetaMaskSDK({
        useDeeplink: false,
        communicationServerUrl: process.env.NEXT_PUBLIC_COMM_SERVER_URL,
        checkInstallationImmediately: false,
        i18nOptions: {
          enabled: true,
        },
        dappMetadata: {
          name: 'NEXTJS demo',
          url: 'https://localhost:3000',
        },
        logging: {
          developerMode: false,
        },
        storage: {
          enabled: true,
        },
      });
      await clientSDK.init();
      setSDK(clientSDK);

      const accounts = await clientSDK.connect();
      const publicKey = await window.ethereum.request({
        method: 'eth_getEncryptionPublicKey',
        params: [accounts[0]],
      });

      const uploades = await lighthouse.getUploads(LIGHTHOUSE_API_KEY);
      const newPass = [];
      if (uploades.data.totalFiles > 0) {
        for (let i = 0; i < uploades.data.fileList.length; i++) {
          const element = uploades.data.fileList[i];

          newPass.push({
            label: element.fileName,
            password: '',
            showPassword: false,
            cid: element.cid,
          });
        }

        setPasswordData(newPass);
      }
    };
    doAsync();
  }, []);

  const changeVisibility = async (selectedPass) => {
    try {
      const accounts = await sdk.connect();

      const messageRequested = (await lighthouse.getAuthMessage(accounts[0]))
        .data.message;

      const msg = `0x${Buffer.from(messageRequested, 'utf8').toString('hex')}`;

      const signResult = await ethereum.request({
        method: 'personal_sign',
        params: [msg, accounts[0]],
      });
      const fileEncryptionKey = await lighthouse.fetchEncryptionKey(
        selectedPass.cid,
        accounts[0],
        signResult
      );

      const decrypted = await lighthouse.decryptFile(
        selectedPass.cid,
        fileEncryptionKey.data.key
      );
      const value = await decrypted.text();

      const newPass = passwordData.map((item) =>
        item.label === selectedPass.label
          ? { ...item, showPassword: !item.showPassword, password: value }
          : item
      );
      setPasswordData(newPass);
    } catch (error) {
      alert('This is not your password!');
    }
  };

  const addNewPass = async () => {
    try {
      if (!label.length) return;
      if (!password.length) return;

      const accounts = await sdk.connect();

      const messageRequested = (await lighthouse.getAuthMessage(accounts[0]))
        .data.message;

      const msg = `0x${Buffer.from(messageRequested, 'utf8').toString('hex')}`;

      const signResult = await ethereum.request({
        method: 'personal_sign',
        params: [msg, accounts[0]],
      });

      const response = await lighthouse.textUploadEncrypted(
        password,
        LIGHTHOUSE_API_KEY,
        accounts[0],
        signResult,
        label
      );

      const newPass = [
        ...passwordData,
        { label, password, showPassword: false },
      ];

      setPasswordData(newPass);
    } catch (error) {
      console.error('Error in signing:', error);
    }
  };

  return (
    <>
      <Link href='/'>
        <Button variant='text'>
          <KeyboardArrowLeftIcon /> Back
        </Button>
      </Link>

      <Box my={10}>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label='customized table'>
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align='center'>Label</StyledTableCell>
                  <StyledTableCell align='center'>Password</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {passwordData.map((row, index) => (
                  <StyledTableRow
                    key={row.label}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell align='center' component='th' scope='row'>
                      {row.label}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <TextField
                        disabled
                        variant='outlined'
                        type={row.showPassword ? 'text' : 'password'}
                        value={row.password}
                        // onChange={someChangeHandler}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <IconButton
                                aria-label='toggle password visibility'
                                onClick={() => changeVisibility(row)}
                                // onMouseDown={handleMouseDownPassword}
                              >
                                {row.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box display='flex' justifyContent='center' my='20px'>
          <TextField
            sx={{ marginRight: '15px' }}
            align='center'
            id='outlined-basic'
            label='Label'
            variant='outlined'
            onChange={(e) => setLabel(e.target.value)}
            value={label}
          />

          <TextField
            id='outlined-basic'
            label='Password'
            variant='outlined'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Box>

        <Button
          sx={{ float: 'right', marginRight: '25vw' }}
          variant='contained'
          color='success'
          onClick={addNewPass}
        >
          Add
        </Button>
      </Box>
    </>
  );
}
