def findOrder(numCourses, prerequisites):
  preMap = {i:[] for i in range(numCourses)}
  output = []
  
  for course, prerequisite  in prerequisites:
    preMap[course].append(prerequisite)
  

  visited = set()
  cycle  = set()

  def dfs(course):
    if course in visited:
      return True

    if course in cycle:
      return False

    cycle.add(course)
    for pre in preMap[course]:
      if dfs(pre) == False:
        return False
      
    cycle.remove(course)
    visited.add(course)
    output.append(course)
    return True


  for course in preMap:
    if dfs(course) == False:
      return []
  return output
        

findOrder(6,[[5,0],[4,0],[0,1],[0,2],[1,3],[3,2]])