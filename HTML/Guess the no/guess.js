document.addEventListener('DOMContentLoaded', function() {
    const step1 = [
        "FIRST, ADD THE NUMBER YOU HAVE CHOSE BY 18<br><br>[A NUMBER YOU HAVE CHOSE] + 18",
        "FIRST, MULTIPLY THE NUMBER YOU HAVE CHOSE BY 2<br><br>[A NUMBER YOU HAVE CHOSE] * 2",
        "FIRST, ADD THE NUMBER YOU HAVE CHOSE BY 20<br><br>[A NUMBER YOU HAVE CHOSE] + 20",
        "FIRST, ADD THE NUMBER YOU HAVE CHOSE BY 13<br><br>[A NUMBER YOU HAVE CHOSE] + 13"
    ];

    const step2 = [
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY 3<br><br>[RESULT OF STEP 1] - 3",
        "THEN, ADD THE RESULT OF THE PREVIOUS STEP BY 6<br><br>[RESULT OF STEP 1] + 6",
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY 8<br><br>[RESULT OF STEP 1] - 8",
        "THEN, ADD THE RESULT OF THE PREVIOUS STEP BY 2<br><br>[RESULT OF STEP 1] + 2"
    ];

    const step3 = [
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY 5<br><br>[RESULT OF STEP 2] - 5",
        "THEN, DIVIDE THE RESULT OF THE PREVIOUS STEP BY 2<br><br>[RESULT OF STEP 2] / 2",
        "THEN, ADD THE RESULT OF THE PREVIOUS STEP BY 4<br><br>[RESULT OF STEP 2] + 4",
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY 4<br><br>[RESULT OF STEP 2] - 4"
    ];

    const step4 = [
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY NUMBER YOU HAVE CHOSEN FIRST<br><br>[RESULT OF STEP 3] - [A NUMBER YOU HAVE CHOSEN]",
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY NUMBER YOU HAVE CHOSEN FIRST<br><br>[RESULT OF STEP 3] - [A NUMBER YOU HAVE CHOSEN]",
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY 2<br><br>[RESULT OF STEP 3] - 2",
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY 1<br><br>[RESULT OF STEP 3] - 1"
    ];

    const step5 = [
        "THEN, MULTIPLY THE RESULT OF THE PREVIOUS STEP BY 2<br><br>[RESULT OF STEP 4] * 2",
        "THEN, MULTIPLY THE RESULT OF THE PREVIOUS STEP BY 2<br><br>[RESULT OF STEP 4] * 2",
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY NUMBER YOU HAVE CHOSEN FIRST<br><br>[RESULT OF STEP 4] - [A NUMBER YOU HAVE CHOSEN]",
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY NUMBER YOU HAVE CHOSEN FIRST<br><br>[RESULT OF STEP 4] - [A NUMBER YOU HAVE CHOSEN]"
    ];

    const step6 = [
        "THEN, ADD THE RESULT OF THE PREVIOUS STEP BY 6<br><br>[RESULT OF STEP 5] + 6",
        "THEN, ADD THE RESULT OF THE PREVIOUS STEP BY 6<br><br>[RESULT OF STEP 5] + 6",
        "THEN, DIVIDE THE RESULT OF THE PREVIOUS STEP BY 2<br><br>[RESULT OF STEP 5] / 2",
        "THEN, SUBTRACT THE RESULT OF THE PREVIOUS STEP BY 9<br><br>[RESULT OF STEP 5] - 9"
    ];

    const step7 = [
        "FINALLY, DIVIDE THE RESULT OF THE PREVIOUS STEP BY 2<br><br>[RESULT OF STEP 6] / 2",
        "FINALLY, DIVIDE THE RESULT OF THE PREVIOUS STEP BY 2<br><br>[RESULT OF STEP 6] / 2",
        "FINALLY, ADD THE RESULT OF THE PREVIOUS STEP BY 1<br><br>[RESULT OF STEP 6] + 1",
        "FINALLY, ADD THE RESULT OF THE PREVIOUS STEP BY 2<br><br>[RESULT OF STEP 6] + 2"
    ];

    const text1 = [
        "INITIALIZING YOUR MIND...",
        "READING YOUR MIND..."
    ];

    const text2 = [
        "<br>INITIALIZED.<br>",
        "<br>READ.<br><br>"
    ];

    const text3 = "THE RESULT IS ";

    const text4 = [
        "13<br><br>",
        "6<br><br>",
        "8<br><br>",
        "3<br><br>"
    ];

    const text5 = "IF CORRECT, PLEASE GIVE +1 LIKE<br><br>";

    const play = document.getElementById('play');
    const nextS2 = document.getElementById('nextS2');
    const nextS3 = document.getElementById('nextS3');
    const nextS4 = document.getElementById('nextS4');
    const nextS5 = document.getElementById('nextS5');
    const nextS6 = document.getElementById('nextS6');
    const nextS7 = document.getElementById('nextS7');
    const answer = document.getElementById('answer');
    const reset = document.getElementById('reset');
    const check = document.getElementById('check');
    const html = document.documentElement;
    const body = document.body;
    const celebrate = document.getElementById('celebrate');
    const S1 = document.getElementById('S1');
    const S2 = document.getElementById('S2');
    const S3 = document.getElementById('S3');
    const S4 = document.getElementById('S4');
    const S5 = document.getElementById('S5');
    const S6 = document.getElementById('S6');
    const S7 = document.getElementById('S7');
    const Step1 = document.getElementById('Step1');
    const Step2 = document.getElementById('Step2');
    const Step3 = document.getElementById('Step3');
    const Step4 = document.getElementById('Step4');
    const Step5 = document.getElementById('Step5');
    const Step6 = document.getElementById('Step6');
    const Step7 = document.getElementById('Step7');
    const Answer = document.getElementById('Answer');
    const read = document.getElementById('read');

    let randNum, count1 = 0, count2 = 0, count3 = 0;
    let r, g, b;
    let col;

    play.onclick = function() {
        randNum = Math.floor(Math.random() * 4);
        count1 = 0;
        count2 = 0;
        count3 = 0;

        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);

        col = Math.random() > 0.5 ? "#00e" : "#0e0";

        S1.innerHTML = step1[randNum];
        play.style.display = "none";
        Step1.style.display = "block";
        Step1.style.background = `rgb(${r},${g},${b})`;
    };

    nextS2.onclick = function() {
        S2.innerHTML = step2[randNum];
        Step1.style.display = "none";
        Step2.style.display = "block";
        Step2.style.background = `rgb(${r},${b},${g})`;
    };

    nextS3.onclick = function() {
        S3.innerHTML = step3[randNum];
        Step2.style.display = "none";
        Step3.style.display = "block";
        Step3.style.background = `rgb(${g},${r},${b})`;
    };

    nextS4.onclick = function() {
        S4.innerHTML = step4[randNum];
        Step3.style.display = "none";
        Step4.style.display = "block";
        Step4.style.background = `rgb(${g},${b},${r})`;
    };

    nextS5.onclick = function() {
        S5.innerHTML = step5[randNum];
        Step4.style.display = "none";
        Step5.style.display = "block";
        Step5.style.background = `rgb(${b},${r},${g})`;
    };

    nextS6.onclick = function() {
        S6.innerHTML = step6[randNum];
        Step5.style.display = "none";
        Step6.style.display = "block";
        Step6.style.background = `rgb(${b},${g},${r})`;
    };

    nextS7.onclick = function() {
        S7.innerHTML = step7[randNum];
        Step6.style.display = "none";
        reset.style.display = "none";
        Step7.style.display = "block";
        Step7.style.background = `rgb(${r},10,${b})`;
    };

    answer.onclick = function() {
        Step7.style.display = "none";
        Answer.style.display = "block";
        read.style.color = col;

        setTimeout(function() {
            read.innerHTML += text1[0];
        }, 500);
        setTimeout(function() {
            read.innerHTML += text2[0];
        }, 1500);
        setTimeout(function() {
            read.innerHTML += text1[1];
        }, 2000);
        setTimeout(function() {
            read.innerHTML += text2[1];
        }, 3000);
        setTimeout(function() {
            read.innerHTML += text3;
        }, 3500);
        setTimeout(function() {
            read.innerHTML += text4[randNum];
        }, 4000);
        setTimeout(function() {
            read.innerHTML += text5;
            reset.style.display = "block";
        }, 4500);
    };

    reset.onclick = function() {
        read.innerHTML = "";
        Answer.style.display = "none";
        play.style.display = "block";
        reset.style.display = "none";
    };

    check.onclick = function() {
        if (check.checked) {
            html.style.background = "#222";
            body.style.background = "#222";
            body.style.color = "#eee";
            celebrate.style.color = "#ff0";
        } else {
            html.style.background = "#eee";
            body.style.background = "#eee";
            body.style.color = "#000";
            celebrate.style.color = "#00f";
        }
    };
});
