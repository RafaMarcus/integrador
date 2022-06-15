$(document).ready(function () {

    var $seuCampoCpf = $("#ra");
    $seuCampoCpf.mask('000.000.000-00', {reverse: true});
    // Setup - add a text input to each footer cell
    $('#example thead tr')
        .clone(true)
        .addClass('filters')
        .appendTo('#example thead');
 
    var table = $('#example').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        },

        "columns": [
            { "width": "1%" },
            null,
            null,
            null,
            null,
            null,
            null
          ],

        orderCellsTop: true,
        fixedHeader: true,
         initComplete: function () {
            var api = this.api();
 
            // For each column
            api
                .columns()
                .eq(0)
                .each(function (colIdx) {
                    // Set the header cell to contain the input element
                    var cell = $('.filters th').eq(
                        $(api.column(colIdx).header()).index()
                    );
                    var title = $(cell).text();
                    if(title == "Nome"){
                        $(cell).html('<input type="text" style="width:200px" placeholder="' + title + '" />');
                    }else if (title == "Perfil Dominante"){
                        $(cell).html('<input type="text" style="width:150px" placeholder="' + title + '" />');
                    }else if (title == "Empregado?"){
                        $(cell).html('<input type="text" style="width:120px" placeholder="' + title + '" />');    
                    }                   
 
                    // On every keypress in this input
                    $(
                        'input',
                        $('.filters th').eq($(api.column(colIdx).header()).index())
                    )
                        .off('keyup change')
                        .on('change', function (e) {
                            // Get the search value
                            $(this).attr('title', $(this).val());
                            var regexr = '({search})'; //$(this).parents('th').find('select').val();
 
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            api
                                .column(colIdx)
                                .search(
                                    this.value != ''
                                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                                        : '',
                                    this.value != '',
                                    this.value == ''
                                )
                                .draw();
                        })
                        .on('keyup', function (e) {
                            e.stopPropagation();
 
                            $(this).trigger('change');
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                }); 
        },
    });

   
});
