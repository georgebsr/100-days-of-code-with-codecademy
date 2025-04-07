# 100 Days of Code - Second Attempt

## Day 1
### Project: Analyze Data with SQL
**Platform:** Codecademy  

In this project, I worked on helping Reputable Product Agency (RPA) detect fraudulent transactions by analyzing a dataset. I wrote multiple SQL queries to identify suspicious activities, such as transactions from unusual zip codes, fraudulent names, and invalid IP addresses.

### Tasks Completed:
1. Retrieved the first 10 rows of the `transaction_data` table to understand its structure.
2. Found transactions with zip code `20252` (suspicious transactions).
3. Identified transactions with fraudulent pseudonyms like ‘Art Vandelay’ or names with ‘der’.
4. Retrieved transactions from internal IP addresses starting with '10.'.
5. Found transactions using temporary email addresses with the domain `temp_email.com`.
6. Queried for a specific transaction from a ‘John’ with an IP address starting with ‘120.’.

### Solution:
```sql
-- 1. Get column names
SELECT * FROM transaction_data LIMIT 10;

-- 2. Find the full_names and emails for zip code 20252
SELECT full_name, email FROM transaction_data WHERE zip = 20252;

-- 3. Find names and emails associated with fraudulent pseudonyms
SELECT full_name, email
FROM transaction_data
WHERE full_name = 'Art Vandelay'
   OR full_name LIKE '% der %';

-- 4. Find IP addresses and emails from internal IP addresses
SELECT ip_address, email
FROM transaction_data
WHERE ip_address LIKE '10.%';

-- 5. Find emails with temporary email domain
SELECT email
FROM transaction_data
WHERE email LIKE '%temp_email.com';

-- 6. Find transaction with full_name starting with 'John' and IP address starting with '120.'
SELECT *
FROM transaction_data
WHERE full_name LIKE 'John%'
  AND ip_address LIKE '120.%';

-- 7. Challenge: Return customers residing in GA based on zip code prefixes
SELECT *
FROM transaction_data
WHERE zip LIKE '30%'
   OR zip LIKE '31%'
   OR zip LIKE '39%';
```

## Day 2
### Project: RPA Customer Segmentation
**Platform:** Codecademy  
**Topic:** SQL Queries for User Segmentation  

In this project, I worked on segmenting users for Reputable Product Agency’s (RPA) marketing department. The goal was to filter users based on specific criteria to optimize marketing campaigns.  

### Tasks Completed:
1. Retrieved the first 20 rows of the `users` table to understand its structure.
2. Identified users born in the 1980s for a targeted email campaign.
3. Queried users who signed up before May 2017.
4. Filtered users who were part of an A/B test that displayed `bears` clipart.
5. Retrieved users who were part of an ad campaign on website `BBB`.
6. Found users who received ad copy 2 in their campaign.
7. Identified users who received both a campaign and a test.
8. (Challenge) Calculated how old users were when they signed up.

### Solution:
```sql
-- 1. Get column names
SELECT * FROM users LIMIT 20;

-- 2. Find emails and birthdays of users born in the 1980s
SELECT email, birthday FROM users WHERE birthday BETWEEN '1980-01-01' AND '1989-12-31';

-- 3. Find emails and creation dates of users who signed up before May 2017
SELECT email, created_at FROM users WHERE created_at <= '2017-05-31';

-- 4. Find emails of users who received the ‘bears’ test
SELECT email FROM users WHERE test = 'bears';

-- 5. Find emails of users who received a campaign on website BBB
SELECT email FROM users WHERE campaign LIKE 'BBB%';

-- 6. Find emails of users who received ad copy 2 in their campaign
SELECT email FROM users WHERE campaign LIKE '%-2';

-- 7. Find emails of users who received both a campaign and a test
SELECT email FROM users WHERE (campaign IS NOT NULL AND test IS NOT NULL);

-- 8. Challenge: Calculate how old users were when they signed up
SELECT 
    id,
    strftime('%Y', created_at) - strftime('%Y', birthday) AS age_at_signup
FROM 
    users;
```

### Project: Davie’s Burgers Subway Ad
**Platform:** Codecademy  
**Topic:** SQL Queries for Data Exploration

