const initState ={
    posts: [
        {id: '1', title: 'ABC', body: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'},
        {id: '2', title: '123', body: '123456789'}
    ]
}
const rootReducer = (state=initState, action) =>{
    return state;
}

export default rootReducer