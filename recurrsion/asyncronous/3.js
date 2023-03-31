const axios = require("axios");




// async function getData () {


//     try {
//         let res = await axios.get(url, {
//             auth: {
//                 username: '',
//                 password: ''
//             }
//         })
//         console.log(res.data);
//     }
//     catch(error) {
//         console.log(error.response);
//     }
// }
// getData ()


// axios.get(url, {
//     auth: {
//         username: '',
//         password: ''
//     }
// })

// // axios.get("url")
// .then((res) => {
//     console.log(res.data);

// }).catch((error) => {
//     console.log(error.response);
// })


// for(let i = 0; i < urls.length; i++) {


let myData = () => {
    
    let urls = ["https://api.github.com/users/MalikVedanshu", "https://api.github.com/users/jamesgolick"];
    let output = [];
    for(let i = 0; i < urls.length; i++) {
        axios.get(urls[i], {
            auth: {
                username: '',
                password: ''
            }
        })
            .then((res) => {
                return res.data;
            }).catch((err) => {
                return err.response;
            })
    }
}
