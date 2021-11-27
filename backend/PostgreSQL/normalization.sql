SELECT * FROM store LIMIT 10;

SELECT COUNT(DISTINCT(order_id)) 
FROM store;

SELECT COUNT(DISTINCT(customer_id)) 
FROM store;

SELECT customer_id, customer_email, customer_phone
FROM store WHERE customer_id = 1;

SELECT item_1_id, item_1_name, item_1_price FROM store
WHERE item_1_id = 4;

CREATE TABLE customers AS
SELECT distinct customer_id, customer_phone, customer_email
FROM store;

ALTER TABLE customers ADD PRIMARY KEY (customer_id);

CREATE TABLE items AS
SELECT distinct item_1_id as item_id, item_1_name as item_name, item_1_price as item_price
FROM store
UNION
SELECT distinct item_2_id as item_id, item_2_name as item_name, item_2_price as item_price
FROM store WHERE item_2_id IS NOT NULL
UNION
SELECT distinct item_3_id as item_id, item_3_name as item_name, item_3_price as item_price
FROM store WHERE item_3_id IS NOT NULL;

ALTER TABLE items ADD PRIMARY KEY (item_id);

CREATE TABLE orders_items AS
SELECT order_id, item_1_id as item_id
FROM store
UNION ALL
SELECT order_id, item_2_id as item_id
FROM store WHERE item_2_id IS NOT NULL
UNION ALL
SELECT order_id, item_3_id as item_id
FROM store WHERE item_3_id IS NOT NULL;

CREATE TABLE orders AS
SELECT order_id, order_date, customer_id
FROM store;

ALTER TABLE orders ADD PRIMARY KEY (order_id);

ALTER TABLE orders
ADD FOREIGN KEY (customer_id) 
REFERENCES customers(customer_id);

ALTER TABLE orders_items
ADD FOREIGN KEY (item_id) REFERENCES items(item_id);

ALTER TABLE orders_items
ADD FOREIGN KEY (order_id) REFERENCES orders(order_id);

SELECT customer_email FROM store WHERE order_date > '2019-07-25';

SELECT customer_email FROM customers, orders
WHERE customers.customer_id = orders.customer_id
AND order_date > '2019-07-25';

WITH _orders AS (
  SELECT item_1_name as item FROM store
  UNION ALL
  SELECT item_2_name as item FROM store
  WHERE item_2_name IS NOT NULL
  UNION ALL
  SELECT item_3_name as item FROM store
  WHERE item_3_name IS NOT NULL
)
SELECT item, COUNT(*) FROM _orders
GROUP BY item ORDER BY item;

SELECT item_name, COUNT(*) FROM orders_items, items
WHERE orders_items.item_id = items.item_id
GROUP BY item_name ORDER BY item_name;


