BEGIN;

INSERT INTO practice_topics (slug, name, description)
VALUES
  ('javascript', 'JavaScript Fundamentals', 'Core JavaScript concepts used in frontend and backend interviews.'),
  ('react', 'React', 'React rendering, state management, hooks, and performance topics.'),
  ('nodejs', 'Node.js', 'Backend JavaScript, APIs, asynchronous execution, and reliability.'),
  ('postgresql', 'PostgreSQL', 'SQL, data modeling, transactions, and query performance.'),
  ('system-design', 'System Design', 'Scalable API, caching, reliability, and architecture fundamentals.')
ON CONFLICT (slug)
DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  updated_at = CURRENT_TIMESTAMP;

WITH seed_questions (
  topic_slug,
  prompt,
  difficulty,
  expected_concepts,
  rubric
) AS (
  VALUES
    (
      'javascript',
      'Explain the JavaScript event loop and the difference between microtasks and macrotasks.',
      'intermediate',
      ARRAY['event loop', 'call stack', 'microtask queue', 'macrotask queue', 'promise', 'setTimeout']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'javascript',
      'What is a closure in JavaScript? Give a practical example where closures are useful.',
      'intermediate',
      ARRAY['lexical scope', 'outer function', 'inner function', 'private state', 'callback']::TEXT[],
      '{"conceptCoverage":40,"reasoning":25,"example":25,"clarity":10}'::JSONB
    ),
    (
      'javascript',
      'What is the difference between debouncing and throttling, and when would you use each?',
      'intermediate',
      ARRAY['debounce', 'throttle', 'event handler', 'delay', 'rate limiting', 'scroll']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'react',
      'How would you avoid unnecessary re-renders in a data-heavy React view?',
      'advanced',
      ARRAY['react memo', 'useMemo', 'useCallback', 'state locality', 'keys', 'profiling']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'react',
      'How does useEffect work, and what problems can an incorrect dependency array create?',
      'intermediate',
      ARRAY['side effect', 'dependency array', 'stale closure', 'cleanup', 'infinite loop']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'react',
      'Explain the difference between controlled and uncontrolled form components in React.',
      'beginner',
      ARRAY['controlled', 'uncontrolled', 'state', 'ref', 'form input', 'validation']::TEXT[],
      '{"conceptCoverage":40,"reasoning":25,"example":25,"clarity":10}'::JSONB
    ),
    (
      'nodejs',
      'How would you prevent CPU-heavy work from blocking a Node.js server?',
      'advanced',
      ARRAY['event loop', 'worker threads', 'queue', 'child process', 'asynchronous', 'blocking']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'nodejs',
      'What should a production-ready Express API do when an unexpected error occurs?',
      'intermediate',
      ARRAY['error middleware', 'status code', 'logging', 'safe response', 'request id', 'no stack trace']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'nodejs',
      'Explain graceful shutdown for an API server connected to PostgreSQL.',
      'advanced',
      ARRAY['sigterm', 'server close', 'database pool', 'in-flight requests', 'shutdown', 'deployment']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'postgresql',
      'How do database indexes improve PostgreSQL query performance, and what trade-offs do they introduce?',
      'intermediate',
      ARRAY['index', 'b-tree', 'query planner', 'read performance', 'write cost', 'storage']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'postgresql',
      'When should a PostgreSQL transaction be used in an application workflow?',
      'intermediate',
      ARRAY['transaction', 'atomicity', 'commit', 'rollback', 'consistency', 'multiple writes']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'postgresql',
      'How would you diagnose a slow PostgreSQL query in production?',
      'advanced',
      ARRAY['explain analyze', 'query plan', 'index', 'sequential scan', 'monitoring', 'optimization']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'system-design',
      'Design a rate-limiting strategy for a public API.',
      'advanced',
      ARRAY['rate limit', 'token bucket', 'redis', 'api key', 'window', '429']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'system-design',
      'How would you design a scalable URL shortener service?',
      'advanced',
      ARRAY['unique id', 'database', 'cache', 'redirect', 'hash', 'scaling']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    ),
    (
      'system-design',
      'When should an application use caching, and what cache invalidation risks should be considered?',
      'intermediate',
      ARRAY['cache', 'redis', 'ttl', 'invalidation', 'stale data', 'cache aside']::TEXT[],
      '{"conceptCoverage":40,"reasoning":30,"example":20,"clarity":10}'::JSONB
    )
)

INSERT INTO question_bank (
  practice_topic_id,
  prompt,
  difficulty,
  expected_concepts,
  rubric
)
SELECT
  topic.id,
  seed.prompt,
  seed.difficulty,
  seed.expected_concepts,
  seed.rubric
FROM seed_questions AS seed
JOIN practice_topics AS topic
  ON topic.slug = seed.topic_slug
WHERE NOT EXISTS (
  SELECT 1
  FROM question_bank AS existing_question
  WHERE existing_question.practice_topic_id = topic.id
    AND existing_question.prompt = seed.prompt
);

COMMIT;

SELECT
  topic.name AS topic,
  COUNT(question.id) AS question_count
FROM practice_topics AS topic
LEFT JOIN question_bank AS question
  ON question.practice_topic_id = topic.id
GROUP BY topic.name
ORDER BY topic.name;