```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {
    $match: { /* some filter */ }
  }, 
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  }, 
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10 } //This line is limiting the number of documents returned
])
```