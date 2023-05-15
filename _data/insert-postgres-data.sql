INSERT INTO products (name, description, price, quantity, category)
VALUES
  ('Wireless Bluetooth Earbuds', 'High-quality wireless earbuds with Bluetooth connectivity', 79.99, 10, 'Electronics'),
  ('Stainless Steel Mixing Bowl Set', 'Set of 3 stainless steel mixing bowls for kitchen use', 34.99, 5, 'Home & Kitchen'),
  ('The Great Gatsby - Paperback', 'Classic novel by F. Scott Fitzgerald', 9.99, 15, 'Books'),
  ('Smart LED TV', '55-inch smart LED TV with 4K resolution and built-in streaming apps', 599.99, 8, 'Electronics'),
  ('Non-Stick Cookware Set', 'Set of 10 non-stick cookware pieces for easy cooking and cleaning', 129.99, 3, 'Home & Kitchen'),
  ('Harry Potter and the Sorcerers Stone - Hardcover', 'First book in the Harry Potter series by J.K. Rowling', 14.99, 12, 'Books'),
  ('Smartphone Tripod Stand', 'Adjustable tripod stand for smartphones with remote control', 24.99, 20, 'Electronics'),
  ('Air Fryer', 'Compact air fryer for healthy and oil-free cooking', 89.99, 7, 'Home & Kitchen'),
  ('The Da Vinci Code - Paperback', 'Thriller novel by Dan Brown', 11.99, 18, 'Books'),
  ('Bluetooth Wireless Speaker', 'Portable Bluetooth speaker with high-quality sound', 49.99, 15, 'Electronics');

INSERT INTO users (name, gender, email, age, address)
VALUES
  ('John Doe', 'male', 'johndoe@example.com', 30, '123 Main Street'),
  ('Jane Smith', 'female', 'janesmith@example.com', 25, '456 Elm Avenue'),
  ('David Johnson', 'male', 'davidjohnson@example.com', 35, '789 Oak Drive'),
  ('Emily Wilson', 'female', 'emilywilson@example.com', 28, '567 Pine Street'),
  ('Michael Brown', 'male', 'michaelbrown@example.com', 32, '234 Cedar Lane');

INSERT INTO orders ( user_id)
VALUES
(1)

INSERT INTO orders_products (order_id, product_id)
VALUES
(1,1),
(1,2);

