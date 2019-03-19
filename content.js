console.log("Ext");



// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log(message.txt);

//     let like = document.getElementsByClassName('coreSpriteHeartOpen');
//     console.log(like);
//     for (elt of like) {
//         // elt.style['width'] = '100px';
//         elt.setAttribute('id', 'cuore');
//         let app = document.getElementById('cuore');
//         app.click();
//         app.parentNode.removeChild(app);
//     }
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

//     let posts = document.getElementsByClassName('Nnq7C weEfm');
//     // for (post of posts) {
//     // console.log(posts[0]);

//     posts[0].setAttribute('id', 'toVisit');
//     let toVisit = document.getElementById('toVisit').getElementsByTagName('a')
//     // console.log(toVisit[0]);
//     toVisit[0].click()
//     // setTimeout(() => {
//     //     // console.log("Waiting");
//     //     let like = document.getElementsByClassName('coreSpriteHeartOpen');
//     //     console.log(like);

//     //     like[0].setAttribute('id', 'cuore');
//     //     let app = document.getElementById('cuore');
//     //     app.click();

//     //     let next = document.getElementsByClassName('coreSpriteRightPaginationArrow');
//     //     next[0].setAttribute('id', 'next');
//     //     let nextButton = document.getElementById('exit');
//     //     nextButton.click();
//     // }, 1000);
//     likeFollowAndNext(1000);

//     // let app1 = toVisit[0], app2 = toVisit[1], app3 = toVisit[2];
//     // console.log(app1);
//     // console.log(app2);
//     // console.log(app3);

//     // app1.click();
//     // }

// })



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let posts = document.getElementsByClassName('Nnq7C weEfm');
    posts[0].setAttribute('id', 'toVisit');
    let toVisit = document.getElementById('toVisit').getElementsByTagName('a')
    toVisit[0].click()
    likeFollowAndNext(1000);
})


function likeFollowAndNext(times) {
    if (times == 0) {
        return 0;
    }
    setTimeout(() => {
        like()
        follow()
        setTimeout(() => {
            nextPost()
            return likeFollowAndNext(times - 1);
        }, 200);
    }, 2000);
}


function like() {
    let like = document.getElementsByClassName('coreSpriteHeartOpen');
    like[0].setAttribute('id', 'cuore');
    let app = document.getElementById('cuore');
    app.click();
}

function follow() {

    let follow = document.getElementsByClassName('yWX7d');
    follow.item(0).setAttribute('id', 'toFollow');
    let followButton = document.getElementById('toFollow');
    followButton.click();
}

function nextPost() {
    let next = document.getElementsByClassName('coreSpriteRightPaginationArrow');
    next[0].setAttribute('id', 'next');
    let nextButton = document.getElementById('next');
    nextButton.click();
}