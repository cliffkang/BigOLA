## Zombie Clusters
You have a matrix, full of 1 and zeros. Each {row,col} value represents the friendship status of two people/zombies. If they know each other the value is 1, else zero. How many clusters of zombies are there? A cluster is a group of zombies that directly and indirectly know each other.

Ex:
```
[ [1,1,0],
  [1,1,0],
  [0,0,1] ]
```

There are two zombie clusters, first cluster is in node[0][0], node[0][1], node[1][0], and node[1][1]. Second cluster is in node[2][2].

ex 2:

```
[ [1,0,0],
  [0,1,0],
  [0,0,1] ]
```

There are three zombie clusters. first is in node[0][0], second is in node[1][1], third is in node[2][2]