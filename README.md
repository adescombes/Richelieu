
### Tableaux 


* repertoires.xslx : source des annuaires utiliés. Liste et descriptions des annuaires trouvés sur Gallica. 
* voie.csv : tableau provenant de Paris Open Data, couche QGIS paris voie (../QGIS layers/Paris Open Data/open data paris voie)
* adresse_paris.csv : tableau provenant de Paris Open Data, couche QGIS paris adresse_paris(../QGIS layers/Paris Open Data/open data paris adresse_paris)


### Notebooks


* gallica_ocr_downloader : notebook censé télécharger massivement les OCR des annuaires listés dans repertoires.xslx, mais finalement ce téléchargement a été fait à la main (à cause d'une petite case à cocher dans Gallica) (images contenues dans /data/images_iiif)

* ocr_html_to_json : notebook qui crée un fichier JSON pour chaque fichier htlm (contenus dans /data/OCR HTML)

* gallica_json_to_text : extrait le texte des JSON (contenus dans /data/ocr_alto)

* Gallica OCR confidence stats : quelques stats sur l'OCR obtenu des JSON (contenus dans /data/ocr_alto)

* Gallica OCR extraction de données.ipynb : prend les JSON contenus dans /data/ocr_alto, fait une DataFrame et un peu de cleaning dessus, le stocke dans strict_cleaning.csv QUI N'EST PAS DANS CE REPO (csv contenant toutes les adresses extraites, soit 4'210'996)

* Extract Richelieu : en prenant le tableau strict_cleaning.csv, utilise la [distance de Lenvenshtein](https://en.wikipedia.org/wiki/Edit_distance#Example) pour sélectionner les adresses dont le nom de rue fait référence à la rue Richelieu. Cela sert à constituer un échantillon à recaler géographiquement. Ce recalage est fait en associant les tableaux strict_cleaning et adresse_paris : 23'256 personnes sont retrouvées à la rue Richelieu. Quelques stats sur les métiers sont présentées à la fin du notebook.

