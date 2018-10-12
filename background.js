// chrome.webNavigation.onCompleted.addListener(function() {
//     alert("This is my favorite website!");
// }, {url: [{urlMatches : 'https://www.google.com/'}]
//
//   }
// )

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    alert(request.candidateSearchInit);
    // if(request.candidateSearchInit === "initSearch") {
    //   chrome.storage.sync.get(['candidateFirstName', 'candidateLastName'], function (data) {
    //     let firstName = data.candidateFirstName
    //     let lastName = data.candidateLastName
    //
    //     // if user selects times tribune
    //     chrome.tabs.create({url: `https://www.queryly.com/timestribune_search.htm?q=${firstName}%20${lastName}`});
    //     // if user selects daily Local
    //     // chrome.tabs.create({url: `https://www.dailylocal.com/search/?sd=desc&l=25&sort=relevance&f=html&t=article%2Cvideo%2Cyoutube%2Ccollection&app=editorial&nsa=eedition&q=${firstName}+${lastName}`});
    //     // if user selects chester county press
    //     // chrome.tabs.create({url: `http://www.chestercounty.com/search?utf8=%E2%9C%93&q=${firstName}+${lastName}`})
    //     // if user selects citizens voice
    //     // chrome.tabs.create({url: `https://www.citizensvoice.com/search-7.810076?q=${firstName}+${lastName}&selecturl=`})
    //     // if user selects times leader
    //     // chrome.tabs.create({url: `https://www.timesleader.com/#/search;query=${firstName}%20${lastName}`})
    //     // if user selects standard speaker
    //     // need a login account to access the list of articles for standard speaker
    //     // chrome.tabs.create({url: `https://www.standardspeaker.com/search-7.506128?q=${firstName}+${lastName}&selecturl=`})
    //     // if user selects Wayne Independent
    //     // chrome.tabs.create({url: `http://www.wayneindependent.com/search?text=${firstName}%20${lastName}`})
    //     // if the user selects Pocono Record
    //     // chrome.tabs.create({url: `http://www.poconorecord.com/search?text=${firstName}%20${lastName}`})
    //     // if the user selects Pike Courier County
    //     // chrome.tabs.create({url: `http://www.pikecountycourier.com/apps/pbcs.dll/search?crit=${firstName}+${lastName}&SearchCategory=%25&DateRange=&noblankcheck=0&BuildNavigators=1`})
    //   })
    // }
})
