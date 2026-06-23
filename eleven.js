// for each loop //

// let myarray = ["js","python","cpp","java","ruby"]
// myarray.forEach(function (item) {
//     console.log(item);
// })

// another way for forEach loop //

let myarray = ["js","python","cpp","java","ruby"]
myarray.forEach((item) => {
    // console.log(item)
})

// another way using printme function //

function printMe(item){
    console.log(item)
}

// myarray.forEach(printMe);

myarray.forEach((item,index,myarray) => {
    // console.log(item,index,myarray)
})


let arrayobj = [
    {filelanguage:"java",
        filename:"java.athx.exe",
    },
    {filelanguage:"python",
        filename:"java.athx.exe",
    },
    {filelanguage:"javacsript",
        filename:"java.athx.exe",
    },
    {filelanguage:"ruby",
        filename:"java.athx.exe",
    },
]

arrayobj.forEach((item) => {
    console.log(item.filelanguage)
})