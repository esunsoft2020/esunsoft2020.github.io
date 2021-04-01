// function selectAll(selectAll)  {
//     var cb1=document.getElementById('chk1_box');
//     var cb2=document.getElementById('chk2_box');

//     ch1.
//   }

//   function checkAll(){
//     if( $("#chkall_box").is(':checked') ){
//       $("input[name=checkbox]").prop("checked", true);
//     }else{
//       $("input[name=checkbox]").prop("checked", false);
//     }
// }
    var checkbox2=document.getElementById('chk2_box');
function checkAll(selectAll)  {
    const checkboxes = document.getElementsByName('chk');
    checkboxes.forEach((checkbox) => {checkbox.checked = selectAll.checked;})
  }
function success(){
    const checkboxes = document.getElementsByName('chk');
<<<<<<< HEAD
    // alert ('test');
=======
    alert (test);
>>>>>>> b3a2d8c0e353674966d625c2e11d2d8e8897b4cc
    // if (){
    //     alert('true');
    //     }else{
    //       alert('false');
    //     } 
<<<<<<< HEAD

    open("./Sign_Up2.html");
=======
>>>>>>> b3a2d8c0e353674966d625c2e11d2d8e8897b4cc
}