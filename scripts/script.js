//we are going to make an event listener. It will trigger when the Dom is loaded. (aka upon visting th webpage)
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        let songID = song._id
        html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a></li>`
    }

    document.querySelector("#list_of_songs").innerHTML = html

})