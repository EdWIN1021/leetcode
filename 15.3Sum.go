package main

import (
	"slices"
)

func threeSum(nums []int) [][]int {
    result := [][]int{}
	slices.Sort(nums)
	// [-4 -1 -1 0 1 2]
	for i, v := range nums {
		if nums[i-1] == nums[i] {
			continue
		}

		left, right :=  i + 1, len(nums) -1

		for left < right {
			sum := v + nums[left] + nums[right]
			if sum < 0 {
				left++
			} else if sum > 0 {
				right--
			} else {
				result = append(result, []int{ i, left, right })
				left++
			}
		}
	}

	return result
}