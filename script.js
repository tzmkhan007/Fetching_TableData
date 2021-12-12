let r = fetch("https://reqres.in/api/user");

let s = r.then(function (response) {
  return response.json();
});
s.then(function (a) {
  displayData(a.data);
});
   function displayData(data) {
     let table = document.getElementById("table");
     for (let i = 0; i < data.length; i++) {
     let obj = data[i];
     let row = document.createElement("tr");
     let id = document.createElement("td");
     let name = document.createElement("td");
     let year = document.createElement("td");
     let color = document.createElement("td");
     let pantone_value = document.createElement("td");

    id.innerHTML = obj.id;
    name.innerHTML = obj.name;
    year.innerHTML = obj.year;
    color.innerHTML = obj.color;
    pantone_value.innerHTML = obj.pantone_value;

    row.appendChild(id);
    row.appendChild(name);
    row.appendChild(year);
    row.appendChild(color);
    row.appendChild(pantone_value);

    table.appendChild(row);
  }
}