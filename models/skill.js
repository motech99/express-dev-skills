const skills = [
  { id: 1, skill: 'Task breakdown', accquired: true },
  { id: 2, skill: 'Problem-solving', accquired: false },
  { id: 3, skill: 'Thoughtful designer', accquired: true },
  { id: 4, skill: 'Continuous learning', accquired: true },
];

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.accquired = false;
  skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update (id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};