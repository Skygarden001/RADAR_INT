//import {Context, Context_Sat} from '../../../store/Context';
import * as React from 'react';
//import { useState, useEffect, useContext } from 'react';
import { useState, useEffect, useContext} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Context, Context_Sat} from "../../store/Context";

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
  const [state, dispatch] = useContext(Context)
  console.log(state)
  const rows = state.features.map((feature) => feature.properties);
  const columns = [
    { field: 'id', headerName: 'Id', width: 50 },
    { field: 'satellite_name', headerName: 'Sat_name', width: 100 },
    { field: 'mode', headerName: 'Mode', width: 50 },
    { field: 'start_datetime', headerName: 'Start_datetime', width: 150 },
    { field: 'end_datetime', headerName: 'End_datetime', width: 150 },
    { field: 'imaging_time', headerName: 'Imaging_time', width: 100 },
    { field: 'resolution', headerName: 'Resolution', width: 100 },
  ];
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