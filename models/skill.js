const skills = [
  { id: 1, skill: 'Task breakdown', accquired: true },
  { id: 2, skill: 'Problem-solving', accquired: false },
  { id: 3, skill: 'Thoughtful designer', accquired: true },
  { id: 4, skill: 'Continuous learning', accquired: true },
];

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
