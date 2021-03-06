export function authorsFormattedForDropDown(authors){
    return authors.map(author => {
    return {
       value: author.id,
       text: author.firstName + ' ' + author.lastName
   };
});
}


export function getCourseById(courses, id){
    const course = courses.filter(course => course.id == id);
    if(course.length) return course[0];
    return null;
}

export function getProductById(products, id){
    const product = products.filter(product => product.productId == id);
    if(product.length) return product[0];
    return null;
}