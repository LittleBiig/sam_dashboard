const reducerExample=(state={modalOpen: true}, action)=>{

    switch(action.type)
    {
        case 'CLOSE_MODAL' :
            return {modalOpen:false};

        case 'OPEN_MODAL' :
            return {modalOpen:true};

        default :
            return state ;
    }
}

export default reducerExample;