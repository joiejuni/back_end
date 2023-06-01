async function selectAssignment(connection,groupId) {
    const selectAssignmentQuery = `
            select * from Assignment;
                  `;
    const [assignmentRows] = await connection.query(selectAssignmentQuery,groupId);
    return assignmentRows;
  }
  
  
  module.exports = {
    selectAssignment,
  };
  