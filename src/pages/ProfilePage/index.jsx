import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import UserCard from '../../components/UserCard';

const columns = [
  { id: 'item_name', label: 'Name', minWidth: 170 },
  { id: 'starting_date', label: 'Starting Date', minWidth: 100 },
  { id: 'ending_date', label: 'Ending Date', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'total_value', label: 'Value', minWidth: 100 }
];


const ProfilePage = ({user}) => {
  const [page, setPage] = React.useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentRentings, setCurrentRentings] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Fetch all the Item you're currently renting
  useEffect(()=> {
    axios.get("http://localhost:3000/reservations", { params: {user_id: user.user_information.id}})
    .then(response => setCurrentRentings(response.data))
  },[]);


  return (
    <>
      <Navbar user={user} />
      <div className='container mx-auto flex mt-24'>
        {/* This section is the profile card */}
        <UserCard/>
        {/* This section is the profile card */}

        {/* This section is the Items Board */}
        <Paper sx={{ overflow: 'hidden' }} className="w-3/4 ">
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
                {currentRentings
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
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={currentRentings.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* This section is the Items Board */}
      </div>
    </>
  )
}

export default ProfilePage;
