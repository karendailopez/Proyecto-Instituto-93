
const CommentCard = ({ comment, post }) => {
  
    const darLikeComent = (idComentario) =>
        {
            try{
                console.log("COMENTARIOOOOO");
                console.log(comment);
                post(route('foro.votarComent', idComentario))
            }
            catch(error){
                console.log(error)
            }
        }

    return (
        <div className={`card 'ml-8'`} style={{
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '4px solid Lightblue',
            width: '100%',
            marginBottom: '0.5rem',
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
                <p>{comment.texto_html}</p>
                <div className="flex flex-col items-start">
                    <a href="#" className="btn_votar mt-2" onClick={() => darLikeComent(comment.id)}>
                        <i className="fa fa-thumbs-up megusta" aria-hidden="true"> {comment.votos ? comment.votos.length : 0}</i> Me gusta
                    </a>
                </div>
            </div>
        </div>
    );
       
};
const SeccionComentario = ({ comments, post }) => {
    if (comments.length === 0) {
        return <p>No hay comentarios disponibles.</p>;
    }

    
    return (
        <div>
            {/* Renderizar comentarios principales */}
            {comments.map((comment, index) => (
                <div key={comment.id || `comment-${index}`} style={{ marginTop: '20px' }}> 
                    <CommentCard 
                        post={post}
                        comment={comment} 
                    />

                    {comments.filter(reply => reply.foro_comentario_id === comment.id).map((reply, replyIndex) => (
                        <div key={reply.id || `reply-${replyIndex}`} style={{ marginLeft: '60px' }}> 
                            <CommentCard 
                                comment={reply} 
                                post={post}
                               
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
            