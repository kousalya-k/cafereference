$("#submit").on("click", () => {
    console.log("hii")
 var checks = () => {
        var opt = [];
        $.each($("input[name='chk']:checked"), function () {
            opt.push($(this).val());
        });
        return opt;
        console.log(opt)
    }})