import {
  Breadcrumb,
  Icon,
  Row,
  Col,
  Layout,
  Card,
  Carousel,
} from 'antd';
import Link from 'next/link'
import "../style.less";

const {
  Header, Content,
} = Layout;

export default () => (
  <Layout>
    <Header>
      <Row justify="space-around" type="flex">
        <Col span={20}>
          <Row justify="space-around" type="flex">
            <Col span={12} md={12} xs={24}>
              <span >Welcome to ABC Burger</span>
            </Col>
            <Col span={12} md={12} xs={0}>
              <span className="ml-30 float-right"><Icon type="phone" theme="filled" /> Call us 09-999-9999</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>

    <Row justify="space-around" type="flex">
      <Col span={20} style={{ textAlign: 'right', height: 50, display: 'flex', justifyContent: 'flex-end', textTransform: 'uppercase' }}>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
        </div>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href="/">
            <a>
              Product
            </a>
          </Link>
        </div>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href="/">
            <a>
              About us
            </a>
          </Link>
        </div>
      </Col>
    </Row>

    <Row justify="space-around" type="flex">
      <Col span={20}>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Home</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>

    <Row justify="space-around" type="flex">
      <Col span={20} style={{ paddingTop: '30px', paddingBottom: '30px', minHeight: '500px' }}>
        <Content>
          <div>
            <Carousel autoplay>
              <div>
                <h3>
                  <img src="/static/images/big-images.jpg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="/static/images/big-images-2.jpg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="/static/images/big-images-3.jpg" />
                </h3>
              </div>
            </Carousel>
          </div>
          <Row gutter={16}>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img alt="image1" style={{ width: '100%' }} src="/static/images/burger1.jpg" />
                }
              >
                <Card.Meta
                  title="Menu 1"
                  description="burger with patty and cheese"
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img alt="image2" style={{ width: '100%' }} src="/static/images/burger2.jpg" />}
              >
                <Card.Meta
                  title="Menu 2"
                  description="burger on white ceramic plate"
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img alt="image3" style={{ width: '100%' }} src="/static/images/burger3.jpg" />}
              >
                <Card.Meta
                  title="Menu 3"
                  description="burger with tomato and onion"
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img alt="image4" style={{ width: '100%' }} src="/static/images/burger4.jpg" />}
              >
                <Card.Meta
                  title="Menu 4"
                  description="burger with vegetables"
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Col>
    </Row>

    <Row justify="space-around" type="flex" style={{ background: '#f9f9f9' }}>
      <Col md={8} xs={20} style={{height: '40px', display: 'flex'}}>
        <div style={{ margin: 'auto 0px' }}>
          &copy; 2019 nextjs antd now.sh
        </div>
      </Col>
      <Col md={8} xs={20}>
        <div style={{ margin: 'auto', height: '40px', display: 'flex', justifyContent: 'flex-end' }}>
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="facebook" />
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="instagram" />
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="google" />
        </div>
      </Col>
    </Row>
  </Layout>
)
