import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPrice } from '../../redux/apiRequest';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': { width: 1200, height: 650, maxHeight: 650, maxWidth: 1200 },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CurrentPrice(props) {
  const [open, setOpen] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const dispatch = useDispatch();
  const current_price = useSelector(state=>state.supply.current_price);

  const handleClickOpen = () => {
    setOpen(true);
    setReload(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(()=>{
    if(open) getAllPrice(props.name, props.code, dispatch);
  },[dispatch, props.code, props.name, open]);
  if(!current_price){
    <Box
      sx={{
        bgcolor: '#121212',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
  }
  return (
    <div>
      <Button variant="outlined" sx={{textTransform: 'none', ml: 2, mb: 2}} onClick={handleClickOpen}>
          <MonetizationOnIcon /> Current Price:
      </Button>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Current Price of {props.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date Set</TableCell>
                <TableCell align="right">Price ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {current_price && current_price.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date_set}
                  </TableCell>
                  <TableCell align="right">{row.current_price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}