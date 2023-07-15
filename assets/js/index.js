$("#add_entry").submit(function(event){
    alert("Data inserted successfully!")
})

$("#update_entry").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/passwords/${data.id}`,
        "method": "PUT",
        "data": JSON.stringify(data)
    }

    $.ajax(request).done(function(response){
        alert("Data updated successfully!");
    })
})