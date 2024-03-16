function findElem() {
    const findNewElem = document.getElementsByClassName("elemlist");
    const newErr = document.getElementById("errortext");
    try {
        let selectElement = document.getElementById('searchelem');
        let selectedElemValue = selectElement.options[selectElement.selectedIndex].value;
        console.log(selectedElemValue);
        let selectNumber = document.getElementById('searchnum');
        let selectedNumValue = selectNumber.options[selectNumber.selectedIndex].value;
        console.log(selectedNumValue);

        fetch (`https://swapi.py4e.com/api/${selectedElemValue}/${selectedNumValue}/`)
        .then((response) => {
            if (!response.ok) {
                // throw new Error(`Server returned ${response.status}: ${response.statusText}`);
                return Promise.reject(new Error(`Server returned ${response.status}: ${response.statusText}`));
                }
                newErr.textContent = " ";
                //newErr.textContent = `${response.status}: ${response.statusText}`;
            return response.json();
        })
        .then((data) => {
            console.log(data);
			console.log("Film", data);
            if(selectedElemValue === "films"){
                findNewElem[0].innerHTML = "Title : " + data.title;
            };
            if(selectedElemValue === "people"){
                findNewElem[0].innerHTML = "Name : " + data.name;
            }
            if(selectedElemValue === "planets"){
                findNewElem[0].innerHTML = "Name : " + data.name;
            }
            if(selectedElemValue === "species"){
                findNewElem[0].innerHTML = "Name : " + data.name;
            }
            if(selectedElemValue === "starships"){
                findNewElem[0].innerHTML = "Model : " + data.model;
            }
            if(selectedElemValue === "vehicles"){
                findNewElem[0].innerHTML = "Model : " + data.model;
            }
            })
		.catch((error) => {
            console.log('Извините, ошибка:'  + error);
                newErr.textContent = 'Извините, ошибка:'  + error;
            })        
    
    } catch(error) {
        console.log('Извините, в данных ошибка:'  + error);
        newErr.textContent = 'Извините, в данных ошибка: ' + error;
    }
    finally {
        findNewElem[0].textContent = "Поиск завершен"
    }
}

document.querySelector('.searchbutton').addEventListener('click', findElem);


