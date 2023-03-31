const axios = require("axios");
// async function loginnamesGitHub() {
//     try {
//         const res = await axios.get("https://api.github.com/users", {
//             auth: {
//                 username: '',
//                 password: ''
//             }
//         });
//         // let names = res.data.map(user => {
//         //     return { name: user.login, ...user }
//         // });
//         // names = names.sort((b, a) => {
//         //     if (a.name > b.name) {
//         //         return 1;
//         //     }
//         //     if (a.name < b.name) {
//         //         return -1;
//         //     }

//         // });
//         console.log(res.data);
//     }
    
//     catch (error) {
//         console.log(error.response);
//         console.log("Something Went Wrong");
//     }
// }

let myPromise = new Promise((resolve, reject) => {
    // "Producing Code" (May take some time)
        resolve = () => {
            console.log('done')
        }
        reject = () => {
            console.log("not done")
        }
    });

    
// let res = async () => {
//     try{
//       dlkjfskdfsddlfjs
//     }
/*
        try {

        }
        try {

        }
*/  


//     catch (error) {
//         
//     }
// }


//  async function namea() {
//     try {
//         // async event
//     }
//     catch(error) {
//         console.log(error);
//     }
//  }
// loginnamesGitHub()
