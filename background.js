// chrome.webNavigation.onCompleted.addListener(function() {
//     alert("This is my favorite website!");
// }, {url: [{urlMatches : 'https://www.google.com/'}]
//
//   }
// )

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.candidateSearchInit === "initSearch") {
      // alert("submit clicked")
      chrome.tabs.create({url: 'https://www.queryly.com/timestribune_search.htm?q=matt%20cartwright'});
    }

})
