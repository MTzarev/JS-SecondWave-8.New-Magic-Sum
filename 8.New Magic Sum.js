function newMagicSum(nums, sum){
for (let i= 0; i<nums.length; i++){
    for (let j = i+1; j<nums.length; j++){
        if (Number(nums[i])+Number(nums[j])===sum){
            console.log(`${nums[i]} ${nums[j]}`);
            
        }
    }
}
    console.log();
}
newMagicSum([14, 20, 60, 13, 7, 19, 8],
    27);
