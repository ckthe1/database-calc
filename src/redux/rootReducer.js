const rootReducer = (state = [], action) => {
    console.log('rootReducer:', action);
    if (action.type === 'SET_CALCULATION') {
        console.log('state:', state);

        return action.payload;
    }
    return state;

}
export default rootReducer;