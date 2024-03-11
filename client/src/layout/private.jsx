import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AppSidebar from "../pages/AppSidebar";

const PrivateLayout = () => {
  return (
    <>
      <Row style={{ marginRight: 0 }}>
        <Col xs={2}>
          <AppSidebar />
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};
export default PrivateLayout;
