// for (let i = 0; i <= 30; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     if (i == 30) {
//         console.log("Qurtardi");
//     }
// }

// for (let i = 0; i <= 30; i++) {
//     if (i % 7 == 0) {
//         console.log(i);
//     }
//     if (i == 28) {
//         console.log("Qurtardi");
//     }
// }

// for (let i = 30; (i <= 30)&&(i >= 0); i--) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     if (i == 1) {
//         console.log("Qurtardi");
//     }
// }

// for (let i = 1; i <= 31; i++) {
//     for (let i2 = 0; i2 < 24; i2++) {
//         if (i2 <= 9) {
//             for (let i3 = 0; i3 < 60; i3++) {
//                 for (let i4 = 0; i4 < 60; i4++) {
//                     console.log(`${i} oktyabr,  0${i2}:${i3}:${i4}`);
//                 }
//             }
//         } else{
//             for (let i3 = 0; i3 <= 60; i3++) {
//                 for (let i4 = 0; i4 < 60; i4++) {
//                     console.log(`${i} oktyabr,  ${i2}:${i3}:${i4}`);
//                 }
//             }
//         }
//     }

// }

adlar = ["Huriyye","Mitri",'Aysel','Togrul','Cabir','Ferid',3,4,5,6]

for (let ad = 0; ad < adlar.length; ad++) {
    if (typeof(adlar[ad]) == "string") {
        console.log(adlar[ad]);
        
    }
    
}