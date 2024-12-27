import "./addArticle.css";
import MyNavbar from "../../components/Navbar/myNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle() {
  const [formData, setFormData] = useState({});

  const addArticleHandler = () => {
    axios.post("http://localhost:5000/article", formData)
  .then(response => {
    console.log("Response Status:", response.status);
    console.log("Response Data:", response.data);
  })
  .catch(error => console.error("Error:", error));
  };

  const formhandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MyNavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              name="title"
              onChange={formhandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              name="desc"
              onChange={formhandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              name="writter"
              onChange={formhandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              name="category"
              onChange={formhandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              name="image"
              onChange={formhandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              name="readingtime"
              onChange={formhandler}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Button onClick={addArticleHandler} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
export default AddArticle;
