const initialRobotsState = {
    linkApartmentToRobotModalVisibility: false
};


const robotsReducer=(state=initialRobotsState, action)=>{

    switch(action.type)
    {
        case 'LINK_APARTMENT_TO_ROBOT_CLOSE_MODAL' :
            return {
                ...state,
                linkApartmentToRobotModalVisibility:false
            };

        case 'LINK_APARTMENT_TO_ROBOT_OPEN_MODAL' :
            return {
                ...state,
                linkApartmentToRobotModalVisibility:true
            };

        default :
            return state ;
    }
}

export default robotsReducer;