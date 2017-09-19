import delay from './delay';



// function fetchProducts() {
//   return dispatch => {
//     return fetch(`http://localhost:60323/api/Products`)
//       .then(response => response.json());
//   };
// }
// const products = fetchProducts();

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: "1",
    productName: "Mock Rake"
  },
  {
    id: "1",
    productName: "Mock Cart"
  },
  {
    id: "3",
    productName: "Mock Hammer"
  },
  {
    id: "4",
    productName: "Mock Saw"
  },
  {
    id: "5",
    productName: "Mock Trimmer"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (product) => {
  return replaceAll(product.productname, ' ', '-');
};

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }

  static saveProduct(product) {
    product = Object.assign({}, product); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProductNameLength = 1;
        if (product.title.length < minProductNameLength) {
          reject(`Name must be at least ${minProductNameLength} characters.`);
        }

        if (product.id) {
          const existingCourseIndex = products.findIndex(a => a.id == product.id);
          products.splice(existingCourseIndex, 1, product);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          product.id = generateId(product);
          //product.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          products.push(product);
        }

        resolve(product);
      }, delay);
    });
  }

  static deleteCourse(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProductToDelete = products.findIndex(product => {
            product.id == productId;
        });
        products.splice(indexOfProductToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProductApi;
