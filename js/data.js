// document - index
const blogPosts = [
    { img: "img/blog-1.jpg", title: "Diam amet eos at no eos", content: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...", link: "documents.html" },
    { img: "img/blog-2.jpg", title: "Diam amet eos at no eos", content: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...", link: "documents.html" },
    { img: "img/blog-3.jpg", title: "Diam amet eos at no eos", content: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...", link: "documents.html" }
];
// documents
const postDoc = [
    { img: "img/blog-1.jpg", title: "Title1", content: "Content1" },
    { img: "img/blog-2.jpg", title: "Title2", content: "Content2" },
    { img: "img/blog-3.jpg", title: "Title3", content: "Content3" },
    { img: "img/blog-4.jpg", title: "Title4", content: "Content4" },
    { img: "img/blog-5.jpg", title: "Title5", content: "Content5" },
    { img: "img/blog-6.jpg", title: "Title6", content: "Content6" },
    { img: "img/blog-7.jpg", title: "Title7", content: "Content7" },
    { img: "img/blog-8.jpg", title: "Title8", content: "Content8" },
    { img: "img/blog-9.jpg", title: "Title9", content: "Content9" },
    { img: "img/blog-10.jpg", title: "Titl101", content: "Content10" },
];

// news
const newsPosts = [
    { img: "img/new-1.jpg", title: "THÔNG BÁO LỊCH NGHỈ LỄ QUỐC KHÁNH 02/09/2024", content: "Trong thời gian nghỉ lễ, ES vẫn sẵn sàng hỗ trợ Quý phụ huynh và học viên với thông tin về khóa học kênh tư vấn trực tuyến và sắp lịch test khi trung tâm hoạt động trở lại.", date: "2024-08-25" },
    { img: "img/new-2.jpg", title: "ƯU ĐÃI ĐẶC BIỆT TẠI ENGSAVER – CHÀO MỪNG ĐẠI LỄ QUỐC KHÁNH 2/9 ", content: "Hòa cùng không khí tưng bừng, rực rỡ sắc đỏ của cờ hoa trên khắp cả nước, Engsaver mong muốn gửi đến các bạn sinh viên chuẩn bị và đã đồng hành cùng Engsaver những món quà đặc biệt nhất. Đây là cơ hội tuyệt vời để các bạn học viên tại ES có thêm động lực học tập và cải thiện tiếng Anh của bản thân minh", date: "2024-08-21" },
    { img: "img/new-3.jpg", title: "CHƯƠNG TRÌNH ƯU ĐÃI ĐẶC BIỆT THÁNG 7 TẠI ENGSAVER", content: "Chào đón tháng 7 đầy hứng khởi, Engsaver hân hạnh mang đến chương trình khuyến mãi đặc biệt dành riêng cho các bạn học sinh - sinh viên. Đây là cơ hội tuyệt vời để nâng cao kỹ năng tiếng Anh với những ưu đãi vô cùng hấp dẫn", date: "2024-05-12" },
    { img: "img/new-4.jpg", title: "Hết Tết còn Xuân", content: "Nhanh tay đăng ký tham gia khóa vào tháng 3 để nhận được ngay lì xì đầu năm con rồng.", date: "2024-03-04" },
    { img: "img/new-5.jpg", title: "Thông Báo Nghỉ Tết Dương Lịch 2024", content: "Trung tâm Ngoại ngữ kiến tạo phương pháp trân trọng thông báo đến tất cả Quý phụ huynh và học viên lịch nghỉ Tết Dương lịch 2024.", date: "2023-12-31" }
];
// gallery
const galleryItems = [
    { img: "img/ga1.jpg", lightboxImg: "img/portfolio-1.jpg", category: "first" },
    { img: "img/ga2.jpg", lightboxImg: "img/portfolio-2.jpg", category: "second" },
    { img: "img/ga3.jpg", lightboxImg: "img/portfolio-3.jpg", category: "third" },
    { img: "img/ga7.jpg", lightboxImg: "img/portfolio-4.jpg", category: "first" },
    { img: "img/ga5.jpg", lightboxImg: "img/portfolio-5.jpg", category: "second" },
    { img: "img/ga6.jpg", lightboxImg: "img/portfolio-6.jpg", category: "four" }
];

// student
const testimonialItems = [
    { quote: "Trung tâm sạch sẽ, thoáng mát. Chị Tiên tư vấn nhiệt tình mà còn dễ thương nữa. Thầy cô và mấy bạn trợ giảng dạy siêu tận tâm luôn...", img: "img/testimonial-1.jpg", name: "Student 1", institution: "TDTU" },
    { quote: "Quá trình học thì mình học lớp kèm 1 với anh Khải, anh thì hơi hài hước nhưng được cái rất tận tâm, có lỗi sai thì anh luôn nói 1 câu đúng và phân tích cho mình nên sử dụng từ như thế nào. Nói chunh sau 1 tháng thì thấy ổn áp nha, mọi người có thể tham khảo, học phí cũng vừa tầm nữa ahihi…", img: "img/testimonial-2.jpg", name: "Student 2", institution: "TDTU" },
    { quote: "Chất lượng giảng dạy và dịch vụ tại trung tâm tuyệt vời. Giáo viên ở đây rất chuyên nghiệp, tận tâm và luôn nhiệt tình giúp đỡ học viên. Mỗi buổi học đều rất thú vị, phương pháp giảng dạy sinh động giúp cải thiện kỹ năng nghe, nói, đọc, viết một cách rõ rệt.", img: "img/testimonial-3.jpg", name: "Student 3", institution: "None" },
    { quote: "Thầy cô ở đây siêu dễ thương, phương pháp giảng dạy dễ hiểu. Sau một thời gian học ở đây, tiếng anh của mình đã cải thiện rất nhiều và đạt được band điểm như mong muốn.", img: "img/testimonial-4.jpg", name: "Student 4", institution: "None" },
    { quote: "Không thể mô tả bằng lời.", img: "img/testimonial-5.jpg", name: "Student 5", institution: "TDTU" },
    { quote: "Không gian thực sự tuyệt vời để học tiếng Anh theo phương pháp cộng tác. Gia sư chuyên nghiệp.", img: "img/testimonial-6.jpg", name: "Duong Mui", institution: "TDTU" }
];

// teachers
const teamMembers = [
    {
        name: "Julia Smith",
        position: "Music Teacher",
        imgSrc: "img/header1.jpg",
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    },
    {
        name: "Jhon Doe",
        position: "Language Teacher",
        imgSrc: "img/header1.jpg",
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    },
    {
        name: "Mollie Ross",
        position: "Dance Teacher",
        imgSrc: "img/header1.jpg",
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    },
    {
        name: "Donald John",
        position: "Art Teacher",
        imgSrc: "img/header1.jpg",
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    },
    {
        name: "Alice Brown",
        position: "Science Teacher",
        imgSrc: "img/header1.jpg",
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    },
    {
        name: "James White",
        position: "History Teacher",
        imgSrc: "img/header1.jpg",
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    },
    {
        name: "Susan Green",
        position: "Physical Education Teacher",
        imgSrc: "img/header1.jpg",
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    },
    {
        name: "Robert King",
        position: "Mathematics Teacher",
        imgSrc: "img/header1.jpg",
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    }
];
