db.getCollection('htmlDocument')
  .aggregate([
    { $lookup:
      {
        from: 'workflowProcess',
        localField: '_id',
        foreignField: 'docId',
        as: 'wf'
      }
    },
    { $unwind: '$wf' },
    {
      $addFields:
      {
        'approvers': '$wf.approvers'
      }
    },
    { $lookup: { from: 'users', localField: 'approvers.userName', foreignField: 'userName', as: 'approvers' } },
    { $unwind: '$creator' }
  ]).toArray()
    
    
    
    
    
    
    
    