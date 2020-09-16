//import postviews from '../pages/post.js'
import { router } from '../router/index.routes';


export const elementosPost = async () => { 

    const divElement = document.createElement('div'); //Crea elemnto html llamado division
    divElement.innerHTML = `<nav>   <h1>ECORed</h1>  <button type="button" class="outb"> log out </button> 
    </nav>
              <div class="TL" id="muro"> 
                  <form class ="form" id = "text-post">
                  <input class= "text" type="text" id = "input-text" placeholder="write here">
                
                  <button id="b-post" type="submit">comment</button>       
              </form>
              <div class='p'>
                      <div>

              <a href = '#/time-line' class="time-line"> </a>
              </div> 
              </div>`  
//funcion y evento de salir*/

    let out = divElement.querySelector('.outb');
    out.addEventListener('click', async () => {
        event.preventDefault()

       await firebase.auth().signOut().then(function(){router("#/box-login")}).catch(function(error)
       {});
      })
     return divElement
 };

const data = firebase.firestore();   
const savePost = (description, email) =>   //Guarda comentarios en datos de firebase 
  data.collection('posts').doc().set({
    description: description,
    email : email,
    likes : []
   })

   let editStatus = false;
   let id = "";
                        
 const likePost = async (currentUserId, postId, pushLike) => { 
      const coleccionpost = data.collection('posts').doc(postId);
      if (pushLike) {
        coleccionpost.update({
          likes: firebase.firestore.FieldValue.arrayRemove(currentUserId),
        });
      } else {
        coleccionpost.update({
          likes: firebase.firestore.FieldValue.arrayUnion(currentUserId),
        });
      }
    }
    

export const afterloading = async () =>{
  let onGetTask = (callback) => data.collection('posts').onSnapshot(callback) 
  let deletePost = id => data.collection('posts').doc(id).delete() 
  let getEdit = (id) => data.collection('posts').doc(id).get();
  let updateEdit = (id, updateEdit) => data.collection('posts').doc(id).update//var. actualiza el post editado
 (updateEdit);
  let PostsContainer = document.querySelector('.p');
  let commentBtn = document.querySelector('#b-post');
  let formulario = document.querySelector("#text-post");
  //console.log(formulario)
   
  
  onGetTask((querySnapshot)=>{
    PostsContainer.innerHTML=""
    querySnapshot.forEach(doc => {
      let post = doc.data() 
      post.id = doc.id
      PostsContainer.innerHTML += `<div class ="tarjeta"> <a href = "" class="user-name"> 
      ${post.email}  </a>
      <h1> ${post.description} </h1> 
        <div>  <button class="b-edit" data-id="${post.id}">Edit</button>
        <button class="b-delete" id="post-id" data-id="${post.id}" data-email="${post.email}">Delete</button>
        <button class="blike" id="like-id" data-id="${post.id}"  > &#129505 ${post.likes.length}</button>
          
        </button>

        </div>
        </div>`
      const btnsDelete = document.querySelectorAll('.b-delete')
   
      btnsDelete.forEach(btn =>{ 
        btn.addEventListener('click', async(e)=>{
          //console.log(e.target.dataset.id)
          let user = firebase.auth().currentUser;
          console.log(user.uid)
          
          let confirmar = window.confirm('¿Quieres eliminar tu post?') 
          console.log(confirmar)
          if (confirmar == true) {
           if( e.target.dataset.email === user.email ){ 
          await deletePost(e.target.dataset.id)}}
      })
      })

//funcion likes
      const btnsLike = document.querySelectorAll('.blike')
      let user = firebase.auth().currentUser;
      let pushLike = post.likes.some(likes => likes === user.uid);

      btnsLike.forEach(like => {
        like.addEventListener('click', async(m) => { 
          let idlikes = m.target.dataset.id
          let user = firebase.auth().currentUser;
          await likePost(user.uid, idlikes, pushLike);
          if (pushLike) {
            pushLike = false;
          } else {
            pushLike = true;
          }


        })
      })

    //funcion editar
  
    const btnedit = document.querySelectorAll('.b-edit')
    btnedit.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        //console.log(e.target.dataset.id)
        let doc = await getEdit(e.target.dataset.id);
        let task = doc.data ();
        editStatus = true ;
        id = doc.id;


        console.log(doc.data())
        console.log(formulario["input-text"])
        formulario['input-text'].value = task.description
        formulario['b-post'].innerText = 'update' 
      })
    })
    
  })
     
  commentBtn.addEventListener('click', async(event) => {
    event.preventDefault()
    let description = document.querySelector(".text").value
    let user = firebase.auth().currentUser;
    if (!editStatus){ 

    await savePost(description,user.email) 
  } else {
    await updateEdit(id, {
      description: description
    })

    editStatus = false;
    id='';
    formulario['b-post'].innerText = 'Publicar';

  }
    formulario.reset()
  })

})
}