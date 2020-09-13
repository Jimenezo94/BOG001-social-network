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
    //variable evento boton comentar
    
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
    

const likePost = async (currentUserId, postId, pushLike) => {
      const postRef = data.collection('post').doc(postId);
      if (pushLike) {
        postRef.update({
          likes: firebase.firestore.FieldValue.arrayRemove(currentUserId),
        });
      } else {
        postRef.update({
          likes: firebase.firestore.FieldValue.arrayUnion(currentUserId),
        });
      }
    }
    

export const afterloading = async () =>{
  let onGetTask = (callback) => data.collection('posts').onSnapshot(callback) 
  let deletePost = id => data.collection('posts').doc(id).delete() 
  let btnlike = document.querySelector('#like-id')
  //console.log("btnlike")

  let PostsContainer = document.querySelector('.p');
  let commentBtn = document.querySelector('#b-post');
  let formulario = document.querySelector("#text-post")
  console.log(formulario)
   
  
  onGetTask((querySnapshot)=>{
    //console.log('intentando cambios');
    PostsContainer.innerHTML=""
    querySnapshot.forEach(doc => {
      let contador = 0
      let post = doc.data() 
      post.id = doc.id
      PostsContainer.innerHTML += `<div class ="tarjeta"> <a href = "" class="user-name"> 
      ${post.email}  </a>
      <h1> ${post.description} </h1> 
        <div>  <button class="b-edith">Edith</button>
        <button class="b-delete" id="post-id" data-id="${post.id}" data-email="${post.email}">Delete</button>
        <button class="blike" id="like-id" data-id="${post.id}"  > &#129505
          <h2 id ="numero"> "${contador}" </h2>
        </button>

        </div>
        </div>`
      const btnsDelete = document.querySelectorAll('.b-delete')
      btnsDelete.forEach(btn =>{ 
        btn.addEventListener('click', async(e)=>{
          //console.log(e.target.dataset.id)
          let user = firebase.auth().currentUser;
          console.log(user.uid)
         
          if( e.target.dataset.email === user.email ){ 
          await deletePost(e.target.dataset.id)}

        })
      })

      const btnlike = document.querySelectorAll('.blike')
      
      //console.log(contador)
      btnlike.forEach(like => {
        like.addEventListener('click', async(m) => { 
          console.log(m.target)
          /*contador = contador + 1 ; 
          document.getElementById("numero").innerHTML = contador
          console.log(contador)*/

        })
      })
  })
     
  commentBtn.addEventListener('click', async(event) => {
    event.preventDefault()
      //console.log('click boton')
    let description = document.querySelector(".text").value
    //console.log(description)
    let user = firebase.auth().currentUser;
    //console.log(user.email, user.uid, user.emailVerified);
    await savePost(description,user.email) 
    formulario.reset()
  })
})
    }
  
  /*


 */