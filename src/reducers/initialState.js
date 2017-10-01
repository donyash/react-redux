export default{
    authors: [],
    courses: [],
    products: [],
    ajaxCallsInProgress: 0,
    session: (typeof sessionStorage === "undefined") 
     ?  {"logged_in": false, "user": null, "token": null}
     :  {"logged_in": !!sessionStorage.jwt, "user": sessionStorage.getItem('user'), "token": sessionStorage.getItem('jwt')}
};