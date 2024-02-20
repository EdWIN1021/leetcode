package main

import (
	"fmt"
	"math"
)

type TreeNode struct{
	Val int
	Left *TreeNode
	Right * TreeNode
}

func main(){
	root := &TreeNode{5, nil, nil}
	root.Left = &TreeNode{3, nil, nil}
	root.Right = &TreeNode{7, nil, nil}
	root.Right.Left = &TreeNode{4, nil, nil}
	root.Right.Right = &TreeNode{8, nil, nil}  

	fmt.Println(isValidBST(root))
}

func isValidBST(root *TreeNode) bool {
	return dps(root, math.MinInt, math.MaxInt)
}

func dps(root *TreeNode, lower int, upper int) bool {
	if root == nil { 
		return true 
	}
	if lower >= root.Val || root.Val >= upper {
		return false
	}
	return dps(root.Left, lower, root.Val ) && dps(root.Right, root.Val, upper)
}