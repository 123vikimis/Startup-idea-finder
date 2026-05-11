class AgentMemory {
  constructor() {
    this.memory = [];
  }

  save(data) {
    this.memory.push(data);
  }

  getAll() {
    return this.memory;
  }
}

module.exports = AgentMemory;