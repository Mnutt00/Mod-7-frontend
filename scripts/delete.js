addEventListener("DomContentLoaded", async function() {
    document.querySelector("#delete").addEventListener("click", deleteSong)
    getAllSongs()
})

async function getAllSongs() {
    const response = await fetch("http://localhost:3000/api/songs")
    if (response.ok){
        const songs = await response.json()
        let html = ""
        for(let song of songs) {
            html += `<option value="${song.id}">${song.title}</option>`

    }
    document.querySelector("#songDropDown option:checked").innerHTML = html
}
}

async function deleteSong() {
    const songId = document.querySelector("#songDropDown option:checked").value
    
    const response = await fetch(`http://localhost:3000/api/songs/${songId}`, {
        method: "DELETE"
    })
    if (response.ok) {
        getAllSongs();
        alert("Song deleted successfully")
    } 
    else {
        document.querySelector("#error").innerHTML = "Cannot delete song"
    }
}
