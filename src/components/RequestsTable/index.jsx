import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const columns = [
  { id: 'item_name', label: 'Name', minWidth: 170 },
  { id: 'starting_date', label: 'Starting Date', minWidth: 100 },
  { id: 'ending_date', label: 'Ending Date', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'total_value', label: 'Value', minWidth: 100 }
];

const RequestsTable = ({content}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAccept = (id) => {
    axios.patch('http://localhost:3000/handle_request', {status: 'Accepted', id: id})
    .then(response => window.location.reload())

  };

  const handleDecline = (id) => {
    axios.patch('http://localhost:3000/handle_request', {status: 'Declined', id: id})
    .then(response => window.location.reload())
  };


  return (
    <Paper sx={{ overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead >
                <TableRow >
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, backgroundColor: 'lightgray' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {content
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((currentRenting) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={currentRenting.code}>
                        {columns.map((column) => {
                          const value = currentRenting[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                        <div className='flex mt-3'>
                          <button onClick={()=> handleAccept(currentRenting.id)} className=" bg-green-400 text-xs py-1 px-3 rounded-lg">Accept</button>
                          <button onClick={()=> handleDecline(currentRenting.id)} className=" outline outline-green-400 ml-3 text-xs py-1 px-3 rounded-lg">Decline</button>
                        </div>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={content.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
  )
}

export default RequestsTable;
