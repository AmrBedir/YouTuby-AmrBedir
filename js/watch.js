$(document).ready(function () {
    /*عند الضغط على الزر استدعي الدالة لتعمل وتظهر وتخفي النص*/
    $("#myBtn").on("click", function(){
        read();
    });
    /*إظهار وإخفاء الردود*/
    $(".reply").click(function() {
        $(this).parents("div.row").next("div.card").toggle();
    });
});

/*الدالة التي نستخدمها لإظهار وإخفاء العناصر*/
function read() {
    var dots = document.getElementById("dots");/*أحضر النقاط الثلاث*/
    var moreText = document.getElementById("more");/*أحضر النص الذي نريد إظهاره وإخفائه*/
    var btnText = document.getElementById("myBtn");/*أحضر الزر الذي سنضغط عليه*/
  
    if (dots.style.display === "none") {/*إذا كانوا النقاط الثلاث مخفيين يعني النص ظاهر وضغطت عالزر*/
      dots.style.display = "inline";/*أظهر النقط */
      btnText.innerHTML = "عرض المزيد";
      moreText.style.display = "none";/*أخفي النص */
    } else {/*إذا كانت النقط الثلاث ظاهرين أي النص مخفي وضغطت على الزر */
      dots.style.display = "none";/*أخفي النقط */
      btnText.innerHTML = "عرض عناصر أقل";
      moreText.style.display = "inline";/*أظهر النص المخفي */
    }
}
