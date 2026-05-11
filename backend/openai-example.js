async function generateWithAI(prompt) {
  return {
    output: `AI generated startup for: ${prompt}`
  };
}

module.exports = { generateWithAI };