import * as React from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCustomers } from '../../redux/apiRequest';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Customer Name',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Start date depth',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Unpaid dept',
  },
];

function EnhancedTableHead(props) {

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
          All Report
        </Typography>
    </Toolbar>
  );
}

export default function Report() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allReport = useSelector(state=>state.report.allcustomer);

  React.useEffect(()=>{
    getAllCustomers(dispatch);
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
              {allReport && allReport.map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.customer_id}
                      onClick={()=>navigate(`/report/${row.customer_id}`)}
                    >                      
                      <TableCell
                        component="th"
                        id={index}
                        scope="row"
                      >
                        {row.full_name}
                      </TableCell>
                      <TableCell align="right">{row.address}</TableCell>
                      <TableCell align="right">{row.start_date_depth}</TableCell>
                      <TableCell align="right">{row.unpaid_dept}</TableCell>
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