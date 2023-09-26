import { Col, Container, Row } from "react-bootstrap";
import Title from "./title";
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { PiAlarmBold } from "react-icons/pi"
import {IoIosArrowForward} from "react-icons/io"
export default function Content() {
    return (
        <>
            <Title mainTitle="Popular Destinations" subTitle="World's best tourist destinations" />
            <Container>
                <Row>
                    <Col>
                        <div className="content firstContent" style={{ "backgroundImage": 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg")' }}>
                            <div className="overlay"></div>
                            <h4>Tokyo</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="content firstContent" style={{ "backgroundImage": "url('https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg')" }}>
                            <div className="overlay"></div>
                            <h4>Seoul</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="content firstContent" style={{ "backgroundImage": "url('https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg')" }}>
                            <div className="overlay"></div>
                            <h4>Paris</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="content firstContent" style={{ "backgroundImage": "url('https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg')" }}>
                            <div className="overlay"></div>
                            <h4>London</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Title mainTitle="Best Value Trips" subTitle="Best offers trips from us" />
            <Container>
                <Row>
                    <Col>
                        <div className="content secondContent">
                            <div className="tourGalary">
                                <img className="tourImage" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg">
                                </img>
                                <div className="tourPrice">$5000</div>
                            </div>
                            <div className="tourInfo">
                                <a>
                                    <Title mainTitle="French Autumn" subTitle="City Tours, Urban"></Title>
                                </a>
                                <Row className="tourAttribute">
                                    <Col className="rating">
                                        <div>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiOutlineStar /></a>
                                            <div className="ratingCount"> 4 reviews</div>
                                        </div>
                                    </Col>
                                    <Col className="days">
                                        <PiAlarmBold />
                                        <div className="ratingCount"> 4 days</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="content secondContent">
                            <div className="tourGalary">
                                <img className="tourImage" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg">
                                </img>
                                <div className="tourPrice">$6000</div>
                            </div>
                            <div className="tourInfo">
                                <a>
                                    <Title mainTitle="Grand Switzerland" subTitle="Shopping, Mountain, Snow & Ice"></Title>
                                </a>
                                <Row className="tourAttribute">
                                    <Col className="rating">
                                        <div>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiOutlineStar /></a>
                                            <div className="ratingCount"> 4 reviews</div>
                                        </div>
                                    </Col>
                                    <Col className="days">
                                        <PiAlarmBold />
                                        <div className="ratingCount"> 4 days</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="content secondContent">
                            <div className="tourGalary">
                                <img className="tourImage" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg">
                                </img>
                                <div className="tour_label">Sale</div>
                                <div className="tourPrice">
                                    <span className="normal_price">
                                        $3,000
                                    </span>
                                    $2000
                                </div>
                            </div>
                            <div className="tourInfo">
                                <a>
                                    <Title mainTitle="Discover Japan" subTitle="City Tours, Iconic"></Title>
                                </a>
                                <Row className="tourAttribute">
                                    <Col className="rating">
                                        <div>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiFillStar /></a>
                                            <a className="starRating"><AiOutlineStar /></a>
                                            <div className="ratingCount"> 4 reviews</div>
                                        </div>
                                    </Col>
                                    <Col className="days">
                                        <PiAlarmBold />
                                        <div className="ratingCount"> 4 days</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Title mainTitle="Why Choose Us" subTitle="Here are reasons you should plan trip with us" />
            <Container>
                <Row>
                    <Col>
                        <div className="thirdContent">
                            <div className="tourGalary">
                                <img className="tourImage" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png">
                                </img>
                            </div>
                            <div className="tourInfo">
                                <a>
                                    <Title mainTitle="Handpicked Hotels" subTitle="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"></Title>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="thirdContent">
                            <div className="tourGalary">
                                <img className="tourImage" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png">
                                </img>
                            </div>
                            <div className="tourInfo">
                                <a>
                                    <Title mainTitle="World Class Service" subTitle="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"></Title>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="thirdContent">
                            <div className="tourGalary">
                                <img className="tourImage" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png">
                                </img>
                            </div>
                            <div className="tourInfo">
                                <a>
                                    <Title mainTitle="Best Price Guarantee" subTitle="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"></Title>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div id="fourthContent"></div>
            <Title mainTitle="Articles & Tips" subTitle="Explore some of the best tips from around the world" />
            <Container>
                <Row>
                    <Col>
                        <div className="content fifthContent">
                            <div className="tourGalary">
                                <img className="tourImage" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg">
                                </img>
                            </div>
                            <div className="tourInfo">
                                <a id="date">December 10, 2016</a>
                                <a>
                                    <Title mainTitle="Memorial Day to Someone Told Me to Travel" subTitle="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."></Title>
                                </a>
                                <Row className="tourAttribute">
                                    <a>
                                        Read More
                                        <IoIosArrowForward />
                                    </a>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="content fifthContent">
                            <div className="tourGalary">
                                <img className="tourImage" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg">
                                </img>
                            </div>
                            <div className="tourInfo">
                                <a id="date">December 10, 2016</a>
                                <a>
                                    <Title mainTitle="7 Tips For Nomads On A Budget Trips" subTitle="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."></Title>
                                </a>
                                <Row className="tourAttribute">
                                    <a>
                                        Read More
                                        <IoIosArrowForward />
                                    </a>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="content fifthContent">
                            <div className="tourGalary">
                                <img className="tourImage" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg">
                                </img>
                            </div>
                            <div className="tourInfo">
                                <a id="date">December 10, 2016</a>
                                <a>
                                    <Title mainTitle="Taking A Travel Blog Victory Lap" subTitle="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."></Title>
                                </a>
                                <Row className="tourAttribute">
                                    <a>
                                        Read More
                                        <IoIosArrowForward />
                                    </a>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}