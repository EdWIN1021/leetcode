#include <vector>
#include <iostream>
using namespace std;


bool increasingTriplet(vector<int>& nums) {
    int first = INT_MAX;
    int second = INT_MAX;

    for(auto n : nums){

        if(n <= first) {
            first = n;
        }
        else if (n <= second){
            second = n;
        }
        else {
            return true;
        }
    }
    return false;
}


int main (){
    vector<int> nums { 2,1,5,0,4,6 };
    increasingTriplet(nums);

    return 0;
}