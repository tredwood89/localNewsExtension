chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.openNewWindow === "initSearch") {
      console.log('open new window - to be continued');
    }
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.candidateSearchInit) {
    chrome.storage.sync.get(['candidateFirstName', 'candidateLastName'], function (data) {
      let firstName = data.candidateFirstName
      let lastName = data.candidateLastName
      let urlIdentifer = request.candidateSearchInit

      let linksObject = {
        timesTribune: `https://www.queryly.com/timestribune_search.htm?q=${firstName}%20${lastName}`,
        dailyLocal: `https://www.dailylocal.com/search/?sd=desc&l=25&sort=relevance&f=html&t=article%2Cvideo%2Cyoutube%2Ccollection&app=editorial&nsa=eedition&q=${firstName}+${lastName}`,
        citizensVoice: `https://www.citizensvoice.com/search-7.810076?q=${firstName}+${lastName}&selecturl=`,
        // timesLeader: `https://www.timesleader.com/#/search;query=${firstName}%20${lastName}`,
        standardSpeaker: `https://www.standardspeaker.com/search-7.506128?q=${firstName}+${lastName}&selecturl=`,
        wayneIndependent: `http://www.wayneindependent.com/search?text=${firstName}%20${lastName}`,
        poconoRecord: `http://www.poconorecord.com/search?text=${firstName}%20${lastName}`,
        pikeCountyCourier: `http://www.pikecountycourier.com/apps/pbcs.dll/search?crit=${firstName}+${lastName}&SearchCategory=%25&DateRange=&noblankcheck=0&BuildNavigators=1`,
        chesterCountyPress : `http://www.chestercounty.com/search?utf8=%E2%9C%93&q=${firstName}+${lastName}`,
        latestTwitterAlerts: `https://twitter.com/search?f=tweets&vertical=default&q=${firstName}%20${lastName}&lang=en`,
        latestFacebookAlerts: `https://www.facebook.com/search/top/?q=${firstName}%20${lastName}`

      }

      function getUrl(identifier) {
        chrome.tabs.create({url:linksObject[identifier]})
      }

      getUrl(urlIdentifer);

   })
 }

})
