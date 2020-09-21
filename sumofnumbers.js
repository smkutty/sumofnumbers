let myNums = [2, 4, 6, 8];

//for-loop - sumFor
function sumFor(nums){
  let sum = 0;
  for(const num of nums){
    sum += num;
  }
  return sum;
}
console.log(sumFor(myNums));

//while-loop - sumWhile
function sumWhile(nums){
  let sum = 0, i = 0;
  while(i < nums.length){
    sum += nums[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(myNums));

//recursion - sumRecursion
function sumRecursion(nums){
  if(nums.length == 0){
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
console.log(sumRecursion(myNums));

//underscore - sumTheSimpleWay
function sumTheSimpleWay(nums){
  return _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}
console.log(sumTheSimpleWay(myNums));