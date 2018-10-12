$(function(){
   // do we need a separate category for first and last name?
  let candidateName = ''


  $('#candidateId').keyup(function(){
    candidateName = $(this).val()
  })

  $('#getCandidateName').click(function(){
    chrome.storage.sync.set({'candidateName': candidateName});
     // alert('stored '+ candidateName)
    chrome.runtime.sendMessage({candidateSearchInit: "initSearch"})

  })


})
