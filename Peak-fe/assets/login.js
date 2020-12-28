$(".loginBtn").on("click" , function(){
    $(".loginModal").css('visibility' , 'visible')
});

$(".closeModalBtn").on("click" , function(){
    $(".loginModal").css('visibility' , 'hidden')
})

$(() => {
    localStorage.clear()
})

$(function() {
    $(".modalLogin").on("click" , async function() {
        var userName = $(".userNameInput").val();
        var password = $(".passwordInput").val();
        if(userName === ""){
            alert("Please enter Username")
        }else if(userName.length < 8 || userName.length > 20){
            alert("Please meet Username requirements")
        }else if(password === ""){
            alert("Please enter Password")
        }else if(password.length < 8 || password.length > 20){
            alert("Please meet Password requirements")
        }else{
            console.log(userName , password)
            await axios.get(`http://localhost:3000/account-info-login/${userName}/${password}` , {
                headers : {
                    'Access-Control-Allow-Origin' : '*'
                }
            })
            .then(async function(res){
                var userResults = await res.data.results
                var sessionToken = await res.data.sessionToken
                await userResults.map((index) => {
                    console.log(index)
                    localStorage.setItem("firstName" , index.first_name )
                    localStorage.setItem("lastName" , index.last_name )
                    localStorage.setItem("userName" , index.username )
                    localStorage.setItem("email" , index.email )
                    localStorage.setItem("age" , index.age )
                    localStorage.setItem("city" , index.city )
                    localStorage.setItem("zipcode" , index.zipcode )
                    localStorage.setItem("jobTitle" , index.job_title )
                    localStorage.setItem("registerDate" , index.register_date )
                })
                localStorage.setItem("sessionToken" , sessionToken)
            })
            .then(window.location.replace('file:///Users/logan/Desktop/Peak/Peak-fe/Screens/home.html'))
        }
    })
})