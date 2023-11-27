
In the specific directory, we have the files generated during the testing process using Postman. Subsequently, we will provide a detailed explanation of the tests created to assess the performance of the CLI application as it interacts with the API. Assuming that we start with the database containing no data, we perform the following actions:

* The function test_healthcheck() checks the connectivity between the database and the API using the CLI application.
* The function test_upd0_faulty() checks the result of submitting a faulty questionnaire through the CLI application.
* The functions test_upd0() and test_upd1() verify the submission of two questionnaires to the database using the CLI application.
* The function test_doanswer() checks the submission of an answer to each of the previous questionnaires via the CLI application.
* The functions test_questionnaire(), test_question(), test_getsessionanswers(), and test_getquestionanswers() ensure that the appropriate JSON is returned through the CLI application.
* The function test_resetq() checks the deletion of one of the two answers to the questionnaire performed earlier using the CLI application.
* The function test_402() verifies if the correct error code is displayed when requesting the answer deleted in the previous step using the CLI application.
* The function test_resetall() checks if all answers and questions are deleted from the database using the CLI application.
