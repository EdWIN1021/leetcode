package main

import (
	"fmt"
	"slices"
)

func main(){
	fmt.Println(rob([]int{2,7,9,3,1}))

}

func rob(nums []int) int {
	result := []int{};

	for i, v := range nums{
     var rob1 int
	 var rob2 int

	 if i - 1 < 0 {
		rob1 = 0
		rob2 = v
	 } else if i - 2 < 0 {
		rob1 = result[i-1]
		rob2 = v

	 }  else {
		rob1 = result[i-1]
		rob2 = result[i-2] + v
	 }

	 result = append(result, slices.Max([]int{ rob1, rob2}))
	}

    return result[len(result)-1];
}