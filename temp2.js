// const Multi = () => {
//     return 3.14156;
// }

// const ABSqr = ( a , b , callback ) =>{
//     const c = a * b * callback();
//     return c;
// }

// console.log( ABSqr( 2,3 , Multi ) );
// const arr  = [{
//     firstName: "Twof",
//     lastName: "dd",
//     age : 10
// },
// {
//     firstName: "Saym",
//     lastName: "dd",
//     age : 15
// }
// ]

// const n = [1,3,5,7];
// const m = [-2,4,-6,8];

// const brr = arr.filter( element  => {
//     return element;
// });

// const newN = n.filter((element,index) => {
//     return m[index] > 0;
// })
// console.log(newN);

// const newArr = [2,4,6,8];
// const result = newArr.forEach((element,index) => {
//     console.log(element);
//     if( index >= 1 && index < 3){
//         console.log("YES");
//         return element * 10;
//     }
//     else{
//         return -1;
//     }
// });
// console.log( result );

// const notification = [ 
//     {
//         msg: "ppp",
//         num: 1,
//         read: true,
//     },
//     {
//         msg: "jjj",
//         num: 1,
//         read: true,
//     },
//     {
//         msg: "lll",
//         num: 0,
//         read: true,
//     }
//  ];

// const flag = notification.every((element,index) => {
//     return element.num >= 0;
// })
// console.log(flag);
// const sayHello = `This is ${flag?"TRUE":"FALSE"} Hello`;
// console.log(sayHello);

const arr = [1,2,3,2,3,2,1,1,12];
let keys = [];
let freq = {

}
arr.forEach(e => {
    keys = Object.keys( freq );
    if( keys.length == 0 ){
            freq = {
                ...freq,
                [e]: true,
            }
    }
    keys.forEach(key => {
        if( key != e ) {
            freq = {
                ...freq,
                [e]: true,
            }
        }
    })
})
keys = Object.keys(freq);
console.log(keys);