// Уявимо собі що людина хоче порахувати свою зарплату за місяць
// перше що вона вводить зарплату за день, а 2 місяць за який вона хоче порахувати зарплату.

// const sallaryPerDay = prompt("Введіть зарплату за день")
// const manth = prompt("Введіть місяць")
// let sallaryPerManth = 0
// if(manth === "Січень"){
//     sallaryPerManth = 23 *  sallaryPerDay
//     }else if(manth === "Лютий"){
//     sallaryPerManth = 20 *  sallaryPerDay
//     }else if(manth === "Березень"){
//     sallaryPerManth = 23 *  sallaryPerDay
//     }else if(manth === "Квітень"){
//     sallaryPerManth = 22 *  sallaryPerDay
//     }else if(manth === "Травень"){
//     sallaryPerManth = 23 *  sallaryPerDay
//     }else if(manth === "Червень"){
//     sallaryPerManth = 22 *  sallaryPerDay
//     }else if(manth === "Липень"){
//     sallaryPerManth = 23 *  sallaryPerDay
//     }else if(manth === "Серпень"){
//     sallaryPerManth = 23 *  sallaryPerDay
//     }else if(manth === "Вересень"){
//     sallaryPerManth = 22 *  sallaryPerDay
//     }else if(manth === "Жовтень"){
//     sallaryPerManth = 23 *  sallaryPerDay
//     }else if(manth === "Листопад"){
//     sallaryPerManth = 22 *  sallaryPerDay
//     }else if(manth === "Грудень"){
//     sallaryPerManth = 23 *  sallaryPerDay
//     }
//     console.log(sallaryPerManth)



// Як це зробити легше через switch
// const sallaryPerDay = prompt("Введіть зарплату за день")
// const manth = prompt("Введіть місяць")
// let sallaryPerManth = 0
// switch(manth){
//     case "Січень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Лютий":
//     sallaryPerManth = 20 * sallaryPerDay
//     break
//     case "Березень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Квітень":
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case "Травень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Червень":
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case "Липень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Серпень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Вересень":
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case "Жовтень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Листопад":
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case "Грудень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break;
//     default: 
//     alert ("Немає такого місяця")
//     }
//     
//     console.log(sallaryPerManth)

// const sallaryPerDay = prompt("Введіть зарплату за день")
// const month = prompt("Введіть місяць")
// let sallaryPerManth = 0
// switch(month){
//         case "Січень":
//         case "Березень":
//         case "Травень":
//         case "Липень":
//         case "Серпень":
//         case "Жовтень":
//         case "Грудень":
//         sallaryPerManth = 22 * sallaryPerDay
//         break
//         
//         case "Лютий":
//         sallaryPerManth = 20 * sallaryPerDay
//         break
//         
//         case "Квітень":
//         case "Червень":
//         case "Вересень":
//         case "Листопад":
//         sallaryPerManth = 22 * sallaryPerDay
//         break
//         default: 
//         alert ("Немає такого місяця")
//         }
//         
//         console.log(sallaryPerManth)