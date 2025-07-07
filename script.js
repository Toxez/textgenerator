const inputText = document.getElementById("inputText"),
      outputText = document.getElementById("outputText"),
      copyBtn = document.getElementById("copyBtn"),
      charMap = {
        а: "ᴀ", б: "б", в: "ʙ", г: "г", д: "д", е: "ᴇ", ё: "ё", ж: "ж", 
        з: "з", и: "и", й: "й", к: "ᴋ", л: "л", м: "м", н: "н", о: "о", 
        п: "п", р: "р", с: "ᴄ", т: "ᴛ", у: "у", ф: "ɸ", х: "х", ц: "ц", 
        ч: "ч", ш: "ш", щ: "щ", ъ: "", ы: "ы", ь: "", э: "э", ю: "ю", 
        я: "я", a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", 
        h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", 
        p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", 
        x: "x", y: "ʏ", z: "ᴢ"
      };

inputText.addEventListener("input", () => {
    const text = inputText.value;
    let result = "";
    
    for (let line of text.split("\n")) {
        let convertedLine = "";
        
        for (let char of line) {
            convertedLine += charMap[char.toLowerCase()] ?? char;
        }
        
        result += convertedLine + "\n";
    }
    
    outputText.textContent = result.trim();
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(outputText.textContent)
        .then(() => {
            copyBtn.textContent = "✓ Скопировано!";
            setTimeout(() => {
                copyBtn.textContent = "Копировать";
            }, 1500);
        });
});