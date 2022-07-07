import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './CardItem.module.scss';
import classNames from 'classnames/bind';








const cx = classNames.bind(styles)



function CardItem() {
    return (
        <a className={cx('card-item')} href='#item '>
            <Card style={{ width: '240px' }}>
                <Card.Img variant="top" src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P23358_3.jpg" />
                <Card.Body>
                    <Card.Title>AB Junior Pre & Pro</Card.Title>
                    <Card.Text>
                        Thực phẩm bảo vệ sức khoẻ bảo vệ sức khoẻ hỗ trợ tiêu hoá AB Junior Pre & Pro (Hộp 10 gói)
                    </Card.Text>

                    <Card.Text>
                        560.000đ
                    </Card.Text>
                    <Button style={{ zIndex: '10' }} variant="success">Thêm vào giỏ hàng</Button>
                </Card.Body>
            </Card>
        </a>
    )
}

export default CardItem;