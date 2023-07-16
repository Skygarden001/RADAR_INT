//import {Context, Context_Sat} from '../../../store/Context';
import * as React from 'react';
//import { useState, useEffect, useContext } from 'react';
import { useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable() {
  
  const [selectedRows, setSelectedRows] = useState([]);
  // Handler for retrieving selected rows
  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
  };
  useEffect(() => {
    const selectedRowsData = rows.filter((row) => selectedRows.includes(row.id));
   // console.log('Selected Rows:', selectedRowsData);
  }, [selectedRows]);
  //const [state, dispatch] = useContext(Context)
  //const rows = state.features.map((feature) => feature.properties);
  const columns = [
    { field: 'id', headerName: 'Id', width: 50 },
    { field: 'satellite_name', headerName: 'Sat_name', width: 100 },
    { field: 'mode', headerName: 'Mode', width: 50 },
    { field: 'start_datetime', headerName: 'Start_datetime', width: 150 },
    { field: 'end_datetime', headerName: 'End_datetime', width: 150 },
    { field: 'imaging_time', headerName: 'Imaging_time', width: 100 },
    { field: 'resolution', headerName: 'Resolution', width: 100 },
  ];
  const rows = [
    { id: 1, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 2, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 3, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 4, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 5, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 6, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 7, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 8, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 9, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 10, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
    { id: 11, satellite_name: 'Snow', mode: 'Jon', start_datetime: "45" },
]
  return(
    <div style={{ height: 325, width: '100%', borderColor: 'white', color:'white !important', left: "2px" }}>
      <DataGrid style={{color:'white'}}
        
        sx={{ fontSize: 12, '& .MuiDataGrid-row': {
            height: '10px', color:"white"
              // Set the desired height of the row
          }, '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
            color: 'white'
          }, '& .css-levciy-MuiTablePagination-displayedRows': {
            fontSize: '0.75rem',
            color: 'white',
        },
        '& .css-i4bv87-MuiSvgIcon-root': {
            fontSize: '0.88rem',
            color: 'white',
        },'& .css-pdct74-MuiTablePagination-selectLabel': {
            fontSize: '0.75rem',
            color: 'white',
        },
        '& .css-rtrcn9-MuiTablePagination-root': {
            fontSize: '0.75rem',
            color: 'white',
        }
         }}

        
        rowHeight={30}
        columnHeaderHeight={40}
        rows={rows}  
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection 
        disableSelectionOnClick
        onRowSelectionModelChange={handleSelectionChange}
        selectionModel={selectedRows}
      />
    </div>
  );
}