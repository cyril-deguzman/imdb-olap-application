import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  FileOutlined,
} from '@ant-design/icons';

import BarChartMFRatio from './components/BarChartMFRatio';
import LineChartBestYears from './components/LineChartBestYears';
import RadarChartDirGenre from './components/RadarChartDirGenre';
import BarChartTopMusic from './components/BarChartTopMusic';

import 'antd/dist/antd.css';
import './assets/styles/App.css';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component { 
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });

    if(collapsed);
  };

  render() {
    const { collapsed } = this.state;
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div id="logo"><p>IMDb Analysis</p></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<LineChartOutlined />}>
                Best Years
                <Link to="/Line"/>
              </Menu.Item>
              <Menu.Item key="2" icon={<RadarChartOutlined />}>
                Genre Radar
                <Link to="/Radar"/>
              </Menu.Item>
              <Menu.Item key="3" icon={<BarChartOutlined />}>
                Music Related Movies
                <Link to="/BarMusic"/>
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                Gender Ratio
                <Link to="/Bar"/>
              </Menu.Item>
              <Menu.Item key="5" icon={<FileOutlined />}>
                Files
                <Link to="/Files"/>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><b>STADVDB</b></Breadcrumb.Item>
                <Breadcrumb.Item><b>MCO1</b></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, minHeight: 360}}>
                  <Routes>
                    <Route path="/" element={<LineChartBestYears />} />
                    <Route path="/Bar" element={<BarChartMFRatio />} />
                    <Route path="/Line" element={<LineChartBestYears />} />
                    <Route path="/Radar" element={<RadarChartDirGenre />} />
                    <Route path="/BarMusic" element={<BarChartTopMusic />} />
                  </Routes>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>© 2021 cyrilethan-deguzman</Footer>
          </Layout>
        </Layout>
      
    );
  }
}

export default App;