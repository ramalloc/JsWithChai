/*
---- fetch() ----
-> Form internet explorer 5 we get XMLHttRequest. The XMLHttpRequest API worked like a charm back then, but as the web grew, 
    it became so difficult to work with that JavaScript frameworks, notably jQuery, had to abstract it to make implementation
    easier and success/error handling smoother. Tracking States, making Asynchronous and callback leads issues in HMLHttpRequest.
-> In 2015, the Fetch API was launched as a modern successor to XMLHttpRequest, and it has subsequently become the de facto
    standard for making asynchronous calls in web applications.One significant advantage Fetch has over XMLHttpRequest is that 
    it leverages promises, allowing for a simpler and cleaner API while avoiding callback hell.
-> it wasn’t included in the Node.js core because of some limitations. In a question answered by one of Node’s core contributors,
    it was noted that the browser’s Fetch API implementation is dependent on a browser-based Web Streams API and the AbortController 
    interface (for aborting fetch requests), which wasn’t available in Node until recently.
-> So NodeJs Core Team made their browser-based Web Streams API then they included fetch API
-> A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. 
    A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).
    Instead, a then() handler must check the Response.ok and/or Response.status properties.
-> We can send anything in fetch like header, cors, body etc. like - fetch("URL", {headers})
*/


/*
-> In NodeJs as we saw the event loop, now in previous fetch example we saw that fetch() implements earlier than other Promises
    because other Promises like setTimeout() have different Queue which is Task Queue and fetch() have their own Queue which is 
    called Micro Task Queue / Priority Queue or fetch Queue which has higher priority and faster than Task Queue therefore fetch()
    executes earlier than other Promises.
*/

/*
--- Fetch Mehanism ---
-> fetch works in two parts, 1st part handles is Web Browser or Native Node APIs request and 2nd is part handle the reservation
    of variable or space in memory.
-> The Data which aquires by the fetch in memory is like this :- 
    Data___
    Onfulfilled[] -> this is resolve
    onRejection[] -> this is rejection
    We are not allowed to push the values in the above Data's Arrays because we cannot access them, they are private fields.
-> 2nd part handles Brwoser based API or Node based API, from the Browser or Node a network request fired by them we cannot 
    fire that request because the resource is only present in Browser and Node to fire n/w request.
    After that when when network request fired then it will go to n/w or will not go to n/w.
-> Whatever the response comes after network firing, it will save in 1st part of fetch means if network request passes into the 
    n/w and got any response like - data, 404 error, 200 status etc. they will always saves in Onfulfilled[] / resolve. 
    And if n/w request didn't passed into the n/w or gets failed then it will save into onRejection[] / rejection.
-> Now the Data___ is initially empty but reserved in memory, onFullfilled[] and onRejection[] contains function() in it 
    onFullfilled[fn()] which fullfills the data comes from when the n/w request finished into the Data___.
    Now It is Data___'s responsibily to fullfill that data into that variable which is available in Global Memory.

*/