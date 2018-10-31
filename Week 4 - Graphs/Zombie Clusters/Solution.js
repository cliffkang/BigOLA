const matrix = [ 
	[1,0,0],
  [1,1,0],
  [0,1,0],
	[1,0,1]
];

const matrix2 = [
	[1,1,0],
	[1,1,0],
	[0,0,1],
];

zombieClusters = m => {
	copyOfFalses = (m) => {
		const copy = [];
		m.forEach(row => {
			const r = [];
			row.forEach(e => r.push(false));
			copy.push(r);
		})
		return copy;
	}

	findCluster = (row, col) => {
		const cluster = [[row, col]];
		checkCardinalDirs = (i,j) => {
			// right, bottom, left, top
			const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
			const checkNext = [];
			dirs.forEach((dir, di) => {
				// check if in bounds
				const rowDirs = row + dir[0];
				const colDirs = col + dir[1];
				if (rowDirs >= 0 && rowDirs < m.length && colDirs >= 0 && colDirs < m[0].length){
					// check if it's 1 or not
					// check if it has not been checked already
					if (m[rowDirs][colDirs] === 1 && !checked[rowDirs][colDirs]) {
						// push into cluster
						cluster.push([rowDirs, colDirs]);
						// make checked array true
						checked[rowDirs][colDirs] = true;
						// push index into checkNext
						checkNext.push([rowDirs,colDirs]);
					}
				}
			});
			checkNext.forEach(next => checkCardinalDirs(next[0], next[1]));
		}
		checkCardinalDirs(row,col);
		return cluster;
	}

	const clusters = [];
	const checked = copyOfFalses(m);

	m.forEach((row,ri) => {
		row.forEach((e,ei) => {
			if (e && !checked[ri][ei]) {
				const newCluster = findCluster(ri,ei);
				console.log('newCluster', newCluster);
				clusters.push(newCluster);
				checked[ri][ei] = true;
			}
		});
	});
	return clusters.length;
}

// use 0 and 1's in matrix versus creating a separate copy with falses
zombieClustersRevised = m => {
    findCluster = (row, col) => {
        m[row][col] = 0;
		const cluster = [[row, col]];
		checkCardinalDirs = (i,j) => {
			// right, bottom, left, top
			const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
			const checkNext = [];
			dirs.forEach((dir) => {
				// check if in bounds
				const rowDirs = i + dir[0];
				const colDirs = j + dir[1];
				if (rowDirs >= 0 && rowDirs < m.length && colDirs >= 0 && colDirs < m[0].length) {
					// check if it's 1 or not
					// check if it has not been checked already
					if (m[rowDirs][colDirs] === 1) {
						// push into cluster
						cluster.push([rowDirs, colDirs]);
						// make checked array true
						m[rowDirs][colDirs] = 0;
						// push index into checkNext
						checkNext.push([rowDirs,colDirs]);
					}
				}
			});
			checkNext.forEach(next => checkCardinalDirs(next[0], next[1]));
		}
		checkCardinalDirs(row,col);
		return cluster;
	}

	const clusters = [];

	m.forEach((row,ri) => {
		row.forEach((e,ei) => {
			if (e === 1) {
                const newCluster = findCluster(ri,ei);
                console.log('newCluster', newCluster);
				clusters.push(newCluster);
			}
		});
    });
	return clusters.length;
}

console.log('answer',zombieClustersRevised(matrix));

