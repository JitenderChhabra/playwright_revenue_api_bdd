const { Given, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const playwright = require('playwright');

setDefaultTimeout(60 * 1000); // 60 seconds timeout

let response;        

//Given I send a GET request to "https://openlibrary.org/authors/OL1A.json"        
Given('I send a GET request to {string}', async function (url) {
    const requestContext = await playwright.request.newContext();
    response = await requestContext.get(url);
    this.responseBody = await response.json();
    await requestContext.dispose();  // ensure context is closed
  });

//Then the response status should be 200  
Then ('the response status should be {int}', async function(statusCode){
    expect(response.status()).toBe(statusCode);
});

//And the response should contain the name "Sachi Rautroy"
Then ('the response should contain the name {string}', async function(expectedName){
    expect(this.responseBody.personal_name).toBe(expectedName);
});

//And the response should contain the birth date 1916
Then ('the response should contain the birth date {string}', async function(birthDate){
    expect(this.responseBody.birth_date).toBe(birthDate)
});

//And the response should contain the death date 2004
Then ('the response should contain the death date {string}', async function (deathDate){
    expect(this.responseBody.death_date).toBe(deathDate)
});

//And the response should contain the altername name Yugashrashta Sachi Routray
Then ('the response should contain the altername name {string}', async function (alternameName){
    //expect(this.responseBody.alternate_names[7]).toBe(alternameName)

    const alternateNames = await this.responseBody.alternate_names;

    let found = false;
    for (let name of alternateNames) {
        console.log(name);
        if (name === alternameName) {
            found = true;
            break;
        }
    }
    expect(found).toBeTruthy();  // assertion
});
