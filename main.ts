const weight = {
  0 : 1,
  4 : 1,
  6 : 1,
  9 : 1,
  8 : 2
}

function splitToDigit(n : number){
  return (n + '').split('').map((i) => { return Number(i); })
}

function insertionSort(arr : number[], arrN : number[]){
    for(let i = 1; i < arr.length;i++){
        for(let j = i - 1; j > -1; j--){
            if(arr[j + 1] < arr[j]){
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
                [arrN[j+1],arrN[j]] = [arrN[j],arrN[j + 1]];
            }
        }
    };
  return arrN;
}

function check(n : number[]){
  var locWeight = 0;
  var length = n.length;
  for(let i = 0; i < length; i++){
    if(n[i] in weight){locWeight += weight[n[i]];}
  }
  return locWeight;
}

function weightSort(arr : number[]){
  var length = arr.length;
  let weights : Array<number> = new Array(0);

  for(let i = 0; i < length; i++){
    weights.push(check(splitToDigit(arr[i]))*arr[i]);
  }
  console.log(insertionSort(weights, arr));
}

weightSort([1, 4, 20, 24, 44, 22]);