In this project, I analyzed Davie’s Burgers orders dataset to help their marketing team find funny special instructions left by customers. The goal was to use these instructions to create a catchy subway ad.

### Tasks Completed:
1. Retrieved the first 10 rows of the `orders` table to understand its structure.
2. Found unique order dates to check how recent the data was.
3. Queried the `special_instructions` column to see customer notes.
4. Filtered out empty special instructions.
5. Sorted instructions in alphabetical order.
6. Found special instructions that mentioned `sauce`.
7. Queried for instructions with `door`.
8. Found funny instructions mentioning `box`.
9. Retrieved order IDs for the funny special instructions, renaming columns for better readability.
10. (Challenge) Retrieved item names, restaurant IDs, and user IDs for the customers who made the funny phrases.

```sql
-- 1. Get column names
SELECT * FROM orders LIMIT 10;

-- 2. Find unique order dates
SELECT DISTINCT order_date FROM orders;

-- 3. Retrieve only the special instructions (limit 20)
SELECT special_instructions FROM orders LIMIT 20;

-- 4. Exclude empty special instructions
SELECT special_instructions FROM orders WHERE special_instructions IS NOT NULL LIMIT 20;

-- 5. Sort instructions alphabetically
SELECT special_instructions FROM orders WHERE special_instructions IS NOT NULL ORDER BY special_instructions LIMIT 20;

-- 6. Find special instructions mentioning ‘sauce’
SELECT special_instructions FROM orders WHERE special_instructions LIKE '%sauce%';

-- 7. Find special instructions mentioning ‘door’
SELECT special_instructions FROM orders WHERE special_instructions LIKE '%door%';

-- 8. Find special instructions mentioning ‘box’
SELECT special_instructions FROM orders WHERE special_instructions LIKE '%box%';

-- 9. Retrieve order IDs and rename columns for readability
SELECT id AS '#', special_instructions AS 'Notes' FROM orders WHERE special_instructions LIKE '%box%';

-- 10. Challenge: Retrieve item name, restaurant ID, and user ID for the customer who left a ‘box’ instruction
SELECT item_name, restaurant_id, user_id FROM orders WHERE id = (
    SELECT id FROM orders WHERE special_instructions LIKE '%box%' LIMIT 1
);
```

## Day 3
**Platform:** Codecademy  
**Topic:** Aggregate Functions in SQL

Today, I focused on **SQL aggregate functions**, which allow summarizing multiple rows of data. These functions are essential for analyzing datasets efficiently.

### Concepts Covered:
1. **COUNT()** – Returns the number of rows that match a condition.  
2. **SUM()** – Adds up the values in a column.  
3. **MAX() / MIN()** – Finds the highest and lowest values in a column.  
4. **AVG()** – Calculates the average value.  
5. **ROUND()** – Rounds numeric values to a specified decimal place.  
6. **GROUP BY** – Groups data based on a column for aggregate calculations.  
7. **HAVING** – Filters grouped results (like `WHERE` but for groups).  

### Practice:
In this challenge, I worked on analyzing user data for **Codeflix**, a streaming platform. I used **COUNT(), SUM(), GROUP BY, and ORDER BY** to answer key business questions.

### Tasks Completed:
1. Counted the number of users with emails ending in `.com`.  
2. Identified the most popular first names among users.  
3. Analyzed the distribution of watch durations.  
4. Calculated total payments made by users who successfully paid.
5. Identified users who watched more than **400 minutes** of content.  
6. Calculated the **total watch duration** for all users.  
7. Found the days when **Codeflix collected the most money** from payments.  
8. Determined the **average payment amount** for successful transactions.  
9. Found the **longest and shortest individual watch durations** in the dataset.

