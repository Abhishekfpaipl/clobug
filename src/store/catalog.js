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
                slug: 1,
                name: 'Wrapped Top With Tied Straps',
                type: 'Top',
                brand: 'Alvaro',
                material: 'Polyester',
                stretchability: 'Moderately Stretchable',
                lining: 'No',
                style: 'Casual',
                occasion: 'Daily',
                chestpad: 'No',
                neckline: 'Spaghetti Strap',
                sleevelength: 'Sleeveless',
                silhouette: 'S-Line',
                nopieces: 1,
                pattern: 'Floral',
                trim: 'Backless',
                sleevetype: 'Sleeveless',
                length: 'Long',
                fitness: 'Slim Fit',
                belt: 'No',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/6c081d73a3fe46d9b55d7a09279502acUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/2787bc3fa62144108a71595e73a77b3cUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/1e197f779b614312b879d80a951f4376UR_w1440_q90.webp",
                ],
                price: 1490,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/6c081d73a3fe46d9b55d7a09279502acUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/2787bc3fa62144108a71595e73a77b3cUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/1e197f779b614312b879d80a951f4376UR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 2,
                slug: 2,
                name: 'Sheer Mesh Cropped Placket Blouse',
                type: 'Top',
                brand: 'Adidas',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/7a7d2fee9f584e1181ed3a00d770c12fUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/58ad709b9d2c42668fa1023cbbb6947eUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/a50cf3ee06674a959e1dd9fc3c6a6239UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/a6aa552004314a438783fa3ac0b163bfUR_w1440_q90.webp",
                ],
                price: 1190,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/7a7d2fee9f584e1181ed3a00d770c12fUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/58ad709b9d2c42668fa1023cbbb6947eUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/a50cf3ee06674a959e1dd9fc3c6a6239UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/a6aa552004314a438783fa3ac0b163bfUR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 3,
                slug: 3,
                name: 'Cotton T-shirt With Slogan',
                type: 'T-shirt',
                brand: 'Noise',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/fa63a50270fb4e7cba63d03622c45c90UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/0cd1af6040b54c46a71dddeeb10a0ea8UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/a4a5eea0432b4ce1bb2d1390fb10a502UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/5fbdf603986249488582c5dfb2666f5dUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/10a3dc02bdd64d81a8cd648f773d08f9UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/22a4ef6a14674ff88f751dd677e005d6UR_w1440_q90.webp",
                ],
                price: 890,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/fa63a50270fb4e7cba63d03622c45c90UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/0cd1af6040b54c46a71dddeeb10a0ea8UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/a4a5eea0432b4ce1bb2d1390fb10a502UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/5fbdf603986249488582c5dfb2666f5dUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/10a3dc02bdd64d81a8cd648f773d08f9UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/22a4ef6a14674ff88f751dd677e005d6UR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 4,
                slug: 4,
                name: 'Knot Cargo Trousers',
                type: 'Bottoms',
                brand: 'Nivia',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/56befbb0d87741308f14a068c370ac16UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/e5c6aee139c54275b2ebffd698dd34d3UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/3e710536de774907b4605603f17db88aUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/b068da4ee94644178761cfbaecc76e5dUR_w1440_q90.webp",
                ],
                price: 1890,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/56befbb0d87741308f14a068c370ac16UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/e5c6aee139c54275b2ebffd698dd34d3UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/3e710536de774907b4605603f17db88aUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/b068da4ee94644178761cfbaecc76e5dUR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 5,
                slug: 5,
                name: 'Pleated Palysuit',
                type: 'Jumpsuit',
                brand: 'Adidas',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/e0cfb5747ef64b15a89b5351659108b0UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/20e89000417a4437beabff6b998534f8UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/b27751e3746c4e6aa6d9856c5f9e62c7UR_w1440_q90.webp",
                ],
                price: 2690,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/e0cfb5747ef64b15a89b5351659108b0UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/20e89000417a4437beabff6b998534f8UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/b27751e3746c4e6aa6d9856c5f9e62c7UR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 6,
                slug: 6,
                name: 'Cut Out Long Slip Dress',
                type: 'Slip Dress',
                brand: 'Noise',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/950f99e2fe0c488a9596efb61b76ef57UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/d19240439f0f416d804898887bad26e3UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/d35ec857deff4c818bff4c8468450de3UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/0d462dc350a146ec94d9e6765d82e4b4UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/e5bd390204f44431ae35b531c12bbd2aUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/6fa24cbfcd074a78af1f1ac15c203d8bUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/f55807bf605c482eb1c8bd89b75a0ba2UR_w1440_q90.webp",
                ],
                price: 1990,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/950f99e2fe0c488a9596efb61b76ef57UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/d19240439f0f416d804898887bad26e3UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/d35ec857deff4c818bff4c8468450de3UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/0d462dc350a146ec94d9e6765d82e4b4UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/e5bd390204f44431ae35b531c12bbd2aUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/6fa24cbfcd074a78af1f1ac15c203d8bUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/f55807bf605c482eb1c8bd89b75a0ba2UR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 7,
                slug: 7,
                name: 'Gathered Short Dress With Twisted Knots',
                type: 'Dress',
                brand: 'Noise',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/e10177d836324ef99a38a835ab0c82f6UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/0521efffd88c460390c5adbd9dbc6ad0UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/492c751605b3492fb09f7910e92b3c41UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/a916321989ef4694acfffe732bf31e59UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/1162da0f52474086b9045a2ea9b2bef2UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/93a2a3ea456447928598056f7fa0a478UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/67dd6bd7783a417c967eacf89dfac7d1UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/f8f7bb9133044bd6bb44a5da5a195e17UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/96e0f3581157418eb9a553d8775b2ce8UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/8e3ea01afef6402b94e8c13747d3d1f1UR_w1440_q90.webp",
                ],
                price: 1790,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/0521efffd88c460390c5adbd9dbc6ad0UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/492c751605b3492fb09f7910e92b3c41UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/a916321989ef4694acfffe732bf31e59UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/1162da0f52474086b9045a2ea9b2bef2UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/93a2a3ea456447928598056f7fa0a478UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/67dd6bd7783a417c967eacf89dfac7d1UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/f8f7bb9133044bd6bb44a5da5a195e17UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/96e0f3581157418eb9a553d8775b2ce8UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/8e3ea01afef6402b94e8c13747d3d1f1UR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 8,
                slug: 8,
                name: 'Gathered Satin Shirt Dress',
                type: 'Shirt Dress',
                brand: 'Noise',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/43568c98c7a14a45b76576ef4381764fUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/35e430b8993d4df5ad3847d9d55b8f1aUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/8edb32877dec4ecd8772025392c69daaUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/5b1eda85b8bc4c6b90b0c745d4df3291UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/aa3dab3f49604440aa8404e27b92b8beUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/cc0972e139254e8697374bd3eb8f0ffaUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/3f5ad6b6fea042faa818130c55defebbUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/4bf515c166384f53aa37907ee62c0f48UR_w1440_q90.webp",
                ],
                price: 1990,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/43568c98c7a14a45b76576ef4381764fUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/35e430b8993d4df5ad3847d9d55b8f1aUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/8edb32877dec4ecd8772025392c69daaUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/5b1eda85b8bc4c6b90b0c745d4df3291UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/aa3dab3f49604440aa8404e27b92b8beUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/cc0972e139254e8697374bd3eb8f0ffaUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/3f5ad6b6fea042faa818130c55defebbUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/4bf515c166384f53aa37907ee62c0f48UR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 9,
                slug: 9,
                name: 'Cut Out Long Dress With Beads And Tassels',
                type: 'Dress',
                brand: 'Noise',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/db5d2f58452148128cdedebd8c21470cUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/4b84c780920b4a4fae837412e0d151faUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/3f03ce8c08ff494c97a90ac85871f100UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/fad95da1311c41da88b8e246ec674f17UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/d71692a4d4f14ccbac6e5414d3f97168UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/adb5da00e0704f1b94bf218097aea87cUR_w1440_q90.webp",
                ],
                price: 1990,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/db5d2f58452148128cdedebd8c21470cUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/4b84c780920b4a4fae837412e0d151faUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/3f03ce8c08ff494c97a90ac85871f100UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/fad95da1311c41da88b8e246ec674f17UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/d71692a4d4f14ccbac6e5414d3f97168UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/adb5da00e0704f1b94bf218097aea87cUR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
            {
                id: 10,
                slug: 10,
                name: 'T-shirt and Shorts Co-ord Set',
                type: 'Co-ord',
                brand: 'Noise',
                images: [
                    "https://img101.urbanic.com/v1/goods-pic/b6615d647a4d4bd88e4c6f20f7fb39d8UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/f7c74c31ef6c4fa1833ac00f27f5d7cdUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/b1f2ecf1bf7d41eab254f3e5463add20UR_w1440_q90.webp",
                ],
                price: 1890,
                colors: [
                    "https://img101.urbanic.com/v1/goods-pic/b6615d647a4d4bd88e4c6f20f7fb39d8UR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/f7c74c31ef6c4fa1833ac00f27f5d7cdUR_w1440_q90.webp",
                    "https://img101.urbanic.com/v1/goods-pic/b1f2ecf1bf7d41eab254f3e5463add20UR_w1440_q90.webp",
                ],
                sizes: [
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'F' }
                ],
                quantities: [
                    { id: 1, name: 1 },
                    { id: 2, name: 2 },
                    { id: 3, name: 3 },
                    { id: 4, name: 4 }
                ],
                selectedQuantity: 1,
            },
        ],
        cart: [
            {
                "productId": 1,
                "color": "https://img101.urbanic.com/v1/goods-pic/2787bc3fa62144108a71595e73a77b3cUR_w1440_q90.webp",
                "size": "M"
            }
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