$(function(){
   // do we need a separate category for first and last name?
  let candidateName = ''


  $('#candidateId').keyup(function(){
    candidateName = $(this).val()
  })

  $('#getCandidateName').click(function(){
    // $('input[name=checkbox]').change(function(){
    //   if($(this).is(':checked')) {
    //     // Checkbox is checked..
    //   } else {
    //     // Checkbox is not checked..
    //   }
    // });

    // $('#timesTribune').change(function(){
    //   if(this.checked == true){
    //     $('#getCandidateName').submit();
    //   }
    // })
    let firstName = candidateName.split(" ")[0]
    let lastName = candidateName.split(" ")[1]
    chrome.storage.sync.set({ 'candidateFirstName': firstName, 'candidateLastName': lastName }, function(){
      // alert('stored '+ candidateName)
      let val = [];
      $(':checkbox:checked').each(function(i){
        val[i] = $(this).val();
        chrome.runtime.sendMessage({candidateSearchInit: `${val[i]}`})
      });

    })
   })



  // $('#getCandidateName').click(function(){
  //   chrome.storage.sync.set({'candidateName': candidateName});
  //    // alert('stored '+ candidateName)
  //   chrome.runtime.sendMessage({candidateSearchInit: "initSearch"})
  //
  // })


})
