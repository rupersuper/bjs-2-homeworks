function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0
  );

  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? (sumEvenElement += arr[i]) : (sumOddElement += arr[i]);
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const arr = arrOfArr[i];
    const result = func(...arr);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
