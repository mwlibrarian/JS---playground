const nextButton = document.querySelector(".modal-cui")

function myFunction() { document.getElementById("puppy").innerHTML = 
    `<style>
    ::backdrop { background-color: rgba(3,3,3,0.5)

    }
    </style>
    <dialog id="modal">
        <p><span>Baby dog is very cute!</span></p>
        <img src="puppies.jpg" alt="puppies" width="250" height="250"/>
        <h3><span>Something, blah, blah....</span></h3>
        <h1><span>Do you agree?</span></h1>
        <span>
            <button type="button" class="data-modal-close">Yes</button>
            <button type="button" class="data-modal-close2">No</button>
        </span>
    </dialog>`
}

nextButton.addEventListener("click", () => { 
    myFunction();
    const dialog = document.querySelector("#modal");
   
    console.log(typeof dialog);
    dialog.showModal();
    const yesButton = document.querySelector(".data-modal-close");
const noButton = document.querySelector(".data-modal-close2");
yesButton.addEventListener("click", () => { modal.close()
});

noButton.addEventListener("click", () => { modal.close()
});
});