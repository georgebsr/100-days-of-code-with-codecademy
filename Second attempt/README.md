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
