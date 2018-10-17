var id_list = [];

$(document).ready(function () {
    if ($('#mySearch')) {
        $("h4").each(function () {
            if (this.id !== "") {
                id_list.push(this.id);
            }
        });
        $("h5").each(function () {
            if (this.id !== "") {
                id_list.push(this.id);
            }
        });
        $('#mySearch').autocomplete({
            source: id_list
        });

    }
});
$(function() {
    $("#btnSearch").click(function (e) {
        e.preventDefault();
        var searchValue = $("#mySearch").val();
        if (id_list.includes(searchValue)) {
            $('#' + searchValue)[0].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
    
    $('.card-contact').tooltip();
    
    $('.card-contact').click(function () {
        console.log(this);
        console.log($('#launch_' + this.dataset['modalid']));
        var modalid = this.dataset['modalid'];
        $('#' + modalid).modal();
        $('#launch_' + this.dataset['modalid'])
    });
});
