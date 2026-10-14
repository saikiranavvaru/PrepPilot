BEGIN;

CREATE TABLE IF NOT EXISTS practice_topics (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(80) NOT NULL UNIQUE,
  name VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS question_bank (
  id SERIAL PRIMARY KEY,
  practice_topic_id INTEGER NOT NULL
    REFERENCES practice_topics(id) ON DELETE CASCADE,
  prompt TEXT NOT NULL,
  difficulty VARCHAR(20) NOT NULL,
  expected_concepts TEXT[] NOT NULL DEFAULT '{}',
  rubric JSONB NOT NULL DEFAULT '{}'::jsonb,
  is_published BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT question_bank_difficulty_check
    CHECK (difficulty IN ('beginner', 'intermediate', 'advanced'))
);

ALTER TABLE interviews
  ADD COLUMN IF NOT EXISTS practice_topic_id INTEGER,
  ADD COLUMN IF NOT EXISTS status VARCHAR(20) NOT NULL DEFAULT 'in_progress',
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE questions
  ADD COLUMN IF NOT EXISTS question_bank_id INTEGER,
  ADD COLUMN IF NOT EXISTS position SMALLINT NOT NULL DEFAULT 1;

ALTER TABLE answers
  ADD COLUMN IF NOT EXISTS feedback_details JSONB NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'interviews_status_check'
  ) THEN
    ALTER TABLE interviews
      ADD CONSTRAINT interviews_status_check
      CHECK (status IN ('in_progress', 'completed', 'abandoned'));
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'interviews_practice_topic_id_fkey'
  ) THEN
    ALTER TABLE interviews
      ADD CONSTRAINT interviews_practice_topic_id_fkey
      FOREIGN KEY (practice_topic_id)
      REFERENCES practice_topics(id)
      ON DELETE SET NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'questions_question_bank_id_fkey'
  ) THEN
    ALTER TABLE questions
      ADD CONSTRAINT questions_question_bank_id_fkey
      FOREIGN KEY (question_bank_id)
      REFERENCES question_bank(id)
      ON DELETE SET NULL;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS question_bank_topic_difficulty_idx
  ON question_bank(practice_topic_id, difficulty);

CREATE INDEX IF NOT EXISTS interviews_user_status_created_idx
  ON interviews(user_id, status, created_at DESC);

COMMIT;