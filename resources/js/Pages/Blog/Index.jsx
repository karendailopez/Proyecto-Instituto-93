import PublicLayout from "@/Layouts/PublicLayout";
import Blog from "@/Pages/Blog/disenio.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../../css/blog.css';


export default function Index(){
    return (
        <PublicLayout onlyNav={true} >
          <Blog />  
        </PublicLayout>
    );
}