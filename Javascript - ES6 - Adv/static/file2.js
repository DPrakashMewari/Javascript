// import {default as prak} from './file1.js';
// or  
import prak from './file1.js'
prak(); // still it working  when no find it will work



// import {name} from  './file1.js'
// import {hello,user as us,test} from './file1.js'
import {user as us} from './file1.js'
// short cut to import all  * as prak 
// console.log(name);
// hello();
us('Pray')
// let a1 = new test()