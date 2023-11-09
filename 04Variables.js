const accountId = 12345
let email = "rosha@1234"
var password = "12345"
city = "Delhi"

email = "abhisheka@1234"
password = "6789"
city = "ramapur"

console.table([accountId, email, password, city]);

/* Initially when javascript introduced, theree is no concept of scope of variable. So when a user change something in 
    variable with same name which is used in other function also, SO the changes reflects in all the function where the variable
    name is same.

    To avoid the {var} (scope of variable problem) we use {let} 
*/
