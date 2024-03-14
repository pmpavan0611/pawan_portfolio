import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AppSidebar from "../pages/AppSidebar";

const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <Row>
        <Col xs={2}>
          <AppSidebar />
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default PrivateLayout;
