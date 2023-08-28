import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Context } from "../../store/Context";
import { Launch } from '@mui/icons-material'; // Import the icon you want to use for opening links

export default function DataTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [state, dispatch] = useContext(Context);

  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
  };

  const handleOpenLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    const selectedRowsData = rows.filter((row) => selectedRows.includes(row.id));
  }, [selectedRows]);

  const rows = state.features.map((feature) => feature.properties);
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 75 },
    { field: 'satellite_name', headerName: 'SAT_NAME', width: 125 },
    {
      field: 'Analysis',
      headerName: 'Analysis',
      width: 100,
      renderCell: (params) => {
        const rowData = params.row;
        const link = rowData.link; // Assuming you have a 'link' property in your data
        return (
          <div>
            <Launch
              style={{ cursor: 'pointer', color: 'blue' }}
              onClick={() => handleOpenLinkInNewTab(link)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 325, width: '100%', borderColor: 'white', color: 'white !important', left: "2px" }}>
      <DataGrid
        style={{ color: 'white' }}
        sx={{
          fontSize: 12,
          // ... other styles
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
