import React from 'react';

import { List, Card, Button } from 'antd';

const data = [
  {
    title: 'Silver',
    content: [
      {
        price: '₹ 999',
        pass: '1 Day Acess',
        support: '24/7 Access',
        backup: 'Trail',
      }
    ]
  },
  {
    title: 'Gold',
    content: [
      {
        price: '₹ 4,999',
        pass: '30 Day Access',
        support: '24/7 Access',
        backup: 'Personal Trainer',
      }
    ]
  },
  {
    title: 'Our Aim Your Fitness',
    content: [
      {
        price: 'We Provide World Class Training',
        pass: 'We Care For Your Finess',
        support: '',
        backup: ' ',
        class : ''
      }
    ]
  }
];

function AppPricing() {

  return (
    <>
    <div  id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a plan to fit your needs</h2>
          <p></p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].pass}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <p>{item.content[0].class}</p>
                <Button onClick={()=>{window.confirm('want to Subcribe')}} type="primary" size="large">
                  <i className="fab fa-telegram-plane"></i> Get Started</Button> 
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
    </>
  );
}
export default  AppPricing;