----------------------------------------------------------
DSECRIPTION DES FICHIERS CONTENUS DANS 'ANNUAIRES'
----------------------------------------------------------

- repertoires.xslx : source des annuaires utiliés. Liste et descriptions des annuaries trouvés sur Gallica. 

- gallica_ocr_downloader.ipynb : notebook censé télécharger massivement les OCR des annuaires listés dans repertoires.xslx, mais finalement ce téléchargement a été fait à la main (à cause d'une petite case à cocher dans Gallica)

- ocr_html_to_json.ipynb : notebook qui crée un fichier JSON pour chaque fichier htlm 

- DOSSIER OCR HTML : dossier contenant tous les fichiers html et JSON correspondant

- gallica_json_to_text : pour l'instant utilise un fichier JSON (donc un annuaire), en prend les 30 premiéres pages (+ métadonnées) pour constituer un échantillon à tester pour cleaning
