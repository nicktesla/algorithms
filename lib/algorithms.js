/*
 * algorithms
 * https://github.com/Olaosebikan/algorithms
 *
 * Copyright (c) 2014 nicktesla
 * Licensed under the MIT license.
 */

'use strict';

//takes in a sequence, returns the subsequence with the maximum sum as well as the sum of this subsequence
function contiguousmaxsum(sequence) {
	var lastIndex = sequence.length-1;
	//REFACTOR: use a better data structure here e.g. a hash? or at least store beginnings and ends as a tuple
	//initialize
	var sums = [];
	var beginnings = [];
	var ends = [];

	for(var i=0; i <= lastIndex; i++) {
		sums.push(0); 
		beginnings.push(0);
		ends.push(0);	
	}

	for(var n=0; n <= lastIndex; n++) {	
		//base case
		if(n==0) {
			sums[0] = sequence[0]
			beginnings[0] = 0;
			ends[0] = 0;
		}
		//REFACTOR: break these cases up better
		//handle assignments with helper functions (only three things happen assign to previous, append current, or start afresh)
		else if(ends[n-1] == n-1 && sequence[n]>= 0) {
			if(sums[n-1] >= 0) {
				sums[n] = sums[n-1] + sequence[n];
				ends[n] = ends[n-1] + 1;
				beginnings[n] = beginnings[n-1];
			}
			else {
				sums[n] = sequence[n];
				ends[n] = n;
				beginnings[n] = n; 
			}
		}
		else if(ends[n-1] != n-1 && sequence[n]>= 0) {
			if(sequence[n] >= sums[n-1]) {
				sums[n] = sequence[n];
				ends[n] = n;
				beginnings[n] = n;
			}
			else {
				sums[n] = sums[n-1];
				beginnings[n] = beginnings[n-1];
				ends[n] = ends[n-1];
			}
		}
		else if(sequence[n]<0) {
			sums[n] = sums[n-1];
			beginnings[n] = beginnings[n-1];
			ends[n] = ends[n-1];
		}
	}
	var maxedges = [beginnings[lastIndex], ends[lastIndex]];
	return {sum: sums[lastIndex], maxedges: maxedges};
};

exports.contiguousmaxsum = contiguousmaxsum