### Solutions:
```sql
-- 1. Count users with '.com' emails
SELECT COUNT(*) FROM users WHERE email LIKE '%.com';

-- 2. Find the most popular first names
SELECT first_name, COUNT(first_name) 
FROM users 
GROUP BY first_name 
ORDER BY 2 DESC;

-- 3. Analyze distribution of watch durations (rounded)
SELECT ROUND(watch_duration_in_minutes, 0) AS 'duration', COUNT(*) AS 'count' 
FROM watch_history 
GROUP BY 1 
ORDER BY 1 ASC;

-- 4. Find users who made successful payments & their total payments
SELECT user_id, SUM(amount) 
FROM payments 
WHERE status = 'paid' 
GROUP BY 1 
ORDER BY 2 DESC;

-- 5. Find users who watched more than 400 minutes
SELECT user_id, SUM(watch_duration_in_minutes) 
FROM watch_history 
GROUP BY 1 
HAVING SUM(watch_duration_in_minutes) > 400;

-- 6. Calculate total watch duration across all users
SELECT ROUND(SUM(watch_duration_in_minutes)) FROM watch_history;

-- 7. Find the days Codeflix collected the most money (successful payments)
SELECT pay_date, SUM(amount) 
FROM payments 
WHERE status = 'paid' 
GROUP BY 1 
ORDER BY 2 DESC;

-- 8. Calculate the average payment amount for successful transactions
SELECT AVG(amount) FROM payments WHERE status = 'paid';

-- 9. Find the longest and shortest watch duration in one query
SELECT MAX(watch_duration_in_minutes) AS 'max', MIN(watch_duration_in_minutes) AS 'min' FROM watch_history;
```
## Day 4
### Project: Trends in Startups  
**Platform:** Codecademy  
**Topic:** SQL Aggregate Functions & Data Analysis  

Today, I analyzed startup industry trends using SQL aggregate functions. The dataset contained key details about startup companies, including their valuation, funding, and employee count. I wrote queries to extract insights into startup valuations, market competitiveness, and company sizes across different locations.

### Tasks Completed:
1. Explored the `startups` table to understand its structure.
2. Calculated the **total number of companies** in the dataset.
3. Computed the **total valuation** of all startups.
4. Found the **highest amount raised** by a startup.
5. Identified the **highest amount raised** during the `Seed` stage.
6. Retrieved the **year the oldest company was founded**.
7. Calculated the **average valuation** of startups.
8. Found the **average valuation per category**.
9. Rounded the **average valuation per category** to **two decimal places**.
10. Ordered the **categories by average valuation** in descending order.
11. Counted the **number of companies in each category**.
12. Identified the **most competitive markets** (categories with more than 3 companies).
13. Calculated the **average startup size (employees) per location**.
14. Identified locations with **average startup sizes above 500 employees**.

### Solutions:
```sql
-- 1. View all columns in the startups table
SELECT * FROM startups;

-- 2. Count the total number of companies
SELECT COUNT(*) FROM startups;

-- 3. Calculate the total valuation of all startups
SELECT SUM(valuation) FROM startups;

-- 4. Find the highest amount raised by a startup
SELECT MAX(raised) FROM startups;

-- 5. Find the highest amount raised during the Seed stage
SELECT MAX(raised) FROM startups WHERE stage = 'Seed';

-- 6. Find the year the oldest company was founded
SELECT MIN(founded) FROM startups;

-- 7. Calculate the average valuation of startups
SELECT AVG(valuation) FROM startups;

-- 8. Find the average valuation per category
SELECT category, AVG(valuation) FROM startups GROUP BY category;

-- 9. Round the average valuation per category to two decimal places
SELECT category, ROUND(AVG(valuation), 2) FROM startups GROUP BY category;

-- 10. Order categories by highest average valuation
SELECT category, ROUND(AVG(valuation), 2) FROM startups GROUP BY 1 ORDER BY 2 DESC;

-- 11. Count the number of companies in each category
SELECT category, COUNT(*) FROM startups GROUP BY category;

-- 12. Identify the most competitive markets (categories with more than 3 companies)
SELECT category, COUNT(*) FROM startups GROUP BY category HAVING COUNT(*) > 3;

-- 13. Calculate the average startup size (employees) per location
SELECT location, AVG(employees) FROM startups GROUP BY location;

-- 14. Identify locations where the average startup size is above 500 employees
SELECT location, AVG(employees) FROM startups GROUP BY location HAVING AVG(employees) > 500;
```
## Days 5-8
### Smart Practice on Codecademy Go

For these days, I was traveling and didn’t have access to my laptop or a PC. However, I kept up with the challenge by using the Codecademy Go app to practice SQL and backend development concepts daily. While I didn’t write code directly, I reviewed key topics, so I am going to count these days because I don't want to break the streak on my second attempt so early in the challenge.

