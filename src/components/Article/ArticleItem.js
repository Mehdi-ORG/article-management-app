import { CardFooter } from "react-bootstrap";
import "./ArticleItem.css";
import Card from "react-bootstrap/Card";
import { IoMdTime } from "react-icons/io";
import { TiArrowLeftThick } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ArticleItem({ image, title, desc, writter, readingtime }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title className="py-2">{title} </Card.Title>
        <Card.Text>{desc}
        </Card.Text>
        <div className="read-more">
          <span> اطلاعات دوره</span>
          <TiArrowLeftThick size='25px' />
        </div>
      </Card.Body>
      <CardFooter className="d-flex justify-content-between align-items-center py-3" style={{color: '#5d5c5c'}}>
        <span>نویسنده : {writter}</span>
        <span>
          {" "}
          <IoMdTime /> : {readingtime} دقیقه
        </span>
      </CardFooter>
    </Card>
  );
}

export default ArticleItem;