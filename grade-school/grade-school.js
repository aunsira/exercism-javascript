class School {
  constructor() {
    this.students = {};
  }

  add(name, grade) {
    if (!this.students[grade]) this.students[grade] = [];
    this.students[grade].push(name);
    this.students[grade].sort();
  }

  grade(g) {
    return this.students[g] || [];
  }

  roster() {
    return this.students;
  }
}

module.exports = School;