## Day 9  
### **Analyze Data with SQL**  
#### **Project 1: The Metropolitan Museum of Art**  
Today, I worked with the `met` table, which contains data on American Decorative Arts from The Metropolitan Museum of Art. I used SQL aggregate functions to analyze this dataset and uncover insights.  

#### **Tasks Completed:**  
- Explored the dataset and identified column names.  
- Counted the total number of pieces in the collection.  
- Found the number of pieces related to "celery" in the collection.  
- Retrieved the title and medium of the oldest piece(s).  
- Identified the top 10 countries contributing to the collection.  
- Found art categories with more than 100 pieces.  
- Counted pieces that contain "gold" or "silver" in their medium description.

### Solution:
```sql
 -- 1
 SELECT * FROM met LIMIT 10;

 --2
SELECT COUNT(*) FROM met;

--3
SELECT COUNT(*) FROM met WHERE category LIKE '%celery%';

--4
--What I tried
SELECT MIN(date) FROM met;
SELECT date, title, medium FROM met WHERE date LIKE '%1600%';
--What I changed after the code review
SELECT title, medium FROM met WHERE date = (SELECT MIN(date) FROM met);

--5
SELECT COUNT(*), country FROM met GROUP BY country ORDER BY COUNT (*) DESC LIMIT 10;

--6
SELECT category, COUNT(*) FROM met GROUP BY 1 HAVING COUNT(*) > 100;

--7
--What I tried
SELECT medium, COUNT(*) FROM met WHERE medium LIKE '%gold%' OR '%silver%' GROUP BY 1 ORDER BY 2 DESC;
--What I changed after the code review
SELECT medium, COUNT(*) FROM met WHERE medium LIKE '%gold%' OR medium LIKE '%silver%' GROUP BY 1 ORDER BY 2 DESC;
```

### **Project 2: Analyze Hacker News Trends**  
For this project, I worked with the `hacker_news` dataset, which contains stories from Hacker News since 2007. I wrote queries to analyze trends, user activity, and the best times to post.  

#### **Tasks Completed:**  
- Identified the top 5 highest-scoring stories.  
- Analyzed whether a small percentage of users dominate the site by calculating total scores per user.  
- Found users who submitted the infamous Rickroll link.  
- Determined which sites (GitHub, Medium, New York Times) contribute the most stories to Hacker News.  
- Used `strftime()` to extract hours from timestamps and analyzed the best time to post based on average scores.

### Solution:
```sql
 --1 
 SELECT title, score FROM hacker_news ORDER BY score DESC LIMIT 5;

 --2
SELECT SUM(score) FROM hacker_news;

--3
SELECT user, SUM(score) FROM hacker_news GROUP BY user HAVING SUM(score) > 200 ORDER BY 2 DESC;

--4
SELECT (517 + 309 + 304 + 282) / 6366.0;

--5
SELECT user, COUNT(*) FROM hacker_news WHERE url LIKE '%watch?v=dQw4w9WgXcQ%' GROUP BY 1 ORDER BY 2 DESC;

--6
SELECT CASE
   WHEN url LIKE '%github.com%' THEN 'GitHub'
   WHEN url LIKE '%medium.com%' THEN 'Medium'
   WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
   ELSE 'Other'
  END AS 'Source'
FROM hacker_news;

--7
SELECT CASE
   WHEN url LIKE '%github.com%' THEN 'GitHub'
   WHEN url LIKE '%medium.com%' THEN 'Medium'
   WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
   ELSE 'Other'
  END AS 'Source',
  COUNT(*)
FROM hacker_news
GROUP BY 1;

--8
SELECT timestamp FROM hacker_news LIMIT 10;

--9
SELECT timestamp,
   strftime('%H', timestamp)
FROM hacker_news
GROUP BY 1
LIMIT 20;

--10
SELECT strftime('%H', timestamp), AVG(score), COUNT(*) FROM hacker_news GROUP BY 1 ORDER BY 2 DESC;

--11
SELECT strftime('%H', timestamp) AS 'Hour', 
   ROUND(AVG(score), 1) AS 'Average Score', 
   COUNT(*) AS 'Number of Stories'
FROM hacker_news
WHERE timestamp IS NOT NULL
GROUP BY 1
ORDER BY 2 DESC;
```
## Day 10  
### **Analyze Data with SQL**  
#### **Project: Cryptocurrency Exchange**  
**Platform:** Codecademy  
**Topic:** SQL Aggregate Functions  

