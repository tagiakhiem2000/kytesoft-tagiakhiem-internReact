import { LiaTimesSolid } from "react-icons/lia"
export default function MobileMenu() {
    const closeMobileMenu = () => {
        document.getElementById('mobileMenu').classList.remove('showMobileMenu');
    }
    return (
        <div className="" id="mobileMenu">
            <a onClick={closeMobileMenu} className="" id="mobileMenuClose"></a>
            <div className="mobileMenuWrapper">
                <a onClick={closeMobileMenu} className="" id="btnCloseMobileMenu"><LiaTimesSolid></LiaTimesSolid></a>
                <div className="mobileMenuContent">
                    <div className="mainMenuContent">
                        <ul id="mainMenuContent" className="mobileMainNav">
                            <li>
                                <a>Home</a>
                                {/* <ul className="subMenu">
                                    <li><a>Home 1 - Background Image</a></li>
                                    <li><a>Home 2 - Youtube Video</a></li>
                                    <li><a>Home 3 - Google Inspired</a></li>
                                    <li><a>Home 4 - Travel Site</a></li>
                                </ul> */}
                            </li>
                            <li>
                                <a>Tours</a>
                                {/* <ul className="subMenu">
                                    <li>
                                        <a>Tour Classic Fullwidth</a>
                                        <ul>
                                            <li><a>2 Columns</a></li>
                                            <li><a>3 Columns</a></li>
                                            <li><a>4 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>Tour Classic Sidebar</a>
                                        <ul>
                                            <li><a>Right Sidebar</a></li>
                                            <li><a>Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Tour Grid Fullwidth</a>
                                        <ul>
                                            <li><a>2 Columns</a></li>
                                            <li><a>3 Columns</a></li>
                                            <li><a>4 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Tour List Sidebar</a>
                                        <ul>
                                            <li><a>Right Sidebar</a></li>
                                            <li><a>Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Tour Header Type</a>
                                        <ul>
                                            <li><a>Featured Image</a></li>
                                            <li><a>Video</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Tour Categories</a>
                                        <ul>
                                            <li><a>Rural</a></li>
                                            <li><a>Snow & Ice</a></li>
                                            <li><a>Wildlife</a></li>
                                            <li><a>Mountain</a></li>
                                        </ul>
                                    </li>                                    
                                </ul> */}
                            </li>
                            <li>
                                <a>Booking</a>
                                <ul className="subMenu">
                                    <li><a>2 Columns</a></li>
                                    <li><a>3 Columns</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Destinations</a>
                                <ul className="subMenu">
                                    <li><a>2 Columns</a></li>
                                    <li><a>3 Columns</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Pages</a>
                                <ul className="subMenu">
                                    <li><a>2 Columns</a></li>
                                    <li><a>3 Columns</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Tours</a>
                                <ul className="subMenu">
                                    <li><a>2 Columns</a></li>
                                    <li><a>3 Columns</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Tours</a>
                                <ul className="subMenu">
                                    <li><a>2 Columns</a></li>
                                    <li><a>3 Columns</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Tours</a>
                                <ul className="subMenu">
                                    <li><a>2 Columns</a></li>
                                    <li><a>3 Columns</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}