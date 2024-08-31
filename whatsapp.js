let plusButton = document.getElementById("plus_button");
let comunity_option = document.getElementById("community_");

comunity_option.onclick = function() {
    comunity_option.classList.add("chatigs");
    chats_option.classList.remove("chatigs");
    update_option.classList.remove("chatigs");
    call_options.classList.remove("chatigs");
}
let chats_option = document.getElementById("chats_");

chats_option.onclick = function() {
    chats_option.classList.add("chatigs");
    update_option.classList.remove("chatigs");
    call_options.classList.remove("chatigs");
    comunity_option.classList.remove("chatigs");
}

let update_option = document.getElementById("Updates_");

update_option.onclick = function() {
    update_option.classList.add("chatigs");
    chats_option.classList.remove("chatigs");
    call_options.classList.remove("chatigs");
    comunity_option.classList.remove("chatigs");

}

let call_options = document.getElementById("Calls_");

call_options.onclick = function() {
    call_options.classList.add("chatigs");
    chats_option.classList.remove("chatigs");
    update_option.classList.remove("chatigs");
    comunity_option.classList.remove("chatigs");

}

let tap_ = document.getElementById("chats_container_______");
let search___com = document.getElementById("textInput");
let name_of_con = document.getElementById("name_of_contact");
let namuu__ = document.getElementById("name________");
let cont_ = document.getElementById("add_contalu");
let b_ = document.getElementById("butnu_");
let c_ = document.getElementById("con_community");
let w_ = document.getElementById("what_");

function updateParagraph() {
    let search___com = document.getElementById("textInput");
    let name_of_con = document.getElementById("name_of_contact");
    name_of_con.textContent = "'" + search___com.value + "'";
    namuu__.textContent = search___com.value;
    cont_.textContent = "";
    c_.classList.add("d-none");
    w_.classList.add("d-none");
    b_.classList.remove("d-none")
}
let pl__ = document.getElementById("pluslu_");
pl__.onclick = function() {
    cont_.textContent = "Add a Contact";
    c_.classList.remove("d-none");
    w_.classList.remove("d-none");
    search___com.value = "";
    b_.classList.add("d-none")
}



const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

function activatekeyboard() {
    var inputField = document.getElementById("textInput");
    inputField.focus();
}



// Get references to the total_msg_bar and generate_bar elements
const totalMsgBar = document.getElementById("total_msg_bar");
const generateBar = document.getElementById("generate_bar");




let ul__ = document.getElementById("new_contact_boxes");


let contact_numbers = [

];
let contact_list = contact_numbers.length;

let msgchtihlid = document.getElementById("smmsgchating");

function create_contact_box(msg) {

    let li = document.createElement("li");
    li.classList.add("d-flex", "flex-row", "pt-3");
    li.addEventListener("click", function() {
        // Replace 'another-page.html' with the URL of the page you want to navigate to
        window.location.href = 'https://chatinguu.ccbp.tech/.html';
    });
    ul__.appendChild(li);


    let div_ = document.createElement("div");



    li.appendChild(div_);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "45");
    svg.setAttribute("height", "45");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "bi bi-person-fill");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.style.color = '#ffffff';
    svg.style.backgroundColor = '#E0E0E0';
    svg.style.padding = '10px';
    svg.style.borderRadius = '22px';



    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z");


    svg.appendChild(path);
    li.appendChild(svg);

    let div___ = document.createElement("div");
    div___.classList.add("d-flex", "flex-column", "pl-3");
    div___.classList.add("person_", "d-flex", "flex-row");

    div___.onclick = msgchtihlid;
    li.appendChild(div___);

    let p_ = document.createElement("p");
    p_.textContent = msg.text;
    p_.style.fontWeight = "bold";
    div___.appendChild(p_);

}

for (let msg of contact_numbers) {
    create_contact_box(msg);
}

function add_a_contact() {
    let value_of_search = document.getElementById("textInput").value;
    contact_list = contact_list + 1;
    let newMsg = {
        text: value_of_search,
    };
    create_contact_box(newMsg);
    value_of_search = "";

}

let end_to_msg = document.getElementById("end_to_end_msg_");
b_.addEventListener("click", function() {

    document.getElementById("tap_msg").classList.add("d-none");
    tap_.style.backgroundImage = "none";
    tap_.style.backgroundColor = "white";
    name_of_con.textContent = "";


    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("fill", "grey");
    svg.setAttribute("class", "bi bi-lock-fill");
    svg.setAttribute("viewBox", "0 0 16 16");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2");


    svg.appendChild(path);

    end_to_msg.appendChild(svg);

    end_to_msg.textContent = "Your personal messages are ";
    end_to_msg.style.fontSize = "10px";

    let span_ = document.createElement("span");
    span_.classList.add("pl-1");
    span_.textContent = "end-to-end encrypted";
    span_.style.color = "RGB(53, 157, 126)";
    span_.style.fontSize = "10px";
    end_to_msg.appendChild(span_);
    add_a_contact();
});


let chatbotMsgList = ["Hi", "neku okati cheppali", "em tiinav", "vuttige sardaki", "clg lo kallu antha me paine", "cinemaki veldhama", "okati cheppali neku", "em tiinav", "clg lo kallu antha me paine", "ne smile bagutadi", "clg lo meku chalamandhi fans unnru", "vuttige sardaki", "cinemaki veldhama", "Nuv chala Andmaga untav", ];


let chat______con = document.getElementById("chatContainer");
let use_inputt = document.getElementById("userInput");

function sendbutton() {
    let user_msg_ = use_inputt.value;

    let divs = document.createElement("div");
    divs.classList.add("msg_container_right");
    chat______con.appendChild(divs);
    const currentTime = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true, // To use 24-hour format
    });

    let span___s = document.createElement("span")
    span___s.textContent = user_msg_;
    span___s.classList.add("send_msgs");
    divs.appendChild(span___s);

    let span_time = document.createElement("span")
    span_time.textContent = currentTime;
    span_time.classList.add("time__")
    span___s.appendChild(span_time);


    use_inputt.value = "";
    receivedMsg();
}


function receivedMsg() {

    let no_of_msg = chatbotMsgList.length;

    let random__ = chatbotMsgList[Math.ceil(Math.random() * no_of_msg) - 1];


    let divs = document.createElement("div");
    divs.classList.add("msg_container_left");
    chat______con.appendChild(divs);

    const currentTime = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true, // To use 24-hour format
    });


    let chatbot_msgL = document.createElement("span")
    chatbot_msgL.textContent = random__;
    chatbot_msgL.classList.add("recived_msgs");
    divs.appendChild(chatbot_msgL);

    let span___ = document.createElement("span");
    span___.textContent = currentTime;
    span___.classList.add("time__");
    chatbot_msgL.appendChild(span___);


}