// ==UserScript==
// @name         Rainbow r/place
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Guideline to draw rainbow in r/place
// @author       https://github.com/S7sRuss/rainbow
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://raw.githubusercontent.com/S7sRuss/rainbow/main/icon.ico
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/S7sRuss/draconbot/main/canvas_pixel.png";
            i.style = "position: absolute;left: 1003px;top: 1686px;image-rendering: pixelated;width: 23px;height: 16px";
            i.id = "mcss-overlay"
            i.setAttribute("vis",1)
            console.log(i);
            return i;
        })())

            document.getElementsByTagName("body")[0].appendChild(
        (function () {
            const i = document.createElement("button");
            i.style = "position: fixed;left: 10px; background: #fff; top: 50%;width: 50px;height: 50px;";
            i.innerHTML = "T"
            i.onclick = function() {
                const img = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.querySelector("#mcss-overlay")
                if (img.getAttribute("vis") == "1") {
                    img.setAttribute("vis",0)
                    img.style.opacity = 0
                } else {

                    img.setAttribute("vis",1)
                    img.style.opacity = 1
                }
            }
            console.log(i);
            return i;
        })())

    }, false);

}