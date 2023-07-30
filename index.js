require('dotenv').config();

const express = require('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

const Video = require('./model/video');
const Product = require('./model/product');
const Comment = require('./model/comment');


mongoose.connect(mongoString, {dbName: 'midterm'});
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database connected');
})

const app = express();

app.use(express.json());
app.use('/api', routes);

// Video.insertMany([
//     {
//         link: 'https://www.youtube.com/watch?v=RwfGTZeno8E',
//         title: 'THENBLANK New Collection: 공백 The Pals',
//         thumbnail: 'https://img.youtube.com/vi/RwfGTZeno8E/maxresdefault.jpg' 
//     },
//     {
//         link: 'https://www.youtube.com/watch?v=VGjHvOxglPE',
//         title: 'Jeans Series - Noona Skirt by Rokgaliya',
//         thumbnail: 'https://img.youtube.com/vi/VGjHvOxglPE/maxresdefault.jpg' 
//     },
//     {
//         link: 'https://www.youtube.com/watch?v=8o7O6pMV7jc',
//         title: 'REVIEW PARFUM KITSCHY! wangi mahal + tahan lama tapi affordable?!',
//         thumbnail: 'https://img.youtube.com/vi/8o7O6pMV7jc/maxresdefault.jpg' 
//     },
//     {
//         link: 'https://www.youtube.com/watch?v=S2SX9KzT1Is',
//         title: 'Jelasin wangi parfum SAFF & Co pakai bahasa sehari-hari.',
//         thumbnail: 'https://img.youtube.com/vi/S2SX9KzT1Is/maxresdefault.jpg' 
//     },
//     {
//         link: 'https://www.youtube.com/watch?v=Ix06Jo56Dfg',
//         title: 'Cobain Somethinc Calm Down (acne prone & oily combination skin)',
//         thumbnail: 'https://img.youtube.com/vi/Ix06Jo56Dfg/maxresdefault.jpg' 
//     }
// ])
// .then(() => {
//     console.log('Videos data inserted');
// }).catch((error) => {
//     console.log(error);
// });

// Product.insertMany([
//     {
//         videoId: '64c652cb3b398c329dc2c51b',
//         link: 'https://www.tokopedia.com/thenblank/thenblank-cabana-shirt-maroon',
//         title: 'THENBLANK | Cabana Shirt | Maroon',
//         price: 199000 
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51b',
//         link: 'https://www.tokopedia.com/thenblank/thenblank-everyday-shirt-sage',
//         title: 'THENBLANK | Everyday Shirt | Sage',
//         price:  169000
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51b',
//         link: 'https://www.tokopedia.com/thenblank/thenblank-dotted-sweater-denim',
//         title: 'THENBLANK | Dotted Sweater | Denim',
//         price: 299000 
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51c',
//         link: 'https://www.tokopedia.com/soniainc/runa-skirt-sonia-r1507-rok-denim-panjang-wanita-highwaist-premium',
//         title: 'Runa Skirt SONIA R1507 - Rok Denim panjang wanita Highwaist premium',
//         price: 295000
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51c',
//         link: 'https://www.tokopedia.com/ancienstore/skirt-midi-cargo-plain-jeanswanita-rok-midi-kantong-samping-unfinish-kantong-samping-all-size',
//         title: 'Skirt Midi Cargo Plain JeansWanita - Rok Midi Kantong Samping Unfinish - Kantong Samping, All Size',
//         price: 120000
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51d',
//         link: 'https://www.tokopedia.com/kitschybeauty/kitschy-day-dream-extrait-de-parfum',
//         title: 'Kitschy Day Dream Extrait De Parfum',
//         price: 298000 
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51d',
//         link: 'https://www.tokopedia.com/kitschybeauty/kitschy-feels-forever-vacation-2b60',
//         title: 'Kitschy Feels - Forever Vacation',
//         price: 298000
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51e',
//         link: 'https://www.tokopedia.com/saffnco/saff-co-extrait-de-parfum-xocolatl',
//         title: 'SAFF & Co. Extrait de Parfum - XOCOLATL',
//         price: 217700
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51e',
//         link: 'https://www.tokopedia.com/saffnco/saff-co-extrait-de-parfum-ostara',
//         title: 'SAFF & Co. Extrait de Parfum - OSTARA',
//         price: 212200
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51f',
//         link: 'https://www.tokopedia.com/somethinc/somethinc-2-pcs-paket-calm-down-series-skinpair-bubble-cleanser',
//         title: 'SOMETHINC [2 PCS] Paket Calm Down Series Skinpair Bubble Cleanser',
//         price: 218000
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51f',
//         link: 'https://www.tokopedia.com/somethinc/somethinc-calm-down-skinpair-r-cover-cream',
//         title: 'SOMETHINC Calm Down! Skinpair R-Cover Cream',
//         price: 96750
//     }
// ])
// .then(() => {
//     console.log('Products data inserted');
// }).catch((error) => {
//     console.log(error);
// });

// Comment.insertMany([
//     {
//         videoId: '64c652cb3b398c329dc2c51b',
//         username: 'nursyifaziza',
//         comment: 'Kasih diskon dong kak'
//     },
//     {
//         videoId: '64c652cb3b398c329dc2c51b',
//         username: 'nursyifaziza',
//         comment: 'Yang warna Navy habis nggak ada kak?'
//     }
// ])
// .then(() => {
//     console.log('Comments data inserted');
// }).catch((error) => {
//     console.log(error);
// });

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
})