----------------------------------------------------------
DSECRIPTION DES FICHIERS CONTENUS DANS 'ANNUAIRES'
----------------------------------------------------------

- repertoires.xslx : source des annuaires utili�s. Liste et descriptions des annuaries trouv�s sur Gallica. 

- gallica_ocr_downloader.ipynb : notebook cens� t�l�charger massivement les OCR des annuaires list�s dans repertoires.xslx, mais finalement ce t�l�chargement a �t� fait � la main (� cause d'une petite case � cocher dans Gallica)

- ocr_html_to_json.ipynb : notebook qui cr�e un fichier JSON pour chaque fichier htlm 

- DOSSIER OCR HTML : dossier contenant tous les fichiers html et JSON correspondant

- gallica_json_to_text : pour l'instant utilise un fichier JSON (donc un annuaire), en prend les 30 premi�res pages (+ m�tadonn�es) pour constituer un �chantillon � tester pour cleaning

- DOSSIER test ocr annuaire : voir README de ce dossier. Diff�rents tests d'OCR et de nettoyage de texte