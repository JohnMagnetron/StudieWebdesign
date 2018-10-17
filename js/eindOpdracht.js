$(document).ready(function () {
    //if ($('#mySearch')) {
        var id_list = $("h4").map(function () {
                if (this.id !== "") {
                    return this.id;
                }
            }).get();
        
        $("h5").each(function() {
            if ( this.id !== "" ) {
                id_list.push(this.id);
            }
        });

        console.log(id_list);
        
   // }
});