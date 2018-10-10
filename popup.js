$(function(){

  let candidateName = ''


  $('#candidateId').keyup(function(){
    candidateName = $(this).val()
  })

 $('#getCandidateName').click(function(){
   chrome.storage.sync.set({'candidateName': candidateName}), function(){
     alert('stored'+ candidateName)
   }


 })

})
