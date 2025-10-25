Feature: Verify author details API

    Scenario: Verify the author details for Sachi Rautroy
        Given I send a GET request to "https://openlibrary.org/authors/OL1A.json"
        Then the response status should be 200
        And the response should contain the name "Sachi Rautroy"
        And the response should contain the birth date "1916"
        And the response should contain the death date "2004"
        And the response should contain the altername name "Yugashrashta Sachi Routray"