// chrome.webNavigation.onCompleted.addListener(function() {
//     alert("This is my favorite website!");
// }, {url: [{urlMatches : 'https://www.google.com/'}]
//
//   }
// )

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.openNewWindow === "initSearch") {
      //open new window
      console.log('open new window - to be continued');
    }
  })

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

  if (request.candidateSearchInit){

    chrome.storage.sync.get(['candidateFirstName', 'candidateLastName'], function (data) {
      let firstName = data.candidateFirstName
      let lastName = data.candidateLastName
      let urlIdentifer = request.candidateSearchInit

      let timesTribuneUrl = `https://www.queryly.com/timestribune_search.htm?q=${firstName}%20${lastName}`
      let dailyLocalUrl = `https://www.dailylocal.com/search/?sd=desc&l=25&sort=relevance&f=html&t=article%2Cvideo%2Cyoutube%2Ccollection&app=editorial&nsa=eedition&q=${firstName}+${lastName}`
      let chesterCountyPressUrl = `http://www.chestercounty.com/search?utf8=%E2%9C%93&q=${firstName}+${lastName}`
      let citizensVoiceUrl = `https://www.citizensvoice.com/search-7.810076?q=${firstName}+${lastName}&selecturl=`
      let timesLeaderUrl = `https://www.timesleader.com/#/search;query=${firstName}%20${lastName}`
      let wayneIndependentUrl = `http://www.wayneindependent.com/search?text=${firstName}%20${lastName}`
      let poconoRecordUrl = `http://www.poconorecord.com/search?text=${firstName}%20${lastName}`
      let pikeCountyCourierUrl = `http://www.pikecountycourier.com/apps/pbcs.dll/search?crit=${firstName}+${lastName}&SearchCategory=%25&DateRange=&noblankcheck=0&BuildNavigators=1`

      switch( urlIdentifer ) {

      case "timesTribune":
        chrome.tabs.create({url: timesTribuneUrl });
        break
      case "dailyLocal":
        chrome.tabs.create({url: dailyLocalUrl });
        break;
      case "chesterCountyPress":
        chrome.tabs.create({url: chesterCountyPressUrl });
        break;
      case "citizensVoice":
        chrome.tabs.create({url: citizensVoiceUrl });
        break;
      case "timesLeader":
        chrome.tabs.create({url: timesLeaderUrl });
        break;
      case "wayneIndependent":
        chrome.tabs.create({url: wayneIndependentUrl });
        break;
      case "poconoRecord":
        chrome.tabs.create({url: poconoRecordUrl });
        break;
      case "pikeCountyCourier":
        chrome.tabs.create({url: pikeCountyCourierUrl });
        break

      default:
          console.log("done");;
    }

  })
}

  })



//   if(request.openNewWindow === "initSearch") {
//     //call works. open new window later
//     chrome.storage.sync.get(['candidateFirstName', 'candidateLastName'], function (data) {
//       let firstName = data.candidateFirstName
//       let lastName = data.candidateLastName
//
//
//       let urlIdentifer = request.candidateSearchInit
//         console.log("secondRequest",request.candidateSearchInit);
//       let timesTribuneUrl = `https://www.queryly.com/timestribune_search.htm?q=${firstName}%20${lastName}`
//       let dailyLocalUrl = `https://www.dailylocal.com/search/?sd=desc&l=25&sort=relevance&f=html&t=article%2Cvideo%2Cyoutube%2Ccollection&app=editorial&nsa=eedition&q=${firstName}+${lastName}`
//       let chesterCountyPressUrl = `http://www.chestercounty.com/search?utf8=%E2%9C%93&q=${firstName}+${lastName}`
//       let citizensVoiceUrl = `https://www.citizensvoice.com/search-7.810076?q=${firstName}+${lastName}&selecturl=`
//       let timesLeaderUrl = `https://www.timesleader.com/#/search;query=${firstName}%20${lastName}`
//       let wayneIndependentUrl = `http://www.wayneindependent.com/search?text=${firstName}%20${lastName}`
//       let poconoRecordUrl = `http://www.poconorecord.com/search?text=${firstName}%20${lastName}`
//       let pikeCountyCourierUrl = `http://www.pikecountycourier.com/apps/pbcs.dll/search?crit=${firstName}+${lastName}&SearchCategory=%25&DateRange=&noblankcheck=0&BuildNavigators=1`
//
//     switch( urlIdentifer ) {
//
//     case "timesTribune":
//       chrome.tabs.create({url: timesTribuneUrl });
//       break
//     case "dailyLocal":
//       chrome.tabs.create({url: dailyLocalUrl });
//       break;
//     case "chesterCountyPress":
//       chrome.tabs.create({url: chesterCountyPressUrl });
//       break;
//     case "citizensVoice":
//       chrome.tabs.create({url: citizensVoiceUrl });
//       break;
//     case "timesLeader":
//       chrome.tabs.create({url: timesLeaderUrl });
//       break;
//     case "wayneIndependent":
//       chrome.tabs.create({url: wayneIndependentUrl });
//       break;
//     case "poconoRecord":
//       chrome.tabs.create({url: poconoRecordUrl });
//       break;
//     case "pikeCountyCourier":
//       chrome.tabs.create({url: pikeCountyCourierUrl });
//       break
//
//     default:
//         console.log("done");;
// }
//
//


// need a login account to access the list of articles for standard speaker
//     // chrome.tabs.create({url: `https://www.standardspeaker.com/search-7.506128?q=${firstName}+${lastName}&selecturl=`})
