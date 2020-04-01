
// webp-convert.js
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');


const convertImages = async () => {
    const files = ['./originImage/*.{jpg,png}'];
    const config = {
        destination: './webpImage',
        plugins: [imageminWebp({quality: 75, alphaQuality: 50})],
    };

    console.log('開始轉換圖片⋯⋯');
    await imagemin(files, config).catch((e) => {
        console.log(e, 1234)
    });
    console.log('已將圖片轉成 WebP！');
};

convertImages();