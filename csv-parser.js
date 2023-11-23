const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('./data/KC_CAFE_BOOK_STOR_LIST.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // 여기서 MySQL에 데이터를 삽입하는 함수 호출
  });
