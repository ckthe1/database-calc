

const calcReducer = (state = [], action) => {
    console.log('calcReducer action:', action.payload);
    switch (action.type) {
        case 'GET_CALCULATION':
            return action.payload
        default:
            return state;
    }
}
export default calcReducer;