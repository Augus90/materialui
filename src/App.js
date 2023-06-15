import Button from '@mui/material/Button';
import Navbar from './componentes/navbar/Navbar';
import { Outlet } from 'react-router';
import { Grid } from '@mui/material';


function App() {
  return (
    <Grid container>
      <Navbar/>
      <Outlet />
      {/* <Button variant="contained">Hello World</Button> */}
    </Grid>
  );
}

export default App;
