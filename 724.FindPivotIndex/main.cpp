#include <iostream>
#include <vector>

using namespace std;

int pivotIndex(std::vector<int> &nums) {
    int total_sum = 0;
    int left_sum = 0;

    for (int num: nums) {
        total_sum += num;
    }

    for (int i = 0; i < nums.size(); i++) {
        if (left_sum == total_sum - left_sum - nums[i]) {
            return i;
        }
        left_sum += nums[i];
    }


    return -1;
}

int main() {
    std::vector<int> nums{1, 7, 3, 6, 5, 6};
    cout << pivotIndex(nums) << endl;
    return 0;
}
