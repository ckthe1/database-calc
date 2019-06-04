



const rootReducer = (state = [], action) => {
    console.log('rootReducer action:', action);
    if (action.type === 'SET_CALCULATION') {
        console.log('rootReducer state:', state);

        return action.payload;
    }
    return state;

}
export default rootReducer;