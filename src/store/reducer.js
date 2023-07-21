import data from './polygon.json'
const initState = data;
function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_STATE':
            return action.payload;
          default:
            return state;
    }
}
export  {initState};
export default reducer;
