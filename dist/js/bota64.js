/*
MIT License

Copyright (c) 2020 Jimmy Böhm (Der_Googler)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

function Bota64(id, text) {
    // gets the values and ids
    var str = text;
    var result_DBota64 = document.getElementById(id);
    // decode
    str = decodeURIComponent(escape(window.atob(str)));
    // decode abc case
    str = str.replace(/𑫀/g, 'a');
    str = str.replace(/𑫁/g, 'b');
    str = str.replace(/𑫂/g, 'c');
    str = str.replace(/𑫃/g, 'd');
    str = str.replace(/𑫄/g, 'e');
    str = str.replace(/𑫅/g, 'f');
    str = str.replace(/𑫆/g, 'g');
    str = str.replace(/𑫇/g, 'h');
    str = str.replace(/𑫈/g, 'i');
    str = str.replace(/𑫉/g, 'j');
    str = str.replace(/𑫊/g, 'k');
    str = str.replace(/𑫋/g, 'l');
    str = str.replace(/𑫌/g, 'm');
    str = str.replace(/𑫍/g, 'n');
    str = str.replace(/𑫎/g, 'o');
    str = str.replace(/𑫏/g, 'p');
    str = str.replace(/𑫐/g, 'q');
    str = str.replace(/𑫑/g, 'r');
    str = str.replace(/𑫒/g, 's');
    str = str.replace(/𑫓/g, 't');
    str = str.replace(/𑫣/g, 'u');
    str = str.replace(/𑫔/g, 'v');
    str = str.replace(/𑫕/g, 'w');
    str = str.replace(/𑫖/g, 'x');
    str = str.replace(/𑫗/g, 'y');
    str = str.replace(/𑫘/g, 'z');
    // DECODE ABC CASE
    str = str.replace(/𐓆/g, 'A');
    str = str.replace(/𐓍/g, 'B');
    str = str.replace(/𐒱/g, 'C');
    str = str.replace(/𐒴/g, 'D');
    str = str.replace(/𐒄/g, 'E');
    str = str.replace(/𐑙/g, 'F');
    str = str.replace(/𐑿/g, 'G');
    str = str.replace(/𐑼/g, 'H');
    str = str.replace(/𐒏/g, 'I');
    str = str.replace(/𐒤/g, 'J');
    str = str.replace(/𐓌/g, 'K');
    str = str.replace(/𐓉/g, 'L');
    str = str.replace(/𐓋/g, 'M');
    str = str.replace(/𐓊/g, 'N');
    str = str.replace(/𐓒/g, 'O');
    str = str.replace(/𐓏/g, 'P');
    str = str.replace(/𐓑/g, 'Q');
    str = str.replace(/𐓐/g, 'R');
    str = str.replace(/𐒁/g, 'S');
    str = str.replace(/𐒀/g, 'T');
    str = str.replace(/𐒘/g, 'U');
    str = str.replace(/𐒲/g, 'V');
    str = str.replace(/𐓓/g, 'W');
    str = str.replace(/𐒅/g, 'X');
    str = str.replace(/𐒻/g, 'Y');
    str = str.replace(/𐒕/g, 'Z');
    // other letters
    str = str.replace(/ֆ/g, '⣿');
    str = str.replace(/𑀭/g, ':');
    str = str.replace(/𑁈/g, ' ');
    str = str.replace(/\]/g, '(');
    str = str.replace(/\[/g, ')');
    str = str.replace(/ᛏ/g, '"');
    str = str.replace(/᜵/g, '!');
    str = str.replace(/᜶/g, '/');
    str = str.replace(/⸿/g, '?');
    // gives the results
    result_DBota64.innerHTML = str;
}