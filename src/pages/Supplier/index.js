import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AddSupllier from '../../components/AddSupplier';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getALlSupplier } from '../../redux/apiSupplier';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'Phone Number',
  },
  {
    id: 'provide',
    numeric: true,
    disablePadding: false,
    label: 'Provide',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Address',
  },
];

function EnhancedTableHead() {

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
          >
              {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar() {
    // const navigate = useNavigate();
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          color="primary"
        >
          All Supplier 
        </Typography>
        <AddSupllier />
    </Toolbar>
  );
}

export default function Supplier() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allsupplier = useSelector(state=>state.supply.allSupply);


  React.useEffect(()=>{
    getALlSupplier(dispatch);
    
  },[dispatch]);

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            stickyHeader 
          >
            <EnhancedTableHead />
            <TableBody>
              {allsupplier && allsupplier.map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      onClick={()=>navigate(`/supplier/${row.id}`)}
                    >                      
                      <TableCell
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.bank_account}</TableCell>
                      <TableCell align="right">{row.tax_code}</TableCell>
                      <TableCell align="right">{row.address}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}