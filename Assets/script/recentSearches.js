
localStorage.setItem('searchBar' , JSON.stringify([]));
const searched = JSON.parse(localStorage.getItem('searchBar') || []);
const searchedBar = [];

function searchedList(){
    
    let recentSearch = localStorage.getItem("recentSearch");
    searchedBar.push(recentSearch)
    search = {
        search: recentSearch
    }
    searched.push(search)
    localStorage.setItem('searchBar' , JSON.stringify(searched));
    let index = 0;
        searchedBar.forEach(element => {
            
        searchedBar.pop()
        // searchedBar.shift()
            $('<p>' , {
                id: `search${index} ${element}`,
                text: element
            }).appendTo(`#searchBar`);
            index ++;
        });
}
