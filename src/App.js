import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Home from "./pages/Home";
import LoginPage from "./components/Auth/Login";
import RegisterPage from "./components/Auth/Register";
import ChatPage from "./pages/ChatPage";
import "./App.css";
import ChatRoomPage from "./components/Chat/ChatRoom";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: "0 24px", minHeight: 280 }}>
            <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </Content>
            <Footer style={{ textAlign: "center" }}>ChatApp ©2024</Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
