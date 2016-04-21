/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Space Geek for a space fact"
 *  Alexa: "Here's your space fact: ..."
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.echo-sdk-ams.app.fccc46d9-3423-4dbe-b791-0b2f922a1b8f"; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * Array containing space facts.
 */
var QWINIX_FACTS = [
    "We are next generation problem solvers, keeping our eye on the future of technology, partnering and helping you through your digital transformation."
];
var QWINIX_FACTS_One = [
    "Agile & Lean Implementation, Design Thinking, Extreme Programming, Web & Mobile Application development, DevOps & Infrastructure Automation."
];
var QWINIX_FACTS_Two = [
    "Qwinix can help you innovate faster and smarter to react to customer needs by automating processes, application development and infrastructure."
];
var QWINIX_FACTS_Three = [
    "Qwinix helps you build cloud native applications, Cloud Migration & Strategy and DevOps"
];
var QWINIX_FACTS_Four = [
    "Cloud is the new black"
];
var QWINIX_FACTS_Five = [
    "I was born on 2012, i'm 4years old now."
];
var QWINIX_FACTS_Six = [
    "Denver, Colorado"
];
var QWINIX_FACTS_Seven = [
    "I am running on AWS Lambda answering all your questions!"
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * Qwinixian is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Qwinixian = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Qwinixian.prototype = Object.create(AlexaSkill.prototype);
Qwinixian.prototype.constructor = Qwinixian;

Qwinixian.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("Qwinixian onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Qwinixian.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Qwinixian onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};
Qwinixian.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Qwinixian onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequestOne(response);
};
Qwinixian.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Qwinixian onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequestTwo(response);
};
Qwinixian.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Qwinixian onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequestThree(response);
};
Qwinixian.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Qwinixian onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequestFour(response);
};
Qwinixian.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Qwinixian onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequestFive(response);
};
Qwinixian.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Qwinixian onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequestSix(response);
};
Qwinixian.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Qwinixian onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequestSeven(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Qwinixian.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("Qwinixian onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Qwinixian.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },
    "GetNewFactIntentOne": function (intent, session, response) {
        handleNewFactRequestOne(response);
    },
    "GetNewFactIntentTwo": function (intent, session, response) {
        handleNewFactRequestTwo(response);
    },
    "GetNewFactIntentThree": function (intent, session, response) {
        handleNewFactRequestThree(response);
    },
    "GetNewFactIntentFour": function (intent, session, response) {
        handleNewFactRequestFour(response);
    },
    "GetNewFactIntentFive": function (intent, session, response) {
        handleNewFactRequestFive(response);
    },
    "GetNewFactIntentSix": function (intent, session, response) {
        handleNewFactRequestSix(response);
    },
    "GetNewFactIntentSeven": function (intent, session, response) {
        handleNewFactRequestSeven(response);
    },


    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask Qwinixian tell me about Qwinix, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "See you soon, Have a good day!";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Bye for now";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * QWINIX_FACTS.length);
    var fact = QWINIX_FACTS[factIndex];

    // Create speech output
    var speechOutput = fact;

    response.tellWithCard(speechOutput, "Qwinixian", speechOutput);
}

function handleNewFactRequestOne(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * QWINIX_FACTS_One.length);
    var fact = QWINIX_FACTS_One[factIndex];

    // Create speech output
    var speechOutput = fact;

    response.tellWithCard(speechOutput, "Qwinixian", speechOutput);
}
function handleNewFactRequestTwo(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * QWINIX_FACTS_One.length);
    var fact = QWINIX_FACTS_Two[factIndex];

    // Create speech output
    var speechOutput = fact;

    response.tellWithCard(speechOutput, "Qwinixian", speechOutput);
}
function handleNewFactRequestThree(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * QWINIX_FACTS_One.length);
    var fact = QWINIX_FACTS_Three[factIndex];

    // Create speech output
    var speechOutput = fact;

    response.tellWithCard(speechOutput, "Qwinixian", speechOutput);
}
function handleNewFactRequestFour(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * QWINIX_FACTS_One.length);
    var fact = QWINIX_FACTS_Four[factIndex];

    // Create speech output
    var speechOutput = fact;

    response.tellWithCard(speechOutput, "Qwinixian", speechOutput);
}
function handleNewFactRequestFive(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * QWINIX_FACTS_One.length);
    var fact = QWINIX_FACTS_Five[factIndex];

    // Create speech output
    var speechOutput = fact;

    response.tellWithCard(speechOutput, "Qwinixian", speechOutput);
}
function handleNewFactRequestSix(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * QWINIX_FACTS_One.length);
    var fact = QWINIX_FACTS_Six[factIndex];

    // Create speech output
    var speechOutput = fact;

    response.tellWithCard(speechOutput, "Qwinixian", speechOutput);
}
function handleNewFactRequestSeven(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * QWINIX_FACTS_One.length);
    var fact = QWINIX_FACTS_Seven[factIndex];

    // Create speech output
    var speechOutput = fact;

    response.tellWithCard(speechOutput, "Qwinixian", speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the Qwinixian skill.
    var qwinixian = new Qwinixian();
    qwinixian.execute(event, context);
};

