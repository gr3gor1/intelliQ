<p align="justify">In the current directory (./api-backend), we have created the API based on the specifications provided in the assignment, along with some additional endpoints that we deemed useful. Below, we will provide a brief explanation of key files:</p>

* <p align="justify">Specifically, the file index.js, based on the dbURI, connects the API to the database and then listens on port 4000 to provide the services offered by the API. The data contained in the request are then sent ("/intelliq_api") to the api.js file.</p>

* <p align="justify">The file api.js, depending on the endpoint requested, uses the corresponding method from the controllers.js file in the controllers directory.</p>

* <p align="justify">Additionally, within the models directory, the definitions of the Schemas to be used during the transfer of data to and from the database are located.</p>

* <p align="justify">Next, we will explain in more detail the individual functions in the controllers.js file:</p>

      1. The constant (function) post_questionnaire is responsible for uploading a questionnaire to the database (creating a new document).
      
      2. The constant (function) get_healthcheck checks the connectivity of the API with the database.
      
      3. The constant (function) resetall aims to delete all answers and questions in the database.
      
      4. The constant (function) addAnswer uploads the answer to a question (creates a new document).
      
      5. The constant (function) resetq is responsible for deleting the answers of a specific questionnaire.
      
      6. The constant (function) get_questionnaire returns all questions of a specific questionnaireID (along with some information for each question such as qID, qtext, required, type).
      
      7. The constant (function) get_options, using an aggregation developed in MongoDB Compass, transforms a questionnaire with respect to one of its questions so that data related to the options of that specific question is returned.
      
      8. The constant (function) get_session_answers, using aggregation, returns all answers (and corresponding question IDs) given in a specific questionnaire and session.
      
      9. The constant (function) get_question_answers, using aggregation, returns all answers (and corresponding sessions) given in a specific questionnaire and question.
      
      10. The constant (function) get_all_questionnaire returns all questionnaires present in the database.
      
      11. The constant (function) get_all_question returns all answers stored in the database.</p>
