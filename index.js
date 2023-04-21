

(function () {
    var table = document.createElement('table');
    table.style.borderCollapse = "collapse";

    
    var caption = document.createElement('caption');
    var cap = document.createTextNode("Student Table");
    caption.appendChild(cap);
    table.appendChild(caption);

    const fields = ["Name", "Age", "DOB", "Email", "Compamy"];

    var thead = document.createElement("thead");
    for (let i = 0; i < 5; i++) {
        let th = document.createElement("th");
        let h = document.createTextNode(fields[i]);
        th.appendChild(h);
        th.style.border = "3px solid black";
        th.style.textAlign = "center";
        thead.append(th);
    }
    table.appendChild(thead);

    const row1 = ["Ayushi Gupta", 21, "07/09/2001", "ayushi.gupta@geminisolutions.com", "Gemini Solutions Pvt Ltd"];
    const row2 = ["Suhani Pachaori", 20, "07/05/2002", "suhani.pachaori@geminisolutions.com", "Gemini Solutions Pvt Ltd"];
    const row3 = ["Snigdha Singh", 20, "17/04/2001", "snigdha.singh@geminisolutions.com.com", "Gemini Solutions Pvt Ltd"];
   
    const rows = [row1, row2, row3];

    for (let j = 0; j < rows.length; j++) {
        var tbody = document.createElement("tbody");
        for (let i = 0; i < rows[0].length; i++) {
            let td = document.createElement("td");
            let d = document.createTextNode(rows[j][i]);
            td.style.border = "2px solid black"
            td.appendChild(d);
            td.style.padding = '10px';
            td.style.textAlign = "center";
            tbody.append(td);
        }
        table.appendChild(tbody);
    }

    document.body.appendChild(table);

})();