Today, I worked on analyzing financial transactions for **Fiddy Cent**, a cryptocurrency exchange. The dataset contained transaction details, including money-in (buy) and money-out (sell) amounts. I used SQL aggregate functions to calculate total amounts, identify trends, and analyze currency dominance.  

#### **Tasks Completed:**  
1. Explored the `transactions` table to understand its structure.  
2. Calculated the total **money_in** (USD bought) and **money_out** (USD sold).  
3. Determined how many money_in transactions exist and how many were in Bitcoin (`BIT`).  
4. Identified the **largest transaction** and whether it was money_in or money_out.  
5. Calculated the **average money_in for Ethereum (`ETH`) transactions**.  
6. Created a ledger summarizing **average money_in and money_out per date**.  
7. Formatted the previous query by rounding the averages to **two decimal places** and renaming columns for better readability.  

### **Solution:**  
```sql
 --1
 SELECT * FROM transactions;

 --2
 SELECT SUM(money_in) FROM transactions;

 --3
 SELECT SUM(money_out) FROM transactions;

--4
SELECT COUNT(money_in) FROM transactions;

SELECT COUNT(money_in) FROM transactions WHERE currency='BIT';

--5
--Changed it after code review
--SELECT MAX(money_in), MAX(money_out) FROM transactions;
SELECT 
  CASE 
    WHEN MAX(money_in) > MAX(money_out) THEN 'money_in' 
    ELSE 'money_out' 
  END AS largest_transaction_type, 
  GREATEST(MAX(money_in), MAX(money_out)) AS largest_transaction 
FROM transactions;

--6
SELECT AVG(money_in) FROM transactions WHERE currency='ETH';

--7
SELECT date, AVG(money_in), AVG(money_out) FROM transactions GROUP BY date;

--8
SELECT date AS 'Date', ROUND(AVG(money_in), 2) AS 'Average In',ROUND(AVG(money_out), 2) AS 'Average Out' FROM transactions GROUP BY date;
```

## Day 11  
### **SQL: Working with Multiple Tables**  
**Platform:** Codecademy  
**Topic:** SQL Joins & Table Relationships  

Today, I worked on expanding my SQL skills by learning how to join multiple related tables. This involved understanding different types of joins and how relational databases use **primary keys** and **foreign keys** to link tables.  

#### **Concepts Covered:**  
- **Manual table combinations** vs. SQL joins  
- **INNER JOIN** – retrieving matching records from two tables  
- **LEFT JOIN** – including all records from the left table and matching records from the right  
- **Primary Key vs. Foreign Key** – ensuring relationships between tables  
- **CROSS JOIN** – creating all possible combinations of two tables  
- **UNION** – combining results from multiple queries  
- **WITH clause** – using common table expressions (CTEs)

## Days 12 & 13
### Smart Practice on Codecademy Go

For these days, I didn’t have access to my laptop or a PC. However, I kept up with the challenge by using the Codecademy Go app to practice SQL and backend development concepts daily. While I didn’t write code directly, I reviewed key topics, so I am going to count these days because I don't want to break the streak on my second attempt so early in the challenge.

## Day 14 
### **Subqueries in SQL**    
**Platform:** Codecademy 

Today, I worked on **subqueries** in SQL using Codecademy. I explored:  

- **Introduction to Subqueries**  
- **Using Subqueries in Queries**  
- **Inserts, Updates, and Deletes with Subqueries**  
- **Comparison Operators in Subqueries**  
- **IN and NOT IN Clauses**  
- **EXISTS and NOT EXISTS**  

These concepts help in writing more efficient and dynamic SQL queries by embedding one query inside another.  

## Day 15  
### **Analyzing Lyft Trip Data with SQL**  
**Platform:** Codecademy 

Today, I worked on a SQL project analyzing **Lyft trip data**. The project focused on **joins**, **aggregations**, and **set operations** to extract meaningful insights.  

