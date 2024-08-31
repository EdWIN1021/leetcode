#include <vector>
#include <iostream>
#include <algorithm>

int longestOnes(std::vector<int>& nums, int k) {
    int max_length = 0;
    int zero_count = 0;
    int left = 0;

    for(int right = 0; right < nums.size(); right++){
        if(nums[right] == 0){
            zero_count += 1;
        }

        while (zero_count > k){
            if(nums[left] == 0){
                zero_count -= 1;
            }
            left++;
        }
        max_length = std::max(max_length, right - left + 1);
    };
    return max_length;
}


int main() {
    std::vector<int> nums { 0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1 };
    std::cout << longestOnes(nums, 3) << std::endl;

    return 0;
}