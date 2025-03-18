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

