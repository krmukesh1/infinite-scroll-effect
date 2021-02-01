const container=document.querySelector('.container');

let limit =4;
let pageCount=1;
let postCount=1;


const getPost=async()=>{
const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
// console.log(response)

const data = await response.json()
// console.log(data)

data.map((curEle,index)=>{
    const htmlData=
    `<div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${curEle.title}</h2>
        <p class="post-info">
         ${curEle.body}
        </p>
      </div>`

      container.insertAdjacentHTML('beforeend',htmlData)
})

}
getPost() //call function
const showData=()=>{
      setTimeout(()=>{
          pageCount++;
          getPost()
      },300)
}


window.addEventListener('scroll', ()=>{
   const {scrollHeight, scrollTop, clientHeight}= document.documentElement;
   if(scrollTop+clientHeight>= scrollHeight){
    console.log("I am at Bottom")  
    showData();
       
   }
})