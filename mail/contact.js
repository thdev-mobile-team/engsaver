$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Hiển thị lỗi tại đây nếu có
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // Ngăn chặn hành vi submit mặc định của form
            
            // Lấy dữ liệu từ các trường input
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            // Nút gửi tin nhắn
            var $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable nút gửi để tránh gửi nhiều lần

            // Gửi AJAX
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",  // Đảm bảo sử dụng đúng phương thức POST
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function () {
                    // Xử lý khi gửi thành công
                },
                error: function (xhr, status, error) {
                    // Hiển thị thông báo lỗi chi tiết
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Rất tiếc " + name + ", có lỗi xảy ra: " + error + ". Chi tiết lỗi: " + xhr.responseText));
                    $('#success > .alert-danger').append('</div>');
            
                    // Reset form sau khi gặp lỗi
                    $('#contactForm').trigger("reset");
                }
            });
            
        }
    });

    // Xóa thông báo khi người dùng nhập lại
    $('#name').focus(function () {
        $('#success').html('');
    });
});