#### **Tasks Completed:**  
- Explored **trips, riders, and cars** tables.  
- Identified **primary keys** in each table.  
- Used **CROSS JOIN** to combine riders and cars.  
- Used **LEFT JOIN** to create a trip log linking trips and users.  
- Used **INNER JOIN** to link trips and cars.  
- Used **UNION** to combine rider data from multiple tables.  
- Calculated **average trip cost**.  
- Found **riders with fewer than 500 trips** for an email campaign.  
- Counted the **number of active cars**.  
- Found the **two cars with the highest trips completed**.  

### **Solution:** 
```sql
--1
SELECT * FROM trips;

SELECT * FROM riders;

SELECT * FROM cars;

--2
--Primary key is id

--3
SELECT riders.first, riders.last, cars.model FROM riders, cars;

--4
SELECT trips.date, 
   trips.pickup, 
   trips.dropoff, 
   trips.type, 
   trips.cost,
   riders.first, 
   riders.last,
   riders.username
FROM trips
LEFT JOIN riders 
  ON trips.rider_id = riders.id;

--5
SELECT * FROM trips JOIN cars ON trips.car_id = cars.id;

--6
SELECT * FROM riders UNION SELECT * FROM riders2;

--7
SELECT AVG(cost) FROM trips;

--8
SELECT * FROM riders WHERE total_trips < 500 UNION SELECT * FROM riders2 WHERE total_trips < 500;

--9
SELECT COUNT(*) FROM cars WHERE status = 'active';

--10
SELECT * FROM cars ORDER BY trips_completed DESC LIMIT 2;
```

## Day 16  
### **Analyze Data with SQL**  
**Platform:** Codecademy 
#### **Projects Completed:**
1. **Analyze Data with SQL: Welp**
   - Joined `places` and `reviews` tables.
   - Queried places by price range using the dollar sign system.
   - Used `INNER JOIN` and `LEFT JOIN` to analyze reviews.
   - Found places with no reviews in the dataset.
   - Wrote a query using the `WITH` clause to select reviews from 2020.
   - Analyzed the reviewer with the most below-average ratings.

### Solution:
```sql
-- 1. Join places and reviews tables
SELECT places.name, reviews.rating 
FROM places
INNER JOIN reviews 
  ON places.id = reviews.place_id;

-- 2. Query places by price range using dollar sign system
SELECT name, price_range 
FROM places 
WHERE price_range LIKE '$$';

-- 3. Left join to get all places and their reviews
SELECT places.name, reviews.rating 
FROM places 
LEFT JOIN reviews 
  ON places.id = reviews.place_id;

-- 4. Find places with no reviews
SELECT name 
FROM places 
LEFT JOIN reviews 
  ON places.id = reviews.place_id 
WHERE reviews.id IS NULL;

-- 5. Get reviews from 2020 using the WITH clause
WITH reviews_2020 AS (
  SELECT * 
  FROM reviews 
  WHERE EXTRACT(YEAR FROM date) = 2020
)
SELECT * FROM reviews_2020;

-- 6. Analyze the reviewer with the most below-average ratings
WITH average_rating AS (
  SELECT AVG(rating) AS avg_rating 
  FROM reviews
)
SELECT reviewer_id, COUNT(*) AS below_avg_reviews 
FROM reviews, average_rating 
WHERE reviews.rating < average_rating.avg_rating 
GROUP BY reviewer_id 
ORDER BY below_avg_reviews DESC 
LIMIT 1;
```

2. **Analyze Data with SQL: Reddit**
   - Examined `users`, `posts`, and `subreddits` tables.
   - Found the highest-scoring user and post.
   - Used `LEFT JOIN` to count how many posts each user made.
   - Filtered active posts using `INNER JOIN`.
   - Combined new posts with `UNION ALL`.
   - Identified popular posts with scores of at least 5000 using a `WITH` clause.
   - Calculated the average score for posts in each subreddit.

