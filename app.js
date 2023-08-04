class Node{
    constructor(x,y){
        this.x= x;
        this.y= y;
    }
}

function isValidMove(x, y){

    return x<=7 && x>=0 && y<=7 && y>=0

}


function generatePossibleMoves(x, y){
    const availableMoves= [[2,1], [1,2], [-1,2], [-2,1], [-2,-1], [-1,-2], [1,-2], [2,-1]]
    const possibleMoves= []

    for (let i=0; i < availableMoves.length; i++){
        const nextX= x + availableMoves[i][0]
        const nextY= y + availableMoves[i][1]

        if(isValidMove(nextX, nextY)){
            possibleMoves.push([nextX, nextY])
        }

    }

    return possibleMoves
}


function knightsShortestPath(start, end){
  let queue= [[start]]
  let visited= new Set()
  visited.add(start.toString())
  while(queue.length > 0){
    let path= queue.shift()
    let [x,y]= path[path.length-1]

    if(x === end[0] && y ===end[1]){
      return path
    }
    const node= new Node(x,y)
    let children= generatePossibleMoves(x,y)
  
    for (const child of children) {
      let [nextX, nextY]= [child[0], child[1]]
      const nextPos = [nextX, nextY].toString();
      if (!visited.has(nextPos)) {
        visited.add(nextPos)
        queue.push([...path, [nextX, nextY]])      
      }
    } 
  }
  return null
}
