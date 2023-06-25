import "dotenv/config";
import saySomething from "./my-other-file.js";

const userCredentials = {firstName: 'Yashwanth'};
const userDetails = {nationality: 'Indian'};

const user = {
    ...userCredentials,
    ...userDetails,
};
console.log(user);

console.log(process.env.MY_SECRET);
saySomething();
