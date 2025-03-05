import PublicLayout from "@/Layouts/PublicLayout";
import Blog from "@/Pages/Blog/disenio.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../../css/blog.css';


export default function Index({grupos, ultimoArticulo, otrosArticulos, articulos}){
    return (
      <div>
  <PublicLayout onlyNav={true} />
          
          <Blog  grupos={grupos} ultimoArticulo = {ultimoArticulo} otrosArticulos = {otrosArticulos} articulos = {articulos}  />  
        
         {/* Footer */}
          <footer className="bg-dark text-white text-center py-4 mt-5">
          <p className="mb-0">
            &copy; 2024 Blog Intituto Superior 93. Todos los derechos reservados.
          </p>
          <p className="small">
            Diseñado con <span style={{ color: "red" }}>❤</span>
          </p>
        </footer>
      </div>
      
    );
}