import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import axios from 'axios';
import UserCard from '../../components/UserCard';
import RentItemsTable from '../../components/RentItemsTable';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemsTable from '../../components/ItemsTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const ProfilePage = ({user}) => {
  const [currentRentings, setCurrentRentings] = useState([]);
  const [completedRentings, setCompletedRentings] = useState([]);
  const [userItems, setUserItems]= useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Fetch all the Item you're currently renting
  useEffect(()=> {
    axios.get("http://localhost:3000/reservations", { params: {user_id: user.user_information.id}})
    .then(response => setCurrentRentings(response.data))
  },[]);

  //Fetch all the Item you completed renting
  useEffect(() => {
    axios.get("http://localhost:3000/completed_reservations", { params: {user_id: user.user_information.id}})
    .then(response => setCompletedRentings(response.data) )
  },[]);

  //Fetch all the Items that you created.
  useEffect(() => {
    axios.get("http://localhost:3000/user_items", { params: {user_id: user.user_information.id}})
    .then(response => setUserItems(response.data) )
  },[]);

  return (
    <>
      <Navbar user={user} />
      <div className='container mx-auto flex mt-24'>
        {/* This section is the profile card */}
        <UserCard items={userItems.length} renting={currentRentings.length} completed={completedRentings.length}/>
        {/* This section is the profile card */}

        {/* This section is the Items Board */}
        <Box sx={{ width: '80%' }} className=" w-3/4 ml-24">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Currently Renting" {...a11yProps(0)} />
              <Tab label="Completed Rentings" {...a11yProps(1)} />
              <Tab label="My Items" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            < RentItemsTable content={currentRentings}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            < RentItemsTable content={completedRentings}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ItemsTable content={userItems} />
          </TabPanel>
        </Box>
        {/* This section is the Items Board */}
      </div>
    </>
  )
}

export default ProfilePage;
