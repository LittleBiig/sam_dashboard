
// front-end root
export const API_PREFIX = '/my-sam';

// back-end root
export const API_BASE_URL = "https://sam-dashboard-test.herokuapp.com";

// back-end routes
export const POST_OWNER_LOGIN = "/owner_login"; // POST  {"email": "real@bot.com","password": "realbot123"}
export const GET_OWNER_DATA = "/get_owner_data"; // GET  X-Auth in every following request
export const POST_SIGNUP = "/owner_signup"; // POST  create a new user
export const GET_OWNER_LOGOUT = "/owner_logout"; // GET
export const GET_OWNER_ROBOT_LIST = "/get_owner_robot_list"; // GET
export const GET_ROBOT___ID = "/robot"; // GET "/robot/{id}"
export const GET_OWNER_APARTMENT_LIST = "/get_owner_apartment_list"; // GET
export const GET_APARTMENT___ID = "/apartment"; // GET "/apartment/{id}"
export const POST_CREATE_APARTMENT = "/apartment"; // POST "/apartment/" with required:

// name: string
// address:{
//     street: {
//         type: String,
//     default: 'unknown',
//             required: true,
//             minlength: 1,
//             trim: true
//     },
//     house_nr:{
//         type: Number,
//     default: 0,
//             trim: true,
//             required: true,
//             minlength: 1
//     },
//     zip:{
//         type: Number,
//     default: 0,
//             trim: true,
//             required: true,
//             minlength: 1
//     },
//     city: {
//         type: String,
//     default: 'unknown',
//             required: true,
//             minlength: 1,
//             trim: true
//     },
//     country: {
//         type: String,
//     default: 'unknown',
//             required: true,
//             minlength: 1,
//             trim: true
//     }
// }

// post to /robot_update/id ===> {"current_apartment_id": "234234234"}
// var body = _.pick(req.body, ['given_name', 'current_apartment_id', 'server_command']);
// {"current_apartment_id: "234234234"}
export const POST_APARTMENT_UPDATE___ID = "/apartment_update"; // POST '/apartment_update/{id}'
/*
'name', 'public_viewing_allowed', 'signup_required', 'empty_since', 'application_method', 'address', 'max_viewing_time_in_min', 'size_in_m2', 'num_rooms', 'floor_nr', 'position', 'construction_year', 'last_renovation_year', 'is_project_open'
 position: "left", "center", "right"
 */
export const POST_ROBOT_UPDATE___ID = "/robot_update"; // POST '/robot_update/{id}'

/*
'given_name', 'current_apartment_id' (the most used is current_apartment_id)
 */






