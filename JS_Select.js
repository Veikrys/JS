// Задание 1

const select = [
    {
        value: "value1",
        label: "label1"
    },
    {
        value: "value2",
        label: "label2"
    }
];

function spisok(array, index = 0) {
    let defaultValue;
    array.forEach(element => {
        element["value"] == index ? defaultValue = index : defaultValue = array[0]["value"];
    });
    (typeof defaultValue == "undefined") ? defaultValue = array[0] : null; 

    let select = document.createElement("select");
    array.forEach(element => {
        let label, value; 

        if (typeof element != "object") {
            label = element; value = element;
        } else { label = element["label"]; value = element["value"]; }

        let option = document.createElement("option");
        select.append(option);
        option.textContent = label;
        option.setAttribute("value", value);
        element == array[0] ? option.setAttribute("value", defaultValue) : null; 
    });

    return select;
}

document.body.append(spisok(select, "value1"));
