const initialApartmentsState = {
    linkApartmentToRobotModalVisibility: false
};

const apartmentsReducer=(state=initialApartmentsState, action)=>{

    switch(action.type)
    {
        case 'CREATE_APARTMENT_CLOSE_MODAL' :
            return {
                ...state,
                linkApartmentToRobotModalVisibility:false
            };

        case 'CREATE_APARTMENT_OPEN_MODAL' :
            return {
                ...state,
                linkApartmentToRobotModalVisibility:true
            };

        default :
            return state ;
    }
}

export default apartmentsReducer;