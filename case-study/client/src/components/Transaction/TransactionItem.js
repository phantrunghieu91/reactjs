import { Col, Image, Row } from 'react-bootstrap';
import convertDecimal from '../../hooks/convertDecimal';
import * as img from '../../imgs';
import css from './transaction.module.css';

const TransactionItem = ({ transaction, currency, categories }) => {
  const imgRender = type => {
    const category = categories[type].filter(item => item.id === transaction.categoryId)[0];
    return (
      <Image
        style={{ height: 40, width: 40 }}
        rounded
        src={img[category.img]}
        alt={category.name}
      />
    );
  };
  return (
    <Row className={`${css.transactionItem} px-5 py-2 m-0 border-bottom`} key={transaction.id}>
      <Col md={2} xl={1} className='p-0 d-flex align-items-center'>
        {imgRender(transaction.type)}
      </Col>
      <Col md={5} xl={5} className='h-100 d-flex flex-column justify-content-center p-0'>
        <span>{transaction.date}</span>
        <span className='text-secondary'>{transaction.note}</span>
      </Col>
      <Col md={5} xl={6} className='p-0 d-flex align-items-center justify-content-end flex-grow-1'>
        <span className={`${transaction.type === 'income' ? 'text-success' : 'text-danger'}`}>{`${
          transaction.type === 'income' ? '+' : '-'
        }${convertDecimal(transaction.amount.toString())} ${currency}`}</span>
      </Col>
    </Row>
  );
};

export default TransactionItem;
