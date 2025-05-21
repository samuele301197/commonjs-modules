import names from "./names.js";
import hobbies from "./hobbies.js";

function people () {
    const fullName = names("Samuele", "Parisi");
    const fullHobbies = hobbies("Sport", "Natura", "Viaggio");

    return {
        fullName,
        fullHobbies,
    };
}

export default people;