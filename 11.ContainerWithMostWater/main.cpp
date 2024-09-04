#include <iostream>
#include <vector>

using namespace std;

int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1, max_area = 0;
    while (left < right) {
        int area = (right - left) * std::min(height[left], height[right]);
        max_area = max(area, max_area);
        if (height[left] <= height[right]) {
            left++;
        } else if (height[left] > height[right]) {
            right--;
        }
    }
    return max_area;
}

int main() {
    vector<int> height { 1,8,6,2,5,4,8,3,7 };
    cout << maxArea(height) << endl;

    return 0;
}
