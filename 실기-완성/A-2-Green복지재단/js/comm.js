// 준비 이벤트
// (html코드를 다 읽고 나서 실행해줘)
// $(document).ready(function(){})
$(function () {
    //modal
    // lst-bbs li:first-child 를 클릭했을 때
    $('.lst-bbs li:first-child').click(function () {
        $('#modal').css('display', 'flex');
    });

    $('.modal-box .btn-close').on('click focus', function () {
        $('#modal').hide();
    });
});
