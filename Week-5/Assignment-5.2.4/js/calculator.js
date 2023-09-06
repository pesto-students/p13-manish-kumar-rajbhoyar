// Get all the radio buttons and call the updateScore method on each button selection
const radioButtons = document.querySelectorAll('input[type="radio"]');
for (const radioButton of radioButtons) {
    radioButton.addEventListener("click", updateScore);
}


function updateScore() {
    // Get all the selected radio buttons
    const attackVectorButtons = document.getElementsByName("AV");
    const attackComplexityButtons = document.getElementsByName("AC");
    const privilegeRequiredButtons = document.getElementsByName("PR");
    const userInteractionButtons = document.getElementsByName("UI");
    const scopeButtons = document.getElementsByName("scope");
    const confidentialityImpactButtons = document.getElementsByName("conf");
    const integrityImpactButtons = document.getElementsByName("integ");
    const availabilityImpactButtons = document.getElementsByName("avail");
    const healthImpactButtons = document.getElementsByName("health");
    const sensitivityButtons = document.getElementsByName("sens");

    // Check if one button from each property is selected
    let isComplete = true;
    // Looping over all the properties
    for (const buttons of [attackVectorButtons, attackComplexityButtons, privilegeRequiredButtons, userInteractionButtons, scopeButtons, confidentialityImpactButtons, integrityImpactButtons, availabilityImpactButtons, healthImpactButtons, sensitivityButtons]) {
        let isSelected = false;
        // Looping over all the buttons of a property
        for (const button of buttons) {
            // if a button is checked for a property
            if (button.checked) {
                isSelected = true;
                break;
            }
        }
        // if the button is unchecked for the property
        if (!isSelected) {
            isComplete = false;
            break;
        }
    }

    // If one button from each property is selected, compute the score
    if (isComplete) {
        // Hide the warning label
        const warning = document.getElementById("warning");
        warning.style.display = "none";

        // Get the value for attackVector
        let attackVectorValue;
        const attackVector = document.querySelector('input[name="AV"]:checked').value;
        switch (attackVector) {
            case "AV_N":
                attackVectorValue = 0.85;
                break;
            case "AV_A":
                attackVectorValue = 0.62;
                break;
            case "AV_L":
                attackVectorValue = 0.55;
                break;
            case "AV_P":
                attackVectorValue = 0.20;
        }

        // Get the value for Attack Complexity
        let attackComplexityValue;
        const attackComplexity = document.querySelector('input[name="AC"]:checked').value;
        switch (attackComplexity) {
            case "AC_L":
                attackComplexityValue = 0.77;
                break;
            case "AC_H":
                attackComplexityValue = 0.44;
        }

        // Get the value for Privilege Required
        let privilegeRequiredValue;
        const privilegeRequired = document.querySelector('input[name="PR"]:checked').value;
        switch (privilegeRequired) {
            case "PR_N":
                privilegeRequiredValue = 0.85;
                break;
            case "PR_L":
                privilegeRequiredValue = 0.62;
                break;
            case "PR_H":
                privilegeRequiredValue = 0.27;
        }

        // Get the value for User Interaction
        let userInteractionValue;
        const userInteraction = document.querySelector('input[name="UI"]:checked').value;
        switch (userInteraction) {
            case "UI_N":
                userInteractionValue = 0.85;
                break;
            case "UI_R":
                userInteractionValue = 0.62;
        }

        // calculate the value for exploitability
        const exploitability = attackVectorValue * attackComplexityValue * privilegeRequiredValue * userInteractionValue;
        
        // Get the value for scope
        let scope;
        const scopeValue = document.querySelector('input[name="scope"]:checked').value;
        switch (scopeValue) {
            case "scope_U":
                scope = 1.0;
                break;
            case "scope_C":
                scope = 1.08;
        }

        // Get the value for Base confidentiality
        let baseConfidentialityValue;
        const confidentiality = document.querySelector('input[name="conf"]:checked').value;
        const sensitivity = document.querySelector('input[name="sens"]:checked').value;
        if(confidentiality == "conf_N" && sensitivity == "sens_N") {
            baseConfidentialityValue = 0.00;
        } else if (confidentiality == "conf_N" && sensitivity == "sens_L") {
            baseConfidentialityValue = 0.00;
        } else if (confidentiality == "conf_N" && sensitivity == "sens_H") {
            baseConfidentialityValue = 0.00;
        } else if (confidentiality == "conf_L" && sensitivity == "sens_N") {
            baseConfidentialityValue = 0.22;
        } else if (confidentiality == "conf_L" && sensitivity == "sens_L") {
            baseConfidentialityValue = 0.65;
        } else if (confidentiality == "conf_L" && sensitivity == "sens_H") {
            baseConfidentialityValue = 0.85;
        } else if (confidentiality == "conf_H" && sensitivity == "sens_N") {
            baseConfidentialityValue = 0.56;
        } else if (confidentiality == "conf_H" && sensitivity == "sens_L") {
            baseConfidentialityValue = 0.75;
        } else {
            baseConfidentialityValue = 0.95;
        }

        // Get the value for Base integrity
        let baseIntegrityValue;
        const healthImpact = document.querySelector('input[name="health"]:checked').value;
        const integrity = document.querySelector('input[name="integ"]:checked').value;
        if(healthImpact == "health_N" && integrity == "integ_N") {
            baseIntegrityValue = 0.00;
        } else if (healthImpact == "health_N" && integrity == "integ_L") {
            baseIntegrityValue = 0.22;
        } else if (healthImpact == "health_N" && integrity == "integ_H") {
            baseIntegrityValue = 0.56;
        } else if (healthImpact == "health_L" && integrity == "integ_N") {
            baseIntegrityValue = 0.55;
        } else if (healthImpact == "health_L" && integrity == "integ_L") {
            baseIntegrityValue = 0.60;
        } else if (healthImpact == "health_L" && integrity == "integ_H") {
            baseIntegrityValue = 0.75;
        } else if (healthImpact == "health_H" && integrity == "integ_N") {
            baseIntegrityValue = 0.85;
        } else if (healthImpact == "health_H" && integrity == "integ_L") {
            baseIntegrityValue = 0.90;
        } else {
            baseIntegrityValue = 0.95;
        }

        // Get the value for Base availability
        let baseAvailabilityValue;
        const availability = document.querySelector('input[name="avail"]:checked').value;
        if(healthImpact == "health_N" && availability == "avail_N") {
            baseAvailabilityValue = 0.00;
        } else if (healthImpact == "health_N" && availability == "avail_L") {
            baseAvailabilityValue = 0.22;
        } else if (healthImpact == "health_N" && integrity == "avail_H") {
            baseAvailabilityValue = 0.56;
        } else if (healthImpact == "health_L" && integrity == "avail_N") {
            baseAvailabilityValue = 0.55;
        } else if (healthImpact == "health_L" && integrity == "avail_L") {
            baseAvailabilityValue = 0.60;
        } else if (healthImpact == "health_L" && integrity == "avail_H") {
            baseAvailabilityValue = 0.65;
        } else if (healthImpact == "health_H" && integrity == "avail_N") {
            baseAvailabilityValue = 0.85;
        } else if (healthImpact == "health_H" && integrity == "avail_L") {
            baseAvailabilityValue = 0.90;
        } else {
            baseAvailabilityValue = 0.95;
        }
        
        // calculate the value for base
        const base = baseConfidentialityValue + baseIntegrityValue + baseAvailabilityValue;

        // Compute the score
        let scoreFinal = 0;
        // If base is 0, the final score will be 0
        if (base !== 0) {
            scoreFinal = scope * ((3.326258289 * base) + (1.1 * exploitability));
        }

        // Round the score to one decimal place and display it
        const scoreElement = document.getElementById("score");
        scoreElement.innerHTML = scoreFinal.toFixed(1);
    }
}