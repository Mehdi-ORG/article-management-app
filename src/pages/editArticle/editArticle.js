import "./editArticle.css";
import MyNavbar from "../../components/Navbar/myNavbar";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function EditArticle() {
  const [articleData, setArticleData] = useState({});
  const articleId = useParams().editArticleId;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/article/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);


  const editArticleHandler = () => {
    axios.put(`http://localhost:5000/article/${articleId}`, articleData)
    Swal.fire({
      title:'مقاله با موفقیت ویرایش شد',
      timer:'1500',
      timerProgressBar:true,
      showConfirmButton:false
    })
  };

  const formhandler = (e) => {
    setArticleData({...articleData,[e.target.name]:e.target.value})
  };
  return (
    <>
      <MyNavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formhandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={articleData.desc}
              name="desc"
              onChange={formhandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={formhandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formhandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={articleData.image}
              name="image"
              onChange={formhandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={articleData.readingtime}
              name="readingtime"
              onChange={formhandler}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Button onClick={editArticleHandler} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
