import express from 'express';
import db from '../db/database.js';

const category = {
  nature: '자연',
  shooping: '쇼핑시설',
};

const router = express.Router();

// Get 방식으로 쿼리를 통해 받아온 것을 카테고리 데이터와 매칭시켜 SQL문을 통해 데이터를 가져온다.

router.get('/', async (req, res, next) => {
  // query 내용 { main: 'nature', sub: 'shopping' }
  const { main, sub } = req.query;

  const sql = `select FCLTY_NM, FCLTY_ROAD_NM_ADDR, FCLTY_LA, FCLTY_LO from ONE_PERSON_CLTUR_FCLTY_LIST where LCLAS_NM='${category[main]}'`;

  console.log(sql);

  return db
    .execute(sql) //
    .then((results) => {
      res.json(results);
    });
});

export default router;
