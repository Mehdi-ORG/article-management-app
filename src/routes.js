import About from "./pages/About/About";
import AddArticle from "./pages/addArticle/addArticle";
import Article from "./pages/Article/Article";
import EditArticle from "./pages/editArticle/editArticle";
import Home from "./pages/Home/Home";




const routes = [
  {path : '/' , element: <Home/>},
  {path : '/about' , element: <About/>},
  {path : '/add-article' , element: <AddArticle/>},
  {path : '/article/:articleId' , element : <Article/>},
  {path : '/edit-article/:editArticleId' , element : <EditArticle/>}
]
export default routes

