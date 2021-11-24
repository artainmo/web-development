SELECT title, score FROM hacker_news ORDER BY score DESC LIMIT 5;


SELECT SUM(score) FROM hacker_news;

SELECT user, SUM(score) FROM hacker_news GROUP BY user HAVING SUM(score) > 200;

SELECT (517.0 + 282.0 + 304.0 + 309.0) / 6366.0;

SELECT user, COUNT(*) FROM hacker_news WHERE url LIKE "%watch?v=dQw4w9WgXcQ%" GROUP BY user ORDER BY COUNT(*) DESC;

SELECT 
  CASE
    WHEN url LIKE '%github%' THEN 'Github'
    WHEN url LIKE '%medium.com%' THEN 'Medium'
    WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
    ELSE 'Other'
  END AS 'Source', 
  COUNT(*)
FROM hacker_news
GROUP BY 1;

SELECT strftime('%H', timestamp) AS 'Hours', 
       ROUND(AVG(score), 0) AS 'avg score',
       COUNT(*) AS 'Total stories' 
FROM hacker_news WHERE timestamp IS NOT NULL 
GROUP BY 1 ORDER BY 1;
