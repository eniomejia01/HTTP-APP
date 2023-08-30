import  usersStore  from "../../store/users-store"; // Existe una diferencia entre import { usersStore} e import usersStore, puede generar errores sino se importa de la forma correcta

import "./render-buttons.css";

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderButtons = ( element ) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();


    element.append( prevButton, currentPageLabel, nextButton  );
}


