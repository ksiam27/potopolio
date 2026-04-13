// 라이브 코딩: querySelector → map → join → innerHTML 순으로 작성합니다.
const postlist = document.querySelector('#post-list');
// const postItemsHtml = posts.map((post) => {
//     return `
        // <article class="post-itm">
        //     <div class="post-item-category">${post.category}</div>
        //     <h3 class="post-item-title">
        //          <a href="./post-html">${post.title}</a>
        //     </h3>
        //     <p class="post-item-summary">${post.summary}</p>
        //     <div class="post-item-info">
        //         <span>${post.author}</span>
        //         <span>${post.date}</span>
        //         <span>조회수 ${post.view}</span>
        //     </div>
        // </article>
//     `;
// }).join("");


let postItemsHtml = "";
for(let i = 0; i < posts.length; i++){ 
    const post = posts[i]; // post[i]가 아니라 posts[i]입니다.
    postItemsHtml += `
        <article class="post-item"> <div class="post-item-category">${post.category}</div>
            <h3 class="post-item-title">
                 <a href="./post.html">${post.title}</a> </h3>
            <p class="post-item-summary">${post.summary}</p>
            <div class="post-item-info">
                <span>${post.author}</span>
                <span>${post.date}</span>
                <span>조회수 ${post.view}</span>
            </div>
        </article>
    `;
}

postlist.innerHTML = postItemsHtml; /* innerHTML안쪽에 있는 (map으로 가져온 문자열을 채워놓음)html을 통째로 바꾸는거*/
