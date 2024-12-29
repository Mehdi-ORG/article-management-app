import "./addArticle.css";
import MyNavbar from "../../components/Navbar/myNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle() {
  const [formData, setFormData] = useState({});

  const resetFormData= ()=>{
    setFormData({
      title: '',
      desc: '',
      image: '',
      writter: '',
      category: '',
      readingtime: '',

    })
  }

  const addArticleHandler = () => {
    axios
      .post("http://localhost:5000/article", formData)
      .then((response) => {
        if(response.status=== 201){
          Swal.fire({
            title: 'مقاله با موفقیت ساخته شد',
            timer: '1500',
            timerProgressBar: true,
            showConfirmButton: false
          })
        }
      })
      .catch(error =>{
       Swal.fire({
        title: 'مقاله ساخته نشد',
        timer: '1500',
        icon: 'error',
        timerProgressBar: true,
        showConfirmButton: false
       })
      })
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
              value={formData.title}
              name="title"
              onChange={formhandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={formData.desc}
              name="desc"
              onChange={formhandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formData.writter}
              name="writter"
              onChange={formhandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formData.category}
              name="category"
              onChange={formhandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formData.image}
              name="image"
              onChange={formhandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={formData.readingtime}
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
