export default{
    authors: [],
    courses: [],
    products: [],
    ajaxCallsInProgress: 0,
    session: (typeof sessionStorage === "undefined") 
    ? false 
    : !!sessionStorage.jwt
};