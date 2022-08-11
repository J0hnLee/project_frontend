import EventSearch from '../../components/events/events-search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getAllEvents } from '../../dummy-data';
import Router, { useRouter } from 'next/router';
const top100Films = [
  { label: 'Acetaminophen', year: 1994 },
  { label: 'ibuprofen 400mg', year: 1972 },
  { label: 'Ibuprofen 200mg', year: 1972 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];


function AllEventsPage(){
  const router=useRouter();  
  const events=getAllEvents();
    
    function findEventsHandler(year,month){
      const fullPath = `/events/${year}/${month}`;
      router.push(fullPath);
    }


    return (
      <div>
        <EventSearch onSearch={findEventsHandler}/>
        <Autocomplete
      
      id="combo-box-demo"
      options={top100Films}
      
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Drug
    " />}
    />
        <h1>All Events</h1>
        
      </div>
      )
    
    }
    
    
    export default AllEventsPage;


