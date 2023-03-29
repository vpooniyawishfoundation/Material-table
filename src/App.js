import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein};
}
const rows = [
  createData('test', 159, 6.0, 24),
  createData('Ice cream', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Col1</TableCell>
            <TableCell id= "drop" align="right">Col2</TableCell>
            <TableCell align="right">Col3</TableCell>
            <TableCell align="right">Col4</TableCell>
            <TableCell align="right">Col5</TableCell>
            <TableCell align="right">Col5</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{editable()}</TableCell>
              <TableCell align="right">{dropdown()}</TableCell> 
              <TableCell align="right">{editable()}</TableCell> 

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function dropdown() {
  const [test, settest] = React.useState('');

  const handleChange = (event) => {
    settest(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 100 }} >
        <InputLabel id="demo-simple-select-helper-label">Test</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={test}
          label="Test"
          onChange={handleChange}
        >
          <MenuItem value={10}>value1</MenuItem>
          <MenuItem value={20}>value2</MenuItem>
          <MenuItem value={30}>value3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function editable() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          label="Edit"
          id="outlined-size-small"
          defaultValue="Hello"
          size="small"
        />
    </Box>
  );
}