import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import CardItem from '../CardItem';
import styles from './ProductGroup.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)







export default function ProductGroup2() {
  return (
    <div className={cx('product')}>
      <Row>
        <Col>
          <div className={cx('block-title')} >
            <div className={cx('collection-name')}>
              <img className={cx('collection-icon')} src='https://bizweb.dktcdn.net/100/239/632/themes/569586/assets/index_col_icon_1.png?1635568039150'></img>
              <a className={cx('collection-link')} href='#t'> Sản phẩm khuyến mãi </a>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <img className={cx('product-img')} src='https://bizweb.dktcdn.net/100/239/632/themes/569586/assets/index_col_left_banner_2.jpg?1635568039150'></img>
        </Col>
      </Row>

      <Row>
        <Col className={cx('cover-item')} xs={3} ><CardItem /></Col>
        <Col className={cx('cover-item')} xs={3} ><CardItem /></Col>
        <Col className={cx('cover-item')} xs={3} ><CardItem /></Col>
        <Col className={cx('cover-item')} xs={3} ><CardItem /></Col>
      </Row>

      <Row>
        <Col className={cx('cover-item')} xs={3} ><CardItem /></Col>
        <Col className={cx('cover-item')} xs={3} ><CardItem /></Col>
        <Col className={cx('cover-item')} xs={3} ><CardItem /></Col>
        <Col className={cx('cover-item')} xs={3} ><CardItem /></Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <div className={cx('more')}>
          <Button variant="success">Xem thêm</Button>{' '}

        </div>
      </Row>
    </div>
  )
}
