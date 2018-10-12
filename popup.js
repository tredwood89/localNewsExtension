$(function(){
   // do we need a separate category for first and last name?
  let candidateName = ''


  $('#candidateId').keyup(function(){
    candidateName = $(this).val()
  })

  $('#getCandidateName').click(function(){
    let firstName = candidateName.split(" ")[0]
    let lastName = candidateName.split(" ")[1]
    chrome.storage.sync.set({ 'candidateFirstName': firstName, 'candidateLastName': lastName }, function(){
      // alert('stored '+ candidateName)
      chrome.runtime.sendMessage({candidateSearchInit: "initSearch"})
    })
   })

  // $('#getCandidateName').click(function(){
  //   chrome.storage.sync.set({'candidateName': candidateName});
  //    // alert('stored '+ candidateName)
  //   chrome.runtime.sendMessage({candidateSearchInit: "initSearch"})
  //
  // })


})
