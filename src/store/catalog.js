export default {
    namespaced: true,
    state: {
        categories: [
            {
                id: 1,
                img: 'https://static2.urbanic.com/images/feeds/1673850897789/tops.png',
                name: 'Tops',
                route: '/catalogs/category1',
            },
            {
                id: 2,
                img: 'https://static2.urbanic.com/images/feeds/1673850888214/T.png',
                name: 'T-Shirts',
                route: '/catalogs/category2',
            },
            {
                id: 3,
                img: 'https://static2.urbanic.com/images/feeds/1673851503423/3R5A9388_1_1-.png',
                name: 'Co-ords',
                route: '/catalogs/category3',
            },
            {
                id: 4,
                img: 'https://static2.urbanic.com/images/feeds/1673851517736/3R5A9342_1_1.png',
                name: 'Jumpsuits',
                route: '/catalogs/category4',
            },
            {
                id: 5,
                img: 'https://static2.urbanic.com/images/feeds/1673851112610/3R5A9393_1_1.png',
                name: 'Bottoms',
                route: '/catalogs/category5',
            },
            {
                id: 6,
                img: 'https://static2.urbanic.com/images/feeds/1673852485950/3R5A9440_1_1-.png',
                name: 'Dresses',
                route: '/catalogs/category6',
            },
            {
                id: 7,
                img: 'https://static2.urbanic.com/images/feeds/1673850909782/3R5A9381_1_1.png',
                name: 'Shirts',
                route: '/catalogs/category6',
            },
        ],
        products: [
            {
                id: 1,
                slug: "wrapped-top-with-tied-straps",
                name: 'Wrapped Top With Tied Straps',
                type: 'Top',
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                stock: true,
                images: [
                    "img/products/productOne/one.webp",
                    "img/products/productOne/two.webp",
                    "img/products/productOne/three.webp",
                    "img/products/productOne/four.webp",
                ],
                price: 1490,
                colors: [
                    {
                        id: 1,
                        img: "img/products/productOne/one.webp",
                        // stock:10,
                    },
                    {
                        id: 2,
                        img: "img/products/productOne/two.webp",
                        // stock:0,
                    },
                    {
                        id: 3,
                        img: "img/products/productOne/three.webp",
                        // stock:5
                    },
                ],
                sizes: [
                    { id: 1, name: 'S', quantity: 1 },
                    { id: 2, name: 'M', quantity: 1 },
                    { id: 3, name: 'L', quantity: 1 },
                    { id: 4, name: 'F', quantity: 1 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 2,
                slug: "sheer-mesh-cropped-placket-blouse",
                name: 'Sheer Mesh Cropped Placket Blouse',
                type: 'Top',
                brand: 'Adidas',
                stock: true,
                images: [
                    "img/products/productTwo/one.webp",
                    "img/products/productTwo/two.webp",
                    "img/products/productTwo/three.webp",
                    "img/products/productTwo/four.webp",
                ],
                price: 1190,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productTwo/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productTwo/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productTwo/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productTwo/four.webp",
                    },
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 3,
                slug: "cotton-t-shirt-with-slogan",
                name: 'Cotton T-shirt With Slogan',
                type: 'T-shirt',
                brand: 'Noise',
                images: [
                    "img/products/productThree/one.webp",
                    "img/products/productThree/two.webp",
                    "img/products/productThree/three.webp",
                    "img/products/productThree/four.webp",
                    "img/products/productThree/five.webp",
                    "img/products/productThree/six.webp",
                ],
                price: 890,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productThree/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productThree/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productThree/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productThree/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productThree/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productThree/six.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 4,
                slug: "knot-cargo-trousers",
                name: 'Knot Cargo Trousers',
                type: 'Bottoms',
                brand: 'Nivia',
                images: [
                    "img/products/productFour/one.webp",
                    "img/products/productFour/two.webp",
                    "img/products/productFour/three.webp",
                    "img/products/productFour/four.webp",
                ],
                price: 1890,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productFour/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productFour/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productFour/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productFour/four.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 5,
                slug: "pleated-palysuit",
                name: 'Pleated Palysuit',
                type: 'Jumpsuit',
                brand: 'Adidas',
                images: [
                    "img/products/productFive/one.webp",
                    "img/products/productFive/two.webp",
                    "img/products/productFive/three.webp",
                ],
                price: 2690,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productFive/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productFive/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productFive/three.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 6,
                slug: "cut-out-long-slip-dress",
                name: 'Cut Out Long Slip Dress',
                type: 'Slip Dress',
                brand: 'Noise',
                images: [
                    "img/products/productSix/one.webp",
                    "img/products/productSix/two.webp",
                    "img/products/productSix/three.webp",
                    "img/products/productSix/four.webp",
                    "img/products/productSix/five.webp",
                    "img/products/productSix/six.webp",
                    "img/products/productSix/seven.webp",
                ],
                price: 1990,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productSix/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productSix/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productSix/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productSix/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productSix/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productSix/six.webp",
                    },
                    {
                        id: 7,
                        img: "img/products/productSix/seven.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 7,
                slug: "gathered-short-dress-with-twisted-knots",
                name: 'Gathered Short Dress With Twisted Knots',
                type: 'Dress',
                images: [
                    "img/products/productSeven/one.webp",
                    "img/products/productSeven/two.webp",
                    "img/products/productSeven/three.webp",
                    "img/products/productSeven/four.webp",
                    "img/products/productSeven/five.webp",
                    "img/products/productSeven/six.webp",
                    "img/products/productSeven/seven.webp",
                    "img/products/productSeven/eight.webp",
                    "img/products/productSeven/nine.webp",
                    "img/products/productSeven/ten.webp",
                ],
                price: 1790,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productSeven/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productSeven/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productSeven/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productSeven/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productSeven/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productSeven/six.webp",
                    },
                    {
                        id: 7,
                        img: "img/products/productSeven/seven.webp",
                    },
                    {
                        id: 8,
                        img: "img/products/productSeven/eight.webp",
                    },
                    {
                        id: 9,
                        img: "img/products/productSeven/nine.webp",
                    },
                    {
                        id: 10,
                        img: "img/products/productSeven/ten.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 8,
                slug: "gathered-satin-shirt-dress",
                name: 'Gathered Satin Shirt Dress',
                type: 'Shirt Dress',
                images: [
                    "img/products/productEight/one.webp",
                    "img/products/productEight/two.webp",
                    "img/products/productEight/three.webp",
                    "img/products/productEight/four.webp",
                    "img/products/productEight/five.webp",
                    "img/products/productEight/six.webp",
                    "img/products/productEight/seven.webp",
                    "img/products/productEight/eight.webp",
                ],
                price: 1990,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productEight/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productEight/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productEight/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productEight/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productEight/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productEight/six.webp",
                    },
                    {
                        id: 7,
                        img: "img/products/productEight/seven.webp",
                    },
                    {
                        id: 8,
                        img: "img/products/productEight/eight.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 9,
                slug: "cut-out-long-dress-with-beads-and-tassels",
                name: 'Cut Out Long Dress With Beads And Tassels',
                type: 'Dress',
                images: [
                    "img/products/productNine/one.webp",
                    "img/products/productNine/two.webp",
                    "img/products/productNine/three.webp",
                    "img/products/productNine/four.webp",
                    "img/products/productNine/five.webp",
                    "img/products/productNine/six.webp",
                ],
                price: 1990,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productNine/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productNine/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productNine/three.webp",
                    },
                    {
                        id: 4,
                        img: "img/products/productNine/four.webp",
                    },
                    {
                        id: 5,
                        img: "img/products/productNine/five.webp",
                    },
                    {
                        id: 6,
                        img: "img/products/productNine/six.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
            {
                id: 10,
                slug: "t-shirt-and-shorts-co-ord-set",
                name: 'T-shirt and Shorts Co-ord Set',
                type: 'Co-ord',
                images: [
                    "img/products/productTen/one.webp",
                    "img/products/productTen/two.webp",
                    "img/products/productTen/three.webp",
                ],
                price: 1890,
                attributes: [
                    { name: 'Material', value: 'Polyester' },
                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                    { name: 'Lining', value: 'No' },
                    { name: 'Style', value: 'Casual' },
                    { name: 'Occasion', value: 'Daily' },
                    { name: 'Chestpad', value: 'No' },
                    { name: 'Neckline', value: 'Spaghetti Strap' },
                    { name: 'Sleevelength', value: 'Sleeveless' },
                    { name: 'Silhouette', value: 'S-Line' },
                    { name: 'Nopieces', value: 1 },
                    { name: 'Pattern', value: 'Floral' },
                    { name: 'Trim', value: 'Backless' },
                    { name: 'Sleevetype', value: 'Sleeveless' },
                    { name: 'Length', value: 'Long' },
                    { name: 'Fitness', value: 'Slim Fit' },
                    { name: 'Belt', value: 'No' },
                ],
                colors: [
                    {
                        id: 1,
                        img: "img/products/productTen/one.webp",
                    },
                    {
                        id: 2,
                        img: "img/products/productTen/two.webp",
                    },
                    {
                        id: 3,
                        img: "img/products/productTen/three.webp",
                    }
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                selectedQuantity: 1,
            },
        ],
        cart: [
            { "productId": 1, "color": { "id": 2, "img": "img/products/productOne/one.webp" }, "size": "M" }
        ],
        savedProducts: [],
        activeProduct: {},
    },
    getters: {
        getCategories(state) {
            return state.categories;
        },
        getProducts(state) {
            return state.products;
        },
        getProduct: (state) => (productId) => {
            let index = state.products.findIndex(product => product.id == productId);
            return state.products[index];
        },
        getCart(state) {
            return state.cart;
        },
        getCartSummary(state) {
            let total = 0;
            for (const ca of state.cart) {
                let index = state.products.findIndex(product => product.id == ca.productId);
                const product = state.products[index];
                total += product.price * product.selectedQuantity;
            }
            return total;
        },
        getSavedProducts(state) {
            return state.savedProducts;
        },
        getActiveProduct(state) {
            return state.activeProduct
        },
    },
    mutations: {
        AddToCart(state, data) {
            state.cart.push(data)
            state.activeProduct = {}
        },
        saveProduct(state, data) {
            state.savedProducts.push(data)
        },
        unSaveProduct(state, productIndex) {
            state.savedProducts.splice(productIndex, 1)
        },
        selectActiveProduct(state, product) {
            state.activeProduct = product
        },
        hideActiveProduct(state) {
            state.activeProduct = {}
        },
    },
    actions: {
        AddToCart({ commit }, data) {
            commit('AddToCart', data)
        },
        saveProduct({ commit }, data) {
            commit('saveProduct', data)
        },
        unSaveProduct({ commit }, productIndex) {
            commit('unSaveProduct', productIndex)
        },
        selectActiveProduct({ commit }, product) {
            commit('selectActiveProduct', product)
        },
        hideActiveProduct({ commit }) {
            commit('hideActiveProduct')
        },
    }
}