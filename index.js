var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var mes_date = $('textarea[name="mes"]').val();
        var date = $('input[name="date"]').val();
        var tool = $('input[name="tool"]').val();
        
        var msg = `${key}\n施策内容：${mes_date}\n返信期限：${date}\n使用ツール：${tool}`;
        sendText(msg);

        return false;
    });
});
