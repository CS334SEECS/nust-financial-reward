# nust-financial-reward
Automating the NUST financial reward upon publication of research articles in reputed research journals.

## TODO LIST

* Single page application with a form which takes user input as given below
  * Form Inputs
    * Title of Paper
    * Name of NUST Author Claiming Reward
    * Journal
    * ISSN
    * Vol
    * Issue
    * Pages
    * Publication Date
    * Total number of Authors (inluding NUST Authors)
      * Based on above no. AJAX based entries need to be created.
      * Authors need to added with details (Name, Designation, Affiliation, Contact no., Email, CNIC)
    * URL of paper
    * DOI of paper
    * Indexation Details
      * Impact Factor
      * Journal Quartile in the Category  
      * Category
      * Total Journal in Category (TJ)
      * Position of Journal (PJ)
    * Date of submission of application (this form)
    * Calculate reward as given on [this page](https://khattak.info/nustfinancialreward/)
  * Similarity index
    * Similarity Index	
    * Internet Sources	
    * Publications	
    * Student papers
  * Signature image of Applicatant

* PhP Application that recieves the above variables and generates the document templates filled with the above data.
