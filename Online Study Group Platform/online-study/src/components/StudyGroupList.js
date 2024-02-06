import React from 'react';
import StudyGroupCard from './StudyGroupCard';

const studyGroups = [
  { id: 1, name: 'Mathematics Study Group', subject: 'Mathematics', members: 20 },
  { id: 2, name: 'Programming Study Group', subject: 'Computer Science', members: 15 },
  
];

const StudyGroupList = () => {
  return (
    <div>
      <h2>Available Study Groups</h2>
      {studyGroups.map((group) => (
        <StudyGroupCard key={group.id} group={group} />
      ))}
    </div>
  );
};

export default StudyGroupList;