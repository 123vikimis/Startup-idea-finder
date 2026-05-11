CREATE TABLE startup_reports (
  id SERIAL PRIMARY KEY,
  niche TEXT,
  startup_name TEXT,
  virality_score FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);