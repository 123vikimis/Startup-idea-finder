require('dotenv').config();

async function generateAIStartupIdea(niche) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return {
      error: 'Missing OPENAI_API_KEY in .env'
    };
  }

  return {
    startup: `${niche} AI`,
    generated: true,
    source: 'OpenAI API Ready'
  };
}

module.exports = { generateAIStartupIdea };