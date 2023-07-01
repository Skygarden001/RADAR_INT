import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Column from 'antd/es/table/Column';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie1', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie2', firstName: 'Harvey', age: 65 },
  { id: 11, lastName: 'Roxie3', firstName: 'Harvey', age: 65 },
  { id: 12, lastName: 'Roxie4', firstName: 'Harvey', age: 65 },
  { id: 13, lastName: 'Roxie5', firstName: 'Harvey', age: 65 },
  { id: 14, lastName: 'Roxie6', firstName: 'Harvey', age: 65 },
  { id: 15, lastName: 'Roxie7', firstName: 'Harvey', age: 65 },
  { id: 16, lastName: 'Roxie8', firstName: 'Harvey', age: 65 },
  { id: 17, lastName: 'Roxie9', firstName: 'Harvey', age: 65 },
  { id: 18, lastName: 'Roxie10', firstName: 'Harvey', age: 65 },
  { id: 19, lastName: 'Roxie11', firstName: 'Harvey', age: 65 },
  { id: 20, lastName: 'Roxie12', firstName: 'Harvey', age: 65 },
  { id: 21, lastName: 'Roxie13', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleRowSelection =()=> {
    console.log("change")
  };
  console.log("change")
  return (
    <div style={{ height: 350, width: '100%' }}>
      <DataGrid sx={{ fontSize: 14 }}
        rows={rows}
        columns={columns}
        initialState={{

          
          pagination: {
            paginationModel: { page: 0, pageSize: 21 },
          },
        }}
        pageSizeOptions={[21, 21]}
        checkboxSelection
        onSelectionModelChange={handleRowSelection}
      />
    </div>
  );
}