import "./Home.css";
import MyNavbar from "../../components/Navbar/myNavbar";
import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/Article/ArticleItem";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/article")
      .then((response) => setArticles(response.data));
  }, []);
  return (
    <div>
      <MyNavbar />
      <Container>
        <h1 className="py-2">صفحه اصلی</h1>
        <Row xs={1} md={2} lg={3} xl={4} className="gy-4 py-4">
          {articles.map((article) => (
            <Col key={article.id}>
              <ArticleItem {...article} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