### Solution:
```sql
-- 1. Find the highest-scoring user and post
SELECT user_id, MAX(score) 
FROM posts 
GROUP BY user_id;

-- 2. Count how many posts each user made using LEFT JOIN
SELECT users.username, COUNT(posts.id) AS post_count 
FROM users
LEFT JOIN posts 
  ON users.id = posts.user_id
GROUP BY users.username;

-- 3. Filter active posts using INNER JOIN
SELECT posts.title, posts.score 
FROM posts 
INNER JOIN users 
  ON posts.user_id = users.id
WHERE posts.active = TRUE;

-- 4. Combine new posts from two sources using UNION ALL
SELECT title FROM posts WHERE source = 'new';
UNION ALL
SELECT title FROM posts WHERE source = 'other';

-- 5. Identify popular posts with scores of at least 5000
WITH popular_posts AS (
  SELECT * 
  FROM posts 
  WHERE score >= 5000
)
SELECT * FROM popular_posts;

-- 6. Calculate the average score for posts in each subreddit
SELECT subreddit, AVG(score) 
FROM posts 
GROUP BY subreddit;
```

3. **Analyze Data with SQL: VR Startup**
   - Examined `employees` and `projects` tables.
   - Found employees without assigned projects and projects with no employees.
   - Identified the project chosen by the most employees.
   - Analyzed whether enough developers were available for projects.
   - Created a `personality_incompatibilities` table for team compatibility.
   - Identified the most common personality type among employees.
   - Found projects selected by employees with the most common personality type.
   - Analyzed incompatible coworkers based on personality types.

### Solution:
```sql
-- 1. Find employees without assigned projects
SELECT name 
FROM employees 
WHERE project_id IS NULL;

-- 2. Find projects with no employees assigned
SELECT name 
FROM projects 
WHERE id NOT IN (SELECT DISTINCT project_id FROM employees);

-- 3. Identify the project chosen by the most employees
SELECT project_id, COUNT(*) AS employee_count 
FROM employees 
GROUP BY project_id 
ORDER BY employee_count DESC 
LIMIT 1;

-- 4. Analyze whether enough developers were available for projects
SELECT project_id, COUNT(*) AS developer_count 
FROM employees 
WHERE role = 'developer'
GROUP BY project_id;

-- 5. Create a personality_incompatibilities table
CREATE TABLE personality_incompatibilities (
  employee1_id INT,
  employee2_id INT,
  incompatibility_score INT
);

-- 6. Identify the most common personality type among employees
SELECT personality_type, COUNT(*) AS count 
FROM employees 
GROUP BY personality_type 
ORDER BY count DESC 
LIMIT 1;

-- 7. Find projects selected by employees with the most common personality type
SELECT project_id 
FROM employees 
WHERE personality_type = (SELECT personality_type 
                           FROM employees 
                           GROUP BY personality_type 
                           ORDER BY COUNT(*) DESC LIMIT 1);

-- 8. Analyze incompatible coworkers based on personality types
SELECT e1.name AS employee1, e2.name AS employee2, pi.incompatibility_score
FROM employees e1
JOIN employees e2 
  ON e1.id < e2.id
JOIN personality_incompatibilities pi 
  ON e1.id = pi.employee1_id AND e2.id = pi.employee2_id;
```

## Day 17  
### **Learn How to Use AI for SQL**  
**Platform:** Codecademy 
#### **Lessons Completed:**
- What is a prompt?
- Structuring an AI conversation
- Providing context
- Working with multiple tables
- Specifying output structure
- Other uses of AI in SQL
- AI risks

#### **Project Completed:**  
**Analyze AI Systems with SQL**  
- Investigated the rise of Generative AI systems using a database based on the EpochAI dataset.
- Identified influential players in AI by analyzing the number of AI systems developed by each organization.
- Explored AI system development trends over time.
- Found the top AI problems organizations focus on.

