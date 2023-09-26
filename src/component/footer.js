import { Col, Container, Row } from "react-bootstrap";
import { BiMobile } from "react-icons/bi";
import { GrLocation } from "react-icons/gr"
import { BsAlarm } from "react-icons/bs"
import { HiLocationMarker } from "react-icons/hi"

export default function Footer() {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col>
            <h4>Our Awards</h4>
            <p>
              London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.
              <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"></img>
            </p>
          </Col>
          <Col>
            <h4>Contact Info</h4>
            <p>
              <BiMobile />
              1-567-124-44227
            </p>
            <p>
              <HiLocationMarker />
              184 Main Street East Perl Habour 8007
            </p>
            <p>
              <BsAlarm />
              Mon - Sat 8.00 - 18.00 Sunday CLOSED
            </p>
          </Col>
          <Col>
            <h4>Recent Trips</h4>
            <Row className="footerRow">
              <Col>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                  <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia" data-lazy-src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" data-ll-status="loaded" className="entered lazyloaded" />
                  <noscript>
                    <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia" />
                  </noscript>
                </a>
              </Col>
              <Col>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/27308262031/">
                  <img src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="Gentoo Penguins, Falkland Islands (Islas Malvinas), British Overseas Territory" data-lazy-src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" data-ll-status="loaded" className="entered lazyloaded" />
                  <noscript>
                    <img src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="Gentoo Penguins, Falkland Islands (Islas Malvinas), British Overseas Territory" />
                  </noscript>
                </a>
              </Col>
              <Col>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/27287965356/">
                  <img src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="Aerial View of Singapore CBD Skyline, Marina Bay Esplanade and Raffles Place, Singapore" data-lazy-src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" data-ll-status="loaded" className="entered lazyloaded" />
                  <noscript>
                    <img src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="Aerial View of Singapore CBD Skyline, Marina Bay Esplanade and Raffles Place, Singapore" />
                  </noscript>
                </a>
              </Col>
            </Row>
            <Row className="footerRow">
              <Col>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/27138570412/">
                  <img src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="View Of Sugarloaf Mountain, Botafogo And The City of Rio De Janeiro, Brazil, South America" data-lazy-src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" data-ll-status="loaded" className="entered lazyloaded" />
                  <noscript>
                    <img src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="View Of Sugarloaf Mountain, Botafogo And The City of Rio De Janeiro, Brazil, South America" />
                  </noscript>
                </a>
              </Col>
              <Col>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/26520497604/">
                  <img src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="Sacre Coeur (Basilica of the Sacred Heart of Paris), Paris, France :: HDR" data-lazy-src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" data-ll-status="loaded" className="entered lazyloaded" />
                  <noscript>
                    <img src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="Sacre Coeur (Basilica of the Sacred Heart of Paris), Paris, France :: HDR" />
                  </noscript>
                </a>
              </Col>
              <Col>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/27012097142/">
                  <img src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="The Great Gate (Darwaza-i rauza) of Taj Mahal, Agra, Uttar Pradesh, India :: HDR" data-lazy-src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" data-ll-status="loaded" className="entered lazyloaded" />
                  <noscript>
                    <img src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="The Great Gate (Darwaza-i rauza) of Taj Mahal, Agra, Uttar Pradesh, India :: HDR" />
                  </noscript>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="footer_nav">
          <Col>
            <div id="copyright">© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
          </Col>
          <Col id="footerMenuCol">
            <ul id="footer_menu">
              <li id="menu-item-215" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-215"><a href="https://themes.themegoods.com/grandtour/demo/">Home</a></li>
              <li id="menu-item-216" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"><a href="https://themes.themegoods.com/grandtour/demo/tours/">Tours</a></li>
              <li id="menu-item-217" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-217"><a href="https://themes.themegoods.com/grandtour/demo/blog/">Blog</a></li>
              <li id="menu-item-218" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-218"><a href="#">Purchase Theme</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>

  )
}