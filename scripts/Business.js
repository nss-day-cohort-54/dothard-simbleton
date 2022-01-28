export const Business = (businessObj) => {
    return `
        <section class="business">
            <h2 class="businessName">${businessObj.companyName}</h2>
            <div class="businessAddress">
                <p>${businessObj.addressFullStreet} </p>
                <p>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
            </div>
            <hr>
        </section>
    `
}
