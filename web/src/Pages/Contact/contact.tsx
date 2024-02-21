import './contact.scss';
import { Form, Input, Button } from 'antd';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import BackgroundJpg from '../../Assets/Images/contact-bg.jpg';
import MapComponent from '../../Components/Maps/MapComponent';
import config from '../../config';

const mapType = config.mapType;

const Contact = () => {
  return (
    <div className="contact-container">
      <HeroHeader title="Contact Us" breadcrumbs={['Contact Us']} backgroundImage={BackgroundJpg} />
      <div className="page-content">
        <div className="container">
          <div className="section-row">
            <div className="section-column">
              <div>Contact Us</div>
              <h2>Hello, Any Questions?</h2>
              <Form name="contact" layout="vertical">
                <Form.Item label="Name" name="name">
                  <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input placeholder="Enter your email address" />
                </Form.Item>
                <Form.Item label="Message" name="message">
                  <Input.TextArea placeholder="Your message..." rows={6} />
                </Form.Item>
                <Button size="large">Send Message</Button>
              </Form>
            </div>
            <div className="section-column">
              <MapComponent
                mapType={mapType}
                center={[0, 0]}
                zoom={4}
                height={350}
                style="mapbox://styles/mapbox/streets-v11"
              ></MapComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