### **Solutions:**
```sql
-- 1. Show all available tables in the database
.tables

-- 5. Identify the most influential players in AI based on the number of systems developed
SELECT o.org_name AS organization_name, COUNT(s.system) AS number_of_ai_systems_developed
FROM orgs o
JOIN systems s ON o.org_id = s.org_id
GROUP BY o.org_name
ORDER BY number_of_ai_systems_developed DESC;

-- 6. Refine query to filter by AI system type and include organization type
SELECT o.org_name AS organization_name, COUNT(s.system) AS number_of_ai_systems_developed, o.org_type
FROM orgs o
JOIN systems s ON o.org_id = s.org_id
JOIN problems p ON s.problem_id = p.problem_id
WHERE p.task = 'Image generation'
GROUP BY o.org_name, o.org_type
ORDER BY number_of_ai_systems_developed DESC;

-- 7. Analyze the development of AI systems over time
SELECT YEAR(s.publication_date) AS publication_year, 
       COUNT(s.system) AS number_of_ai_systems, 
       MAX(s.parameters) AS largest_parameter
FROM systems s
GROUP BY YEAR(s.publication_date)
ORDER BY publication_year;

-- 8. Fix the query for SQLite compatibility using strftime instead of YEAR
SELECT strftime('%Y', s.publication_date) AS publication_year,
       COUNT(s.system) AS number_of_ai_systems,
       MAX(s.parameters) AS largest_parameter
FROM systems s
GROUP BY publication_year
ORDER BY publication_year;

-- 9. Find the top 5 AI problems organizations focus on
SELECT p.task AS ai_problems, COUNT(DISTINCT s.org_id) AS number_of_organizations
FROM problems p
JOIN systems s ON p.problem_id = s.problem_id
GROUP BY ai_problems
ORDER BY number_of_organizations DESC
LIMIT 5;
```

### **Key Learnings:**
- Used AI to generate and refine SQL queries for data analysis.
- Learned how to structure AI prompts for better query generation.
- Explored AI-driven SQL analytics in real-world applications.
- Debugged AI-generated queries to fit SQLite syntax.

## Day 18  
### **Lessons Completed:**
- **Going Off-Platform: Local Setup**
  - Set up a local SQL database environment on my computer.
  - Learned about SQLite and how to use the command line to navigate and manage databases.
  - Articles read:
    - *What is SQLite?*
    - *Command Line Interface Setup*

- **Review Commands**
  - Reviewed all the SQL commands learned so far for querying, filtering, joining, and aggregating data.
  - Reinforced understanding of:
    - SELECT, WHERE, JOIN, GROUP BY, ORDER BY
    - Aggregation functions like COUNT, MAX, MIN, AVG, SUM
    - Creating and modifying tables
    - 
**Note**: Limited time today, but made progress by reinforcing fundamentals.

## Day 19  
### **Lesson: Usage Funnels**  
**Platform:** Codecademy  
**Topic:** SQL Funnel Analysis (Marketing & Product Analytics)  

Today, I learned how to analyze usage funnels using SQL. The lesson focused on tracking user behavior through multiple steps of a process — specifically looking at Warby Parker’s funnel:  
**Quiz → Home Try-On → Purchase**.  

### **Concepts Covered:**  
- What is a funnel and how it helps analyze drop-offs in user behavior.  
- How to calculate **conversion rates** between stages.  
- Creating funnel visualizations using data from **a single table** and **multiple related tables**.  
- Performing funnel analysis on **A/B test groups**.  
- Using SQL joins and aggregations to build the funnel step-by-step.

## Day 20  
### **Project: Usage Funnels with Warby Parker**  
**Platform:** Codecademy  
**Topic:** Funnel Analysis using SQL  
**Collaboration:** Warby Parker's Data Science Team (with fictional data)  

In this project, I analyzed Warby Parker’s marketing funnels to calculate conversion rates across two main paths:  
- **Quiz Funnel**
- **Home Try-On Funnel**

### **Quiz Funnel**  
**Tables used:** `survey`  

#### 📝 Tasks & Solutions:
**1.** View first 10 rows of the survey table:  
```sql
SELECT * FROM survey LIMIT 10;
```
**2.** Count number of responses for each quiz question:
```sql
SELECT question, COUNT(DISTINCT user_id) 
FROM survey 
GROUP BY 1;
```
**4.** View sample data from all three funnel stages:
Tables used: quiz, home_try_on, purchase
```sql
SELECT * FROM quiz LIMIT 5;

SELECT * FROM home_try_on LIMIT 5;

SELECT * FROM purchase LIMIT 5;
```
**5.** Combine all three stages into a single user-centric funnel table:
```sql
SELECT DISTINCT q.user_id,
   h.user_id IS NOT NULL AS 'is_home_try_on',
   h.number_of_pairs,
   p.user_id IS NOT NULL AS 'is_purchase'
FROM quiz q 
LEFT JOIN home_try_on h ON q.user_id = h.user_id
LEFT JOIN purchase p ON p.user_id = q.user_id 
LIMIT 10;
```
