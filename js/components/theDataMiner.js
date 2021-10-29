// cb = callback, which is a function we want to run when an operation is done
// params is the optional object that we're going to pass to our data miner
// this will let us pass things like a user ID or name that we can use in our database query
// to get one row of data - a more specific query => { id: 1 } or {id: 1, name: "Trevor" }

function getData(params, cb) { 
    //use the Fetch API to retrieve some data
    let baseURL = "./includes/index.php";

    if(params) { // this is the optional object we pass to DataMiner
        let keys = Object.keys(params); // Objects.keys creates an array of keys => ["id", "name"]

        // Then loop through the keys using the Array.map method (look on MDN) and create a
        // query string for it
        // id=1&&name=Trevor / && = and
        let newQStringParams = keys.map(key => `${key}=${params[key]}`).join("&&");

        // take the original baseURL which is index.php (see above) and add the query string to it
        baseURL += `?${newQStringParams}`;
        // so that it becomes ./includes/index.php?id=1
    }

    fetch(baseURL)
    .then(res => res.json()) // unpack the API response (turn the file back into plain JS object)
    .then(data => {
        // console.table(data);

        cb(data[0]);

        // do anything else here that we want with our data
    })
    
    .catch(error => console.error(error)); // catch and report any errors        
}

export { getData } // named export