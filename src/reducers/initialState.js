export default{
    authors: [],
    courses: [],
    products: [],
    ajaxCallsInProgress: 0,
    session: (typeof sessionStorage === "undefined") 
    ? false 
    : !!sessionStorage.jwt
    ,profile: (typeof sessionStorage === "undefined") 
    ? []
    : [ {user: sessionStorage.getItem('user'), token: sessionStorage.getItem('jwt')}]
    //: { profile: {user: "myself", token: sessionStorage.getItem('jwt')}}
};