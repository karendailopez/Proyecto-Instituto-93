import '../../../css/foro.css';

const CommentCard = ({ comment }) => {
   
    return (
        <div className={`card 'ml-8'`} style={{
            margin:'5%',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '4px solid Lightblue',
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-start !important',
            flexShrink: '0 !important', 
            justifyContent: 'space-between',
            height: 'auto',         
        }}>
            {console.log(comment)}
            {/* Contenido del comentario */}
            <div style={{ marginBottom: '8px', flexGrow: 0 }}> 
                <h4 style={{ fontSize: '0.95rem', color: '#4B5563', textAlign: 'right' }}>
                    Comentario del usuario: <span style={{ color: '#2e75df' }}>{comment.usuario ? comment.usuario.name : 'Desconocido'}</span>
                </h4>
                <p>{comment.mensaje}</p>
              
            </div>
        </div>
    );
       
};
const SeccionComentario = ({ comments }) => {
    if (comments.length === 0) {
        return <p style={{marginLeft: '50px'}}>No hay comentarios disponibles.</p>;
    }

    
    return (
        <div>
            {/* Renderizar comentarios principales */}
            {comments.map((comment, index) => (
                <div key={comment.id || `comment-${index}`} style={{ marginTop: '20px' }}> 
                    <CommentCard 
                        comment={comment} 
                    />

                    {comments.filter(reply => reply.blog_comentario_id === comment.id).map((reply, replyIndex) => (
                        <div key={reply.id || `reply-${replyIndex}`} style={{ marginLeft: '60px' }}> 
                            <CommentCard 
                                comment={reply} 
                                
                               
                            />
                        </div>
                    ))}
                </div>
            ))}

            {/* Espacio adicional al final */}
            <div style={{ marginBottom: '80px' }}></div>
        </div>
    );
};
    
export default SeccionComentario;
            