var allPosts = null
$(async () => {
   await axios.get(`http://localhost:3000/user-posts` , {
        headers : {
            'Access-Control-Allow-Origin' : '*'
        }
    })
    .then(async function(res) {
        console.log(res.data , "response for axios")
        allPosts = res.data
        // console.log(allPosts)
    })
})

const idk = async function() {
    if(allPosts === null) {
        setTimeout(() => {
            idk()
        } , 3 * 90)
    }else{
    await allPosts.map((index , myKey) => {
        console.log(index)
        myKey = index.id;
        var getMainCont = document.getElementById('mainCont');
        var createBlogContainer = document.createElement('button');
        createBlogContainer.setAttribute('class' , 'blogContainer');
        var createblogImg = document.createElement('div');
        createblogImg.setAttribute('class' , 'imgCont');
        createblogImg.style.backgroundImage = `url(${index.blog_img})`
        var createBlogTitle = document.createElement('div');
        createBlogTitle.setAttribute('class' , 'blogTitle');
        createBlogTitle.innerHTML = index.post_title;
        var getBlogInfoCont = document.createElement('div');
        getBlogInfoCont.setAttribute('class' , 'blogInfoCont');
        var createBlogSnippet = document.createElement('div');
        createBlogSnippet.setAttribute('class' , 'blogSnippet');
        var createBlogBodyText = document.createElement('p');
        createBlogBodyText.setAttribute('class' , 'blogBodyText');
        createBlogBodyText.innerHTML = index.post_body;
        var getOtherInfoDiv = document.createElement('div');
        getOtherInfoDiv.setAttribute('class' , 'otherInfo');
        var getAuthorCont = document.createElement('div');
        getAuthorCont.setAttribute('class' , 'authorCont');
        var createUserImg = document.createElement('img');
        createUserImg.setAttribute('class' , 'authorImg');
        var getAuthorUsernameDiv = document.createElement('div');
        getAuthorUsernameDiv.setAttribute('class' , 'authorUsername');
        var getUsernameText = document.createElement('div');
        getUsernameText.setAttribute('class' , 'usernameText');
        getUsernameText.innerHTML = index.id;
        var createLikeCont = document.createElement('div');
        createLikeCont.setAttribute('class' , 'likeCont');
        var createLikeCountText = document.createElement('div');
        createLikeCountText.setAttribute('class' , 'likeCountText');
        createLikeCountText.innerHTML = index.blog_likes;
        var createLikeHeartImg = document.createElement('button');
        createLikeHeartImg.setAttribute('class' , 'heartBtn');
        createLikeHeartImg.innerHTML =`<i class="far fa-heart">`


        getMainCont.append(createBlogContainer);
        createBlogContainer.appendChild(createblogImg);
        createblogImg.appendChild(createBlogTitle);
        createblogImg.appendChild(getBlogInfoCont);
        getBlogInfoCont.prepend(createBlogSnippet);
        createBlogSnippet.append(createBlogBodyText);
        createBlogContainer.append(getOtherInfoDiv);
        getOtherInfoDiv.append(getAuthorCont);
        getAuthorCont.appendChild(createUserImg);
        getAuthorCont.appendChild(getAuthorUsernameDiv);
        getAuthorUsernameDiv.append(getUsernameText);
        getOtherInfoDiv.append(createLikeCont);
        createLikeCont.appendChild(createLikeCountText);
        createLikeCont.appendChild(createLikeHeartImg);        
    })
}
}

$(function(){
    setTimeout(() => {
        idk()
    } , 10 * 60)


    $(".navBtnHome").on("click" , function(){
        window.location.replace("file:///Users/logan/Desktop/Peak/Peak-fe/Screens/home.html")
    })
    $(".navBtnAccount").on("click" , function(){
        window.location.replace("file:///Users/logan/Desktop/Peak/Peak-fe/Screens/myaccount.html")
    })
    $(".navBtnLogout").on("click" , function(){
        window.location.replace("file:///Users/logan/Desktop/Peak/Peak-fe/Screens/login.html")
    })
})