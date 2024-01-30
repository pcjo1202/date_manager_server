import fs from 'fs';
import csv from 'csv-parser';
import { db } from './db/database.js';

db.getConnection();

const public_data = {
  one_person: {
    table_name: 'ONE_PERSON_CLTUR_FCLTY_LIST',
    columns:
      'ESNTL_ID, LCLAS_NM, MLSFC_NM, FCLTY_NM, CTPRVN_NM, SIGNGU_NM, FCLTY_ROAD_NM_ADDR, TEL_NO, FCLTY_LA, FCLTY_LO, ADIT_DC',
  },
};

const sql_query = `INSERT INTO ${public_data.one_person.table_name} (${public_data.one_person.columns}) VALUES (?,?,?,?,?,?,?,?,?,?,?);`;
const csv_file = `./data/${public_data.one_person.table_name}.csv`;

fs.createReadStream(csv_file)
  .pipe(csv())
  .on('data', async (data) => {
    const columns = [
      data.ESNTL_ID,
      data.LCLAS_NM,
      data.MLSFC_NM,
      data.FCLTY_NM,
      data.CTPRVN_NM,
      data.SIGNGU_NM,
      data.FCLTY_ROAD_NM_ADDR,
      data.TEL_NO,
      data.FCLTY_LA,
      data.FCLTY_LO,
      data.ADIT_DC,
    ];
    // 데이터를 MySQL 테이블에 삽입
    await db.execute(sql_query, columns);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  })
  .on('error', (error) => {
    console.error('Error processing CSV file:', error);
  });
