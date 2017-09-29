export default{
    authors: [],
    courses: [],
    products: [],
    ajaxCallsInProgress: 0,

    // session: (typeof sessionStorage === "undefined") 
    // ? false 
    // : !!sessionStorage.jwt
    // ,profile: (typeof sessionStorage === "undefined") 
    // ? []
    // :  {user: sessionStorage.getItem('user'), token: sessionStorage.getItem('jwt')}
    // //above was working as-is

    //new implementation below
     session: (typeof sessionStorage === "undefined") 
     ?  {"logged_in": false, "user": null, "token": null}
     :  {"logged_in": !!sessionStorage.jwt, "user": sessionStorage.getItem('user'), "token": sessionStorage.getItem('jwt')}
    
    //: [ {user: sessionStorage.getItem('user'), token: sessionStorage.getItem('jwt')}]  worked as array, but warning on home page load
    //the object fixed the warning on the initial home page load
    //: { profile: {user: "myself", token: sessionStorage.getItem('jwt')}}
};