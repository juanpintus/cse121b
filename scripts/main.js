// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

// console.log("TESTS: 123");
// let scores = [56, 78, 95, 77, 65, 86];
// let target = scores.indexOf(87);
// // console.log(target);

// const points = [100,88,94,78,84,69];

// function convertPointsToStatus(pointTotal) {
//   let status = 'Not Complete';
//   if (pointTotal >= 93) {
//     status = 'Excellent';
//   } else if (pointTotal >= 70) {
//     status = 'Complete';
//   }
//   return status;
// }
