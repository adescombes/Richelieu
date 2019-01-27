
## Pipeline

### Intro
1. **repertoires.xslx : ** table listing all repertories used to get data for addressing. 
2. **iiif_image_downloader.ipynb : ** use this notebook with **repertoires.xslx** to download the images (in jpeg format) from Gallica and the iiif protocol. There might be an error due to the ticking box for license agreement, in which case the download must be done manually. 

### Segmentation
3. **segmentation/** : on the pages of the chosen repertories, text is displayed into 3 columns : we will use the tool [dhSegment](https://github.com/dhlab-epfl/dhSegment) to cut each page into 3 images of a single column. **SegmentationClassPNG** : 96 pages were manually labelled with [labelme](https://github.com/wkentaro/labelme), and this folder contains the resulting png. **JPEGImages** contains the original jpeg images.
4. Run **Predict page separation-iiif-images-py** : you will get the coordinates of "boxes" contouring each columns. They are stored in the folder **segmented_almanachs** into .npy format (one file per repertory).
5. Run **predit_contours.py** : you will get each image of a column contoured by a greyish border (useful for OCR). They are stored in the folder **images_iiif_crops_results**.
6. You can check that all images have been treated thanks to the notebook **Get missing precidtions.ipynb**. The missing images are added in the folder **missing_preds**. Repeat step 4 (this time predictions are stored in the file **missing.npy**) and step 5. 
7. Now that we have all cropped columns images, we need the text. To proceed we will use Google Cloud Vision API. Run **google_ocr.py** after having insterted your Google Cloud API key at line 17. The OCR results are stored in the folder **images_iiif_crops_ocr_results** into compressed json format (.json.gz)

### OCR
8. Run **OCR from JSON to DF.ipynb** : it takes the OCR json files and stores the text from all repertories into a single DataFrame : **ocr_results_pickle/df_rows.pickle**.
9. Run **split OCR.ipynb** : it does a bit of cleaning by mainly removing special characters and empty lines. The result a new DataFrame stored into **ocr_results_pickle/df_lines_with_split.pickle**.
10. Run **from splitted lines to strict addressing.ipynb** : it takes the previous DataFrame, does again a bit of cleaning and row splitting or concatenation according to several heuristics. It splits the text into * Name - Job - Street  Street Number *. The result is stored in **ocr_results_pickle/strict_addressing.pickle** and also in **strict_addressing.csv**.

### Clean addressing
11. Run **Match geotemp data and addressing.ipynb** : it takes **strict_addressing.csv** as input and cleans the "Street" section, based on geographical data (see *geotemporal data/*). **df_with_match.pickle** contains, for each row of **strict_addressing.csv**, a field with the best matching street name and the corresponding Levenshtein distance. We select only addresses that have a distance of 0 or 1 character and save it in **df_match1.pickle**. We do a second match, this time on street types, following the same method, and save the result in **df_match2.pickle**. We finish to desambiguate street names+types by hand (using **to_desambiguate.xls** and **desmabiguated.xls**) and save the result in **df_all_matched.pickle** (still containing distances data) and **clean_addressing.csv** and  **clean_addressing.xlsx**  (only fields needed for next steps).
12. Run the section of your choice in **Add geometry to adresses.ipynb** to take **df_all_matched.pickle** and link street names to a geometry (possibly (X,Y) coordinates of centers or centroids, or WKT geometry of lines). The result is saved into .csv format to import into QGIS.
13. Run **Clean Métier and Numéro.ipynb** to clean first the job field (using **metiers_cleaned.xlsx**, a table containing job's string values cleaned by hand) : the result is stored in **df_addressing_metiers_clean.pickle** and **df_addressing_metiers_clean.xlsx** and then to clean street numbers (using Vasserot and current geographical data from **geotemporal data/**) : the result is stored in **df_addressing_with_numbers.pickle** and **df_addressing_with_numbers.xlsx**.
