<?php
require('vendor/autoload.php');

use app\ShopProduct;

echo "phpunit";

$product = new ShopProduct;
print_r($product->price);


//
