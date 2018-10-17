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

$("#btnSearch").click(function(e) {
    e.preventDefault();
    var searchValue = $("#mySearch").val();
    if ( id_list.includes(searchValue) ) {
        $('#' + searchValue)[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

