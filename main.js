$('input').keypress(function(event) {
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append('<li>' + todoText + '<span><i class="fa-solid fa-trash"></i></span>')
    }
});