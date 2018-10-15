$(function(){
  let candidateName = ''


  $('#candidateId').keyup(function(){
    candidateName = $(this).val()
  })



  $('#getCandidateName').click(function(){
    let firstName = candidateName.split(" ")[0]
    let lastName = candidateName.split(" ")[1]
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

// $(function saveSearchTerms() {
//     if ( chrome.storage.sync.get([{"savedSearch"}]){
//       chrome.storage.sync.get
//     })
// })
