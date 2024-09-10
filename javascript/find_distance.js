// function findDistance(graph, vertexA, vertexB) {
//   // type your code here
//   class QueueItem {
//     constructor(vertex, distance = 0) {
//       this.vertex = vertex;
//       this.distance = distance;
//     }
//   }

//   let front = 0, end = -1;
//   const queue = [];
//   queue.push(new QueueItem(vertexA, 0));
//   end++;
//   const visited = new Set();

//   while (front <= end) {
//     const qi = queue[front++];
    
//     visited.add(qi.vertex);
//     for (const vertex of graph[qi.vertex]) {
//       if (vertex === vertexB)
//         return qi.distance + 1;

//       if (!visited.has(vertex)) {
//         queue.push(new QueueItem(vertex, qi.distance + 1));
//         end++;
//       }
//     }
//   }
//   return -1;
// }


function findDistance(graph, vertexA, vertexB) {
  // type your code here
  const queue = [[vertexA, 0]];
  let front = 0, end = 0;
  const visited = new Set();

  while (front <= end) {
    const [curVertex, distance] = queue[front++];
    visited.add(curVertex);

    for (const adjVertex of graph[curVertex]) {
      if (adjVertex === vertexB)
        return distance + 1;

      if (!visited.has(adjVertex)) {
        queue.push([adjVertex, distance+1]);
        end++;
      }
    }
  }
  return -1;
}


if (require.main === module) {
  // add your own tests in here
  const graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  console.log("Expecting: 2");
  console.log(findDistance(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "dave", "carl"));

  console.log("");
  console.log("Expecting: -1");
  console.log(findDistance(graph, "jan", "jan"));

  console.log("");
  console.log("Expecting: 1");
  console.log(findDistance(graph, "jan", "jambaby"));
}

module.exports = findDistance;

// Please add your pseudocode to this file
// And a written explanation of your solution
