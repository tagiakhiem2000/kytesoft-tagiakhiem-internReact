import { Container, Navbar, Nav, NavDropdown, DropdownButton, Dropdown, Row, Col, Form, Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi"
import { PiShoppingCart } from "react-icons/pi"
import { BiSort, BiDollar } from "react-icons/bi"
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md"
import Title from "./title";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai"
import React from "react";

export default function Header() {
    const closeMobileMenu = () => {
        document.getElementById('mobileMenu').classList.add('showMobileMenu');
    }
    const openExtraSearchForm = () => {
        if (document.getElementById('searchForm').classList.contains('showExtraSearchForm')) {
            document.getElementById('searchForm').classList.remove('showExtraSearchForm');
        }
        else {
            document.getElementById('searchForm').classList.add('showExtraSearchForm');
        }
    }
    return (
        <div className="video-background">
            <div className="overlay"></div>
            <video autoPlay muted loop>
                <source src="/video/videoBackground.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="navContent">
                <Navbar >
                    <Container>
                        <div id="logoAlign">
                            <a href="#">
                                <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"></img>
                            </a>
                        </div>
                        <Navbar.Collapse id="basic-navbar-nav" className="navWrapper justify-content-end">
                            <Nav>
                                {/* <Test /> */}
                                <NavDropdown title="Home" id="basic-nav-dropdown" className="menuNav">
                                    <NavDropdown.Item href="#action/3.1">Home 1 - Background Image</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Home 2 - Youtube Video
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Home 3 - Google Inspired</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Home 4 - Travel Site</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Tours" id="basic-nav-dropdown" className="menuNav">
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Tour Classic Fullwidth`}
                                    >
                                        <Dropdown.Item eventKey="1">2 Columns</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">3 Columns</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="3">4 Columns</Dropdown.Item>
                                    </DropdownButton>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Tour Classic Sidebar`}
                                    >
                                        <Dropdown.Item eventKey="1">Right Sidebar</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Left Sidebar</Dropdown.Item>
                                    </DropdownButton>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Tour Grid Fullwidth`}
                                    >
                                        <Dropdown.Item eventKey="1">2 Columns</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">3 Columns</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="3">4 Columns</Dropdown.Item></DropdownButton>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Tour Grid Sidebar`}
                                    >
                                        <Dropdown.Item eventKey="1">Right Sidebar</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Left Sidebar</Dropdown.Item>
                                    </DropdownButton>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Tour List Sidebar`}
                                    >
                                        <Dropdown.Item eventKey="1">Right Sidebar</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Left Sidebar</Dropdown.Item>
                                    </DropdownButton>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Tour Header Type`}
                                    >
                                        <Dropdown.Item eventKey="1">Featured Image</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Video</Dropdown.Item>
                                    </DropdownButton>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Tour Categories`}
                                    >
                                        <Dropdown.Item eventKey="1">Rural</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Snow & Ice</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="3">Wildlife</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Mountain</Dropdown.Item>
                                    </DropdownButton>
                                </NavDropdown>
                                <NavDropdown title="Booking" id="basic-nav-dropdown" className="menuNav">
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Online Payment for Booking`}
                                    >
                                        <Dropdown.Item eventKey="1">Variable Tour Pricing</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Simple Tour Pricing</Dropdown.Item>
                                    </DropdownButton>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Custom Booking Form`}
                                    >
                                        <Dropdown.Item eventKey="1">Booking Form + Sub Tour Date</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Booking Form + Custom Date</Dropdown.Item>
                                    </DropdownButton>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Tour Durations`}
                                    >
                                        <Dropdown.Item eventKey="1">Single Day Tour</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Multiple Days Tour</Dropdown.Item>
                                    </DropdownButton>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Custom Booking URL for Afftiliate Tour
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Custom Booking useing custom HTML & Shortcode
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Header Options`}
                                    >
                                        <Dropdown.Item eventKey="1">Standard Background Header</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Video Background Header</Dropdown.Item>
                                    </DropdownButton>
                                    <NavDropdown.Divider />
                                    <DropdownButton
                                        key="end"
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        title={`Layout Options`}
                                    >
                                        <Dropdown.Item eventKey="1">With Sidebar</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">Fullwidth</Dropdown.Item>
                                    </DropdownButton>
                                </NavDropdown>
                                <NavDropdown title="Destinations" id="basic-nav-dropdown" className="menuNav">
                                    <NavDropdown.Item href="#action/3.1">Destination Fullwidth</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Destination + Video Header
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Destination Right Sidebar</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Destination Left Sidebar</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Single Destination</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Single Destination + Video</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pages" id="basic-nav-dropdown" className="menuNav">
                                    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Contact Us
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">FAQs</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Gallery</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Page Fullwidth</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Page + Video Background Header</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Page Right Sidebar</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Page Left Sidebar</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Blog" id="basic-nav-dropdown" className="menuNav">
                                    <NavDropdown.Item href="#action/3.1">Blog Right Side</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Blog Left Sidebar
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Blog Fullwidth
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Blog Grid Right Sidebar
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Blog Grid Left Sidebar
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Blog Grid Fullwidth
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Blog Full + Grid Right Sidebar
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Blog Full + Grid Left Sidebar
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Blog Full + Grid Fullwidth
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Shortscode" id="basic-nav-dropdown" className="menuNav">
                                    <NavDropdown.Item href="#action/3.2">
                                        Accordion & Toggles
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Alert Boxes
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Animated Content
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Buttons & Social Icons
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Columns
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Google Maps
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Image Frame & Animation
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Image Teasers
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Pricing Tables
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Tabs
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Shop" id="basic-nav-dropdown" className="menuNav">
                                    <NavDropdown.Item href="#action/3.2">
                                        Shop Fullwidth
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Shop Sidebar
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Single Product Fullwidth
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Single Product With Sidebar
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Navbar.Text className="menuNav" onClick={closeMobileMenu}>
                                    <GiHamburgerMenu />
                                </Navbar.Text>
                                <Navbar.Text className="menuNav" style={{ position: 'relative' }}>
                                    <div className="cart_count">0</div>
                                    <PiShoppingCart />
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="innerContent">
                <Title mainTitle="Where do you want to go?" subTitle="Trips, experiences, and places. All in one service." />
                <Container id="searchForm">
                    <Row className="defaultSearchForm searchForm">
                        <Col>
                            <div className="cellSearch">
                                <Form.Control placeholder="Destination, city" />
                            </div>
                            <AiOutlineSearch />
                        </Col>
                        <Col>
                            <div className="cellSearch">
                                <Form.Select aria-label="Default select example">
                                    <option>Any Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="3">April</option>
                                    <option value="3">May</option>
                                    <option value="3">June</option>
                                    <option value="3">July</option>
                                    <option value="3">August</option>
                                    <option value="3">September</option>
                                    <option value="3">October</option>
                                    <option value="3">November</option>
                                    <option value="3">December</option>
                                </Form.Select>
                            </div>
                            <AiFillCalendar />
                        </Col>
                        <Col>
                            <div className="cellSearch">
                                <Form.Select aria-label="Default select example">
                                    <option>Sort By Date</option>
                                    <option value="1">Price Low to High</option>
                                    <option value="2">Price High to Low</option>
                                    <option value="3">Sort By Name</option>
                                    <option value="3">Sort By Popularity</option>
                                    <option value="3">Sort By Review Score</option>
                                </Form.Select>
                            </div>
                            <BiSort />
                        </Col>
                        <Col>
                            <Button variant="danger">Search</Button>{' '}
                        </Col>
                    </Row>
                    <Row id="extraSearchForm" className="searchForm">
                        <Col>
                            <div className="cellSearch">
                                <Form.Select aria-label="Default select example">
                                    <option>All Categories</option>
                                    <option value="1">Mountain</option>
                                    <option value="2">Rural</option>
                                    <option value="3">Snow & Ice</option>
                                    <option value="3">Wildlife</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col>
                            <div className="cellSearch">
                                <Form.Select aria-label="Default select example">
                                    <option>Any Datinations</option>
                                    <option value="1">Tokyo</option>
                                    <option value="2">Seoul</option>
                                    <option value="3">Paris</option>
                                    <option value="3">London</option>
                                    <option value="3">Venice</option>
                                    <option value="3">Miami</option>
                                    <option value="3">Rome</option>
                                    <option value="3">Prague</option>
                                    <option value="3">California</option>
                                    <option value="3">Kyoto</option>
                                    <option value="3">Hong Kong</option>
                                    <option value="3">Santorini</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col>
                            <div className="cellSearch">
                                <Form.Control placeholder="Max budget ex. 500" />
                            </div>
                            <BiDollar />
                        </Col>

                        <Col>
                        </Col>
                    </Row>
                    {/* </div> */}
                    <div className="tour_advance_search_wrapper_link" style={{ 'textAlign': 'left' }}>
                        <a id="tour_advance_search_toggle" onClick={openExtraSearchForm} href="javascript:;" style={{ "color": "#ffffff" }}>
                            <span className="icon ti-angle-down"></span>
                            <MdOutlineKeyboardArrowDown id="iconArrowDown"/>
                            <MdOutlineKeyboardArrowUp id="iconArrowUp"/>
                            Advanced Search
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    )
}