Στο συγκεκριμένο directory έχουμε τα αρχεία που παράξαμε κατά τη διαδικασία testing με το postman. Στη συνέχεια θα εξηγήσουμε αναλυτικότερα και τα tests που δημιουργήσαμε για να δούμε την απόδοση της εφαρμογής cli καθώς αλληλεπιδρά με το API. Οπότε κάνοντας την παραδοχή πως ξεκινάμε με τη βάση δεδομένων να μην περιέχει κάποιο δεδομένο, πραγματοποιούμε τις ακόλουθες ενέργειες:

* Η συνάρτηση test_healthcheck() πραγματοποιεί έλεγχο συνδεσιμότητας μεταξύ της βάσης δεδομένων και του API χρησιμοποιώντας την εφαρμογή CLI.
* Η συνάρτηση test_upd0_faulty() πραγματοποιεί έλεγχο σχετικά με το αποτέλεσμα υποβολής ενός λανθασμένου ερωτηματολογίου μέσω της εφαρμογής CLI.
* Οι συναρτήσεις test_upd0() και test_upd1() πραγματοποιούν τον έλεγχο υποβολής δύο ερωτηματολογίων στη βάση δεδομένων μέσω της εφαρμογής CLI.
* Η συνάρτηση test_doanswer() πραγματοποιεί έλεγχο κατά την υποβολή μιας απάντησης σε καθένα από τα προηγούμενα ερωτηματολόγια μέσω του εφαρμογής CLI.
* Οι συναρτήσεις test_questionnaire(), test_question(), test_getsessionanswers(), test_getquestionanswers() ελέγχουν αν επιστρέφεται το κατάλληλο JSON μέσω της εφααρμογής CLI.
* Οι συνάρτηση test_resetq() πραγματοποιεί έλεγχο κατά την διαγραφή των μιας εκ των δύο απαντήσεων του ερωτηματολογιού που πραγματοποιήσαμε νωρίτερα, χρησιμοποιώντας την εφαρμογή CLI.
* Η συνάρτηση test_402() ελέγχει αν εμφανίζεται το κατάλληλο error code όταν ζητείται να επιστραφεί η απάντηση που διεγράφη στο προηγούμενο βήμα με χρήση της εφαρμογής CLI.
* Η συνάρτηση test_resetall() ελέγχει αν διαγράφονται όλες οι απαντήσεις και οι ερωτήσεις από τη βάση δεδομένων, με χρήση της εφαρμογής CLI.