let arr = []; //filled with [number, url, base64]
let prefix = ["157", "178", "163", "177", "159", "176", "179", "151", "171", "160", "175", "170", "152", "173", "162", "174", "172"]; //different number prefixes according to provider
let numbers = []; //filed with randomly generated numbers
let limit = 100; //number of numbers generated at one page load
let count = 0;
let index = 0;
let countryCode = "49"; //country code

const toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    }))

function getpic(num) { //get profile picture from number
    let url = window.Store.Wap.profilePicFind(num + "@c.us");

    function check1() { //check if url request is finished
        if (url._value != undefined) {
            index++;
            if (url._value.eurl != undefined) {
                count++;
                toDataURL(url._value.eurl).then(dataUrl => {
                    arr.push(num, url._value.eurl, dataUrl);
                })
            }
        } else {
            setTimeout(check1, 50);
        }
    }
    check1();
}


for (i = 0; i < limit; i++) {
    numbers.unshift(countryCode + prefix[Math.floor(Math.random() * prefix.length)] + String(Math.floor(Math.random() * 100000000))); //generate random number
}


function check() { //generate window.Store object after page load
    if (document.getElementsByClassName('rAUz7')[0] != undefined) {
        window.Store = {};
        webpackJsonp([], {
            "dgfhfgbdeb": (x, y, z) => window.Store.Wap = z('"dgfhfgbdeb"')
        }, "dgfhfgbdeb");
        for (a = 0; a < numbers.length; a++) {
            getpic(numbers[a]);
        }

    } else {
        setTimeout(check, 50);
    }
}
check();

function check2() { //check if all base64 strings exists
    if (index == limit && count * 3 == arr.length) {
        if (arr.length != 0) {
            console.log(arr);
            window.postMessage({
                type: "FROM_PAGE",
                text: JSON.stringify(arr)
            }, "*"); //send data to content.js			
        } else {
            location = location; //reload page
        }
    } else {
        setTimeout(check2, 50);
    }
}
check2();
