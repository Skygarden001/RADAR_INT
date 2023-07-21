
function get_data( name_sat, mode, time) {
    const requestData = {
      table_name: 'skymed',
      name_sat: name_sat,
      mode: mode,
      time_start: time[0],
      time_end: time[1]
    };
    const params = new URLSearchParams(requestData);
    const url = `http://localhost:3001/api/data?${params}`;
    console.log(url);
    fetch(url)
    .then((response) => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
      }
       return response.json();
      })
      .then((data) => {
        return(data)
      })
      .catch((error) => {
      console.error('Error:', error);
  });
  }
export default get_data;