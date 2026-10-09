// ========================================================
// Assignment 5: JavaScript Post and Reply
// ========================================================

window.onload = setupFunction;

function setupFunction() {
    // เมื่อเริ่มโหลด browser ให้ขึ้นคำว่า "Welcome to the Forum" ที่ id top
    document.getElementById("top").innerText = "Welcome to the Forum";
}

// สร้างตัวแปรนับลำดับการโพสต์ กำหนดค่าเริ่มต้นเป็น 0
let postCount = 0;

function postFunction() {
    // 1. อ่านค่าข้อความจาก textarea (id="message")
    let message = document.getElementById("message").value;

    // ตรวจสอบว่ามีข้อความหรือไม่ (ถ้าไม่มีข้อความจะไม่ทำอะไร)
    if (message.trim() === "") {
        return;
    }

    // 2. นำข้อความไปใส่ตามลำดับการโพสต์
    if (postCount === 0) {
        // ครั้งที่ 1: โพสต์ลงใน id="topic"
        document.getElementById("topic").innerText = message;
        postCount++;
    } else if (postCount === 1) {
        // ครั้งที่ 2: โพสต์ลงใน id="reply1"
        document.getElementById("reply1").innerText = message;
        postCount++;
    } else if (postCount === 2) {
        // ครั้งที่ 3: โพสต์ลงใน id="reply2"
        document.getElementById("reply2").innerText = message;
        postCount++;
    }

    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    document.getElementById("message").value = "";
}

function clearFunction() {
    // 1. ลบข้อความที่ topic และ reply ทั้งหมด
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";

    // 2. ล้างข้อความใน textarea
    document.getElementById("message").value = "";

    // 3. รีเซ็ตตัวนับการโพสต์กลับไปเริ่มต้นใหม่
    postCount = 0;
}