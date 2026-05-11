function generatePitch(startup) {
  return {
    title: startup,
    tagline: 'AI-powered future startup',
    slides: [
      'Problem',
      'Solution',
      'Market',
      'Business Model',
      'Go-To-Market'
    ]
  };
}

module.exports = { generatePitch };