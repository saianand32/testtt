// let arr = [];
// arr.push("youtube");
// arr.push("discord");

let webSet = new Set();
webSet.add("discord");
webSet.add("youtube");

// let arr = ["youtube","google"]



// let a = Array.from(sai)


// for(let ele of arr){
//     if(window.location.hostname.includes(ele))
// {
//     alert("you are in "+ ele);
// }
// }
// for(let ele of webSet){
//     if(window.location.hostname.includes(ele))
// {
//     alert("you are in "+ ele);
// }
// }

webSet.forEach((ele) => {
    if(window.location.hostname.includes(ele))
    {
        alert("you are in "+ ele);
    }
})


// if(window.location.hostname.includes("discord"))
// {
//     alert("you are in discord")
// }




// if(window.location.hostname == "www.youtube.com")
// {
//     alert("you are in youtube")
// }
// function generateHTML(){
//     return `
//     <div class = "blockpage">hiii </div>
//     `
// }

// function generateCSS (){
//     return `
//     <style>
//     html{
//         background-color:black ;
//     }
//     .blockpage{
//         width = 100%;
//         height = 100%;
//         background-color:black ;

//     }
//     </style>; 
//     `
// };
