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
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
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
        <Paper sx={{ overflow: 'hidden' }} className="w-3/4">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
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
        count={rows.length}
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
