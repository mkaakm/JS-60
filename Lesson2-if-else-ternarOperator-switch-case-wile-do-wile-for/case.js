// В нас багато місяців які ми можемо згрупувати.
// Це наш попередній код
// Const sallaryPerDay = prompt(“Введіть зарплату за день”)
// const month = prompt(“Введіть місяць”)
// let sallaryPerManth = 0
// switch(month){
//     case “Січень”:
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case “Лютий”:
//     sallaryPerManth = 20 * sallaryPerDay
//     break
//     case “Березень”:
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case “Квітень”:
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case “Травень”:
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case “Червень”:
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case “Липень”:
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case “Серпень”:
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case “Вересень”:
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case “Жовтень”:
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case “Листопад”:
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case “Грудень”:
//     sallaryPerManth = 23 * sallaryPerDay
//     break;
//     default: 
//     alert “Немає такого місяця”
//     }
//     console.log(sallaryPerManth)



// Тепер перепишемо його більш зручно та компактно використовуючи групування

// const sallaryPerDay = prompt("Введіть зарплату за день")
// const manth = prompt("Введіть місяць")
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