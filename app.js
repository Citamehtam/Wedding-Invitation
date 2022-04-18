document.addEventListener("DOMContentLoaded", function (event) {

    function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function (event) { if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else { if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) { inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode > 64 && event.keyCode < 91) { inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
    } OTPInput();
    
});

$(document).ready(function(){
    $("#p1-btn").click(function (){
        $("#p1").hide();
        $("#p2").show(500);
    });

    $("#p2-btn").click(function () {
        var passwd = [0, 0, 0, 0]; //密碼在這裡
        var error = 0;
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) { 
            if (inputs[i].value!=passwd[i]){
                error = error;
            }
        }

        if (error == 0) {
            $("#p1").hide();
            $("#p2").hide();
            $("#p3").show(500);
            $(".mb-auto").hide();    
        }else{
            alert("密碼錯誤")
        }
        
    });

    var myCarousel = document.querySelector('#carousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true
    })

    $("#remind").change(function(){
        console.log($("#remind option:selected").text())
        if($("#remind option:selected").val()== "no" ){
            $(".reminder").hide()
        }else{
            $(".reminder").show()

        }
    })

    $("#submit").click(function(e){
        e.preventDefault();
        if ($("#reply")[0].checkValidity()){
            var url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd_W3mN0DZ9AoGHI72n4sFhXRRwXWRqPEftLD5Dad-w3B1cKg/formResponse";
            var data = {
                'entry.776931777': $("#name").val(),
                'entry.999217546': $("#whose").val(),
                'entry.890228997': $("#relation").val(),
                'entry.551742520': $("#total").val(),
                'entry.1064930264': $("#baby").val(),
                'entry.1265493821': $("#veg").val(),
                'entry.847775965': $("#remind").val(),
                'entry.1277564124': $("#method").val(),
                'entry.1348196671': $("#account").val()
            }
            console.log(data)
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                contentType: 'application/json',
                dataType: 'jsonp',
                complete: function () {
                    alert('資料已送出！');
                }
            });
        }else{
            $("#reply").addClass('was-validated')
        }
        
    })
})

