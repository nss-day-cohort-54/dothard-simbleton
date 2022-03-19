import { Business } from "./Business.js"
import { getBusinesses, NYBusinesses, filteredManufacturingBusinesses, filteredAgents } from "./database.js"

const businessTarget = document.querySelector(".businessList--active")

export const BusinessList = () => {
    const businessArray = getBusinesses()
    businessTarget.innerHTML += "<h1>Active Businesses</h1>"
    businessArray.forEach(
        (businessObject) => {
            businessTarget.innerHTML += Business(businessObject)
        }
    );
}


export const NYBusinessesList = (state) => {
    const statesArray = NYBusinesses(state)
    businessTarget.innerHTML += `<article class = "businessList--newYork>`
    businessTarget.innerHTML += `<h1>New York Businesses</h1>`
    statesArray.forEach(
        (businessObject) => {
            businessTarget.innerHTML += Business(businessObject)
        }
    )
    businessTarget.innerHTML += "</article>"
}

export const manufacturingBusinesses = () => {
    const manBusiness = filteredManufacturingBusinesses()
    businessTarget.innerHTML += `<article class = "businessList--manufacturing">`
    businessTarget.innerHTML += "<h1>Manufacturing Businesses</h1>"

    manBusiness.forEach(
        (manObject) => {
            businessTarget.innerHTML += Business(manObject)
        }
    )
    businessTarget.innerHTML += `</article>`
}

export const Agents = () => {
    const agents = filteredAgents()
    businessTarget.innerHTML += `<article class = "agents">`
    businessTarget.innerHTML += "<h1>Purchasing Agents</h1>"



    agents.forEach(
        (agent) => {
            businessTarget.innerHTML += `<h2 class="business--agent">${agent.agentName}</h2>
            <div class="business--address">
                <p>${agent.agentCompany} </p>
                <p>${agent.agentPhone}</p>`
        }
    )
    businessTarget.innerHTML += "</ul>"
    businessTarget.innerHTML += `</article>`
}


const companySearchResultArticle = document.querySelector(".foundAgents")

document
    .querySelector("#agentSearch")
    .addEventListener(
        "keypress", //when we press the key enter
        keyPressEvent => { //do this when we press the key
            if (keyPressEvent.charCode === 13) { //if the key that is being pressed is enter
                /*
                    When the user presses 'Enter', find the matching business.
                    You can use the `.includes()` string method to
                    see if a smaller string is part of a larger string.
                    Example: business.companyName.includes(keyPressEvent.target.value)
                */
                const userInput = document.getElementById("agentSearch").value
                const agentList = filteredAgents()

                const foundAgent = agentList.find(agent => agent.agentName.includes(userInput))
                if (foundAgent === undefined) {
                    window.alert("No agent found.")
                } else {
                    companySearchResultArticle.innerHTML = `<div class="customer-address">
                        <h2><p>${foundAgent.agentName} </p></h2>
                        <p>${foundAgent.agentCompany}</p>
                        <p>${foundAgent.agentPhone}</p>`
                }






            }
        });