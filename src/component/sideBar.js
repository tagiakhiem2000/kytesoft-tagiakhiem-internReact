import { Nav } from "react-bootstrap";
import { AiOutlineSetting, AiOutlineHeart } from "react-icons/ai"
import { BsBook, BsMinecart } from "react-icons/bs"

export default function SideBar() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column" id="sideBar">
            <Nav.Item>
                <AiOutlineSetting />
            </Nav.Item>
            <Nav.Item>
                <AiOutlineHeart />
            </Nav.Item>
            <Nav.Item>
                <BsBook />
            </Nav.Item>
            <Nav.Item>
                <BsMinecart />
            </Nav.Item>
        </Nav>

    )
}