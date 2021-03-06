### Projet Richelieu

This project, done in partnership with EPFL and INHA, has the *Richelieu district* as object of studies (more info [here](https://www.inha.fr/fr/recherche/programmation-scientifique/en-2018-2019/richelieu-histoire-du-quartier-etat-des-lieux.html) - in french). As part of this project, this repository shows on a map around 100'000 workers settled in the district between 1856 and 1922 (see geographical limits of the district [here](https://drive.google.com/open?id=1T6nZfyEQkW5D0Iuoza5zo_cnC5bSgR4j&usp=sharing)). This data comes from old directories, digitized and available online (see [Gallica](https://gallica.bnf.fr/)). The OCR is not the one provided by Gallica but has been done on Gallica's images with Google Cloud Vision API. 

**Download the 4.5 M addresses [here](https://drive.google.com/file/d/15IoielAZpH3l-8rG96R04ek5AdmPEtFx/view?usp=sharing)!** 


Here are listed the steps to go from scanned directories to a clean table of people's addresses, and the size of data (or loss) when going through each step : 
1. download images from Gallica with iiif protocol : 50 Go folder
2. separate the 3 columns of each page's scan and add a contour of the same colour as its background (color of the page). For segmentation I used the tool [dhSegment](https://github.com/dhlab-epfl/dhSegment) with [labelme](https://github.com/wkentaro/labelme) to make training data.
3. Google OCRize it : the OCR of all directories is stored into a file of 369 Mo and 8'525'884 lines. 
4. Clean the OCR : according to various heuristics, we as many entries as we can, following the format *Name, Job, Street name, Street number*. The result is stored into a csv file **- the one available to download -** of 288 Mo and 4'406'164 lines : some lines have been dropped but many have been concatenated as entries can be spread in 2 lines in the directories. 
5. Select streets : first and most important we clean the field containing the street name. It will be used to display people on a map. The cleaning is done by matching street names of the OCR to geographical data from Paris Open Data and Alpage, with the Levenshtein distance. A double match is done : on street name (e.g. *Beaujolais*) and on street type (e.g. *Passage*). We select only the lines whose address is located in the Richelieu district. The resulting table is a file of size 35.1 Mo and 485'693 lines.
6. Clean job names : it will be used to gather similar jobs and clean the text (remove all abbreviation for a more pleasant reading and possibly correct some OCR typos). No lines are dropped or added at this point.
7. Clean the street number section : using again geographical data, we do a more precise localisation of extracted workers. But a default of the geographical data is that not all numbers are represented (possible future improvement of geo data). So my choice was to do the match anyway to be able to display less data but in a more accurate way. After the match on street numbers we have a table of 12.5 Mo and 189'621 lines.
8. Some people probably appear into several directories. We then simplify the data (this time we take the table obtained at step 5) by admitting that entries that have a same combination of *Name*, *Street Name* and *Job* are a same person. We replace the *Year* field by a time lapse (values of *min year*, *max year* found). After this step we have a table of size 8.39 Mo and 75'914 lines. 

To conclude, we have almost 76'000 unique workers in the Richelieu district between 1856 and 1922!


