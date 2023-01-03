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

const columns = [
  { id: 'item_name', label: 'Name', minWidth: 170 },
  { id: 'starting_date', label: 'Starting Date', minWidth: 100 },
  { id: 'ending_date', label: 'Ending Date', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'total_value', label: 'Value', minWidth: 100 }
];


const ProfilePage = ({user}) => {
  const [page, setPage] = React.useState(0);
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
        <div class=" w-1/4 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div class="px-6">
              <div class="flex flex-wrap justify-center">
                  <div class="w-full flex justify-center">
                      <div class="relative">
                          <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                      </div>
                  </div>
                  <div class="w-full text-center mt-20">
                      <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                          <div class="p-3 text-center">
                              <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">3</span>
                              <span class="text-sm text-slate-400">My Items</span>
                          </div>
                          <div class="p-3 text-center">
                              <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">2</span>
                              <span class="text-sm text-slate-400">Rented Items</span>
                          </div>

                          <div class="p-3 text-center">
                              <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">563</span>
                              <span class="text-sm text-slate-400">Currently Renting</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="text-center mt-2">
                  <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Mike Thompson</h3>
                  <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
                  </div>
              </div>
              <div class="mt-6 py-6 border-t border-slate-200 text-center">
                  <div class="flex flex-wrap justify-center">
                      <div class="w-full px-4">
                          <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
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
