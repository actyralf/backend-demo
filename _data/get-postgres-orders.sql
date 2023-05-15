SELECT * FROM orders_products
LEFT OUTER JOIN products on orders_products.product_id=products.id
;