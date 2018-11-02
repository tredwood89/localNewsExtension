$(function(){
  let candidateName = ''


  $('#candidateId').keyup(function(){
    candidateName = $(this).val()
  })



  $('#getCandidateName').click(function(){
    let firstName = candidateName.split(" ")[0]
    let lastName = candidateName.split(" ")[1]

    if (!lastName) {
      lastName = " "
    }

    chrome.storage.sync.get(["savedSearch"], function(data){
      let searchArr = data["savedSearch"] ? data["savedSearch"] : []

      searchArr.push(candidateName)
      chrome.storage.sync.set({"savedSearch":searchArr},
    console.log(searchArr))
    })

    chrome.runtime.sendMessage({"openNewWindow" : "initSearch"})
    chrome.storage.sync.set({ 'candidateFirstName': firstName, 'candidateLastName': lastName }, function(){
      let val = [];
      $(':checkbox:checked').each(function(i){
        val[i] = $(this).val();
        chrome.runtime.sendMessage({candidateSearchInit: `${val[i]}`})
      });

    })
   })



})
