/*
--- Javascript execution context ---
-> It is about how javascript run the .js file.
-> javascript runs the the .js file in two phase.
-> Whenever we give code to javascript, firstly always it generates Global Execution Context this GEC refers by {this} variable. 
    Every Environment has different Global Execution Context, It executes in a thread as javascript iss single threaded.
 -- Execution Contexts --
1. Global Execution Context
2. Functional Execution Context
3. Eval Execution Context -> It is a property of global object.

-- Phases of Execution --
1. Memory Creation Phase -> In this phase all the variables and allocates the memory they don't executes. 
2. Execution Phase 

---> Example
1 let val1 = 10
2 let val2 = 5
3 function addNum (num1, num2) {
4 let total = num1 +num2
5 return total
6 }
7 let result1 = addNum (vall, val2)
8 let result2 = addNum (10, 2)

1-> Our codes gets allocated in Global Execution and refered by this, it is also called global environment.
2-> Memory creation, all variables has been assigned memory with value undefined and all function will contains definition of
    function. This is also called first cycle, this will occured .

    Vall → undefined Phase
    Val2 → undefined
    addNum → defination
    result 1 → undefined
    result 2 → undefined

3-> Now the second cycle is called Execution Phase, In this phase the varaiables which are allocated in memory gwt assigned the
    values.
    val1 =  10
    val2 = 5
    addNum function definition will not get executed because it has nothing to execute.
    result1 = addNum(val1, val2) -> Now when function called then a new executional context has been created for the function which
    contains new varaible environment and execution thread. Whenever the functions get executed then every time a new executional 
    context has been created. So the two phases memory and execution phase will run again for the given contexed function and 
    its variables.
        -> memory phase for function addNum(val1, val2), this is running for the function definition.
        val1 → undefined
        val2 → undefined
        total → undefined

        -> Exection phase for function addNum(val1, val2)
        num1 → 10
        num2 → 5
        total → 15

        -> And this {total} is get returned in their parent executional context or returnes the value to the global Ececution context.
        After execution this executional context gets deleted.
    So result1 → 15
    result2 → addNum(10, 2), this will create new context for the function defintion and runs the both phases. In memory phase 
        num1 → undefined
        num2 → undefined
        total → undefined
        In execution phase -> 
        num1 → 10
        num2 → 2
        total → 12
        -> Total gets return to its parent execution context and then this context gets deleted

*/

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(vall, val2)
let result2 = addNum(10, 2)
