# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error in MongoDB aggregation pipelines where the `$limit` stage unexpectedly restricts the result set. The original pipeline is designed to count occurrences of a field, sort the results, and return the top 10. Due to an error in how `$limit` interacts with the `$sort` stage when used together with a `$group`, only a subset of the results (and not necessarily the largest ones) is returned.  The solution shows the proper way to use these stages together.

## Bug Description:
The main issue lies in how the order of operations affects the aggregation results. This bug demonstrates how `$limit` can improperly limit the grouped results, rather than the overall sorted results.

## Solution:
The correct approach is described in `bugSolution.js` which fixes the output.