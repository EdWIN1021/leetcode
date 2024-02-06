package main

import "fmt"

func main (){

	fmt.Println(twoSum([]int{2,7,11,15}, 9))
}

func twoSum(numbers []int, target int) []int {
	for left, right := 0, len(numbers) - 1; left < right; {
		sum := numbers[left] + numbers[right]
		switch {
			case sum > target: right--
			case sum < target: left++
			default: return []int{left + 1,right + 1}
		}
	}
	return nil
}