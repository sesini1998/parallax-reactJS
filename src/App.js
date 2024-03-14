import { Col, Row } from "antd";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/RightPanel/Products/Products";
import LeftPanel from "./Components/LeftPanel/LeftPanel";
import Bottom from "./Components/Bottom/Bottom";

function App() {
  return (
    <div className="app-container">
      <div>
        <Navbar />
        <Row gutter={8} className="app-content">
          <Col span={15}>
            <LeftPanel />
          </Col>
          <Col span={9}>
            <Products />
          </Col>
        </Row>
      </div>
      <Row className="app-bottom">
        <Bottom />
      </Row>
    </div>
  );
}

export default App;
