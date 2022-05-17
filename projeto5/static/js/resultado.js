$(document).ready(function() {
    $('#result').DataTable( {
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
    } );
    var $seuCampoCpf = $("#ra");
    $seuCampoCpf.mask('000.000.000-00', {reverse: true});
} );

