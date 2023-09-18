// var canCompleteCircuit = function (gas, cost) {
//   let i = 0;
//   let output = -1;

//   while (i <= gas.length - 1) {
//     let tank = 0;
//     if (gas[i] < cost[i] && tank === 0) {
//       i++;
//       continue;
//     }

//     let start = i;
//     let j = start;
//     tank = gas[i];
//     let count = 0;

//     while (count !== 2) {
//       if (start === j) {
//         count++;
//       }

//       if (tank < cost[j]) {
//         break;
//       }

//       tank = tank - cost[j];

//       if (j === gas.length - 1) {
//         j = 0;
//         tank += gas[j];
//         continue;
//       } else {
//         tank += gas[j + 1];
//       }
//       j++;
//     }

//     if (count === 2) {
//       output = start;
//       break;
//     }
//     i++;
//   }

//   return output;
// };

const canCompleteCircuit = (gas, cost) => {
  const sumOfGas = gas.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const sumOfCost = cost.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  let result = 0;
  let total = 0;

  if (sumOfGas < sumOfCost) return -1;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    if (total < 0) {
      total = 0;
      result = i + 1;
    }
  }

  return result;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
