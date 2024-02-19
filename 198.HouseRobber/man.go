package main

import (
	"fmt"
	"slices"
)

func main(){
	fmt.Println(rob([]int{2,7,9,3,1}))

}

func rob(nums []int) int {
	rob1, rob2 := 0,0 
	for _, v := range nums {
		temp := rob2
		rob2 = slices.Max([]int{ rob2, rob1 + v })
		rob1 = temp
	}
    return rob2;
}