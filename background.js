// chrome.webNavigation.onCompleted.addListener(function() {
//     alert("This is my favorite website!");
// }, {url: [{urlMatches : 'https://www.google.com/'}]
//
//   }
// )

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.candidateSearchInit === "initSearch") {
      // alert("submit clicked")
      // candidateId is not recognized on this file
      // chrome.tabs.create({url: 'https://www.queryly.com/timestribune_search.htm?q=' + candidateId});
      chrome.tabs.create({url: 'https://www.queryly.com/timestribune_search.htm?q=matt%20cartwright'});
    }

})

// daily local: https://www.dailylocal.com/search/?sd=desc&l=25&sort=relevance&f=html&t=article%2Cvideo%2Cyoutube%2Ccollection&app=editorial&nsa=eedition&q=chrissy+houlahan
// citizen voice: https://www.citizensvoice.com/search-7.810076?q=matt+cartwright&selecturl=
// citizen voice: https://www.citizensvoice.com/search-7.810076?q=john+chrin&selecturl=
// times leader: https://www.timesleader.com/#/search;query=matt%20cartwright
// times leader: https://www.timesleader.com/#/search;query=john%20chrin
// need a login account to access the list of articles for standard speaker
// standard speaker: https://www.standardspeaker.com/search-7.506128?q=matt+cartwright&selecturl=
// standard speaker: https://www.standardspeaker.com/search-7.506128?q=john+chrin&selecturl=
// Wayne Independent: http://www.wayneindependent.com/search?text=matt%20cartwright
// Wayne Independent: http://www.wayneindependent.com/search?text=john%20chrin
// Pocono Record: http://www.poconorecord.com/search?text=matt%20cartwright
// Pocono Record: http://www.poconorecord.com/search?text=john%20chrin
