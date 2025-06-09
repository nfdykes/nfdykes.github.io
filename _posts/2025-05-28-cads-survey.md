---
layout: post
title: CADSbib. An annotated bibliography for corpus and discourse research
date: 2025-06-08 12:00:16
description:
tags: cads bibliography survey research
categories: cads
toc:
  sidebar: left
thumbnail: assets/img/library.jpg
---
<header class="image-header">
  <img src="/assets/img/library.jpg" alt="Library Header" class="img-fluid">
  <div class="caption">
Photo by <a href="https://unsplash.com/de/@mozaheri?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mohamad Zaheri</a> on <a href="https://unsplash.com/de/fotos/buchpartie-mit-verschiedenen-titeln-in-den-regalen-ocRxdu9gNKs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</div>
</header>
<style>
.image-header img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  display: block;
}
</style>


CADSbib is an annotated bibliography comprising corpus-based studies on discourse analysis. The initial version was collected between 2021-2025 and contains over 500 entries.

In contrast to general bibliographic databases, CADSbib is manually curated for research relevant to corpus work on discourse. This is particularly useful considering the broad usage of the term *discourse*, which can make it difficult to find relevant work.

The main contribution of CADSbib is that it contains detailed information on each reference including metadata, software, target language and corpus methods. This opens up usage applications across a wide range of  areas.

CADSbib is the basis for the survey on the development of CADS that was conducted as part of my PhD work. Stay tuned for its publication to read my account of how the field has developed over the last three decades!

### Applications


CADSbib is especially useful for students and researchers interested in:
📈 **Trend mapping**
- examine combinations of methods and year to track how keyness or concordance analysis have risen or declined over time.
- spot methodological preferences in certain domains: are certain domains more associated with newer methods than others?
📍 **Geographic and domain amplification**
   - filter by region to find highlight voices from under-represented areas (e.g. African researchers)
   - combine with a domain filter to make your search more targeted (e.g. social media discourse conducted by researchers from Honk Kong)
   
📝 **Cross- and intra-domain comparisons**
   - filter for studies using similar methods on different domains
   - extract studies on the same domain and year to compare their methods

🎓 **Pedagogical applications**
   - teach methodology through examples
   - build annotated reading lists for your coursework
   - find studies using a publicly accessible corpus to identify transparent examples
   - identify research using a custom corpus for a particular domain to showcase how researchers build e.g. corpora for health discourse
	
💭 **Methodological reflexivity**
   - analyse which methods are overused or absent
	
💻 **Interface with other tools**
   - CSV file to filter in a spreadsheet tool
   - import the file using R or Python to conduct your own analyses
   - download the .bib file to import the references in a citation manager

### Structure of CADSbib
The references are annotated with the following types of information:

#### Metadata

| Category  | Explanation |
| :-------- | :---------- |
|year | year of publication |
|author_1, author_2, ... | individual author names |
|citation   | remaining citation information: title, venue, page numbers etc. |
|affiliation_Author_1 | institution where the first author is based|
|affiliation_Country|country where the first author is based|
|affiliation_author_1_continent|continent where the first author is based|



#### Corpus and tools

| Category  | Explanation |
| :-------- | :---------- |
|corpus_target | Corpus name for general-purpose corpora. *custom* for corpora created by the researcher(s) themselves |
|domain | Domain(s) that the corpus texts are from (e.g. *media*, *politics*) |
|Language_target | language(s) of the corpus; separated by commas |
|Software | corpus software used in the study. *custom* if the authors used programming scripts, with exceptions for widespread libraries|
|Software_2|additional software; separated by commas |


#### Methods


| Category  | Explanation |
| :-------- | :---------- |
|frequency_dispersion | *y* if the study uses frequency-based methods that are not covered by any other columns |
|keywords | *y* if the study uses keyness analysis (including other levels than the word). |
|collocations | *y* if the study uses collocations. |
|n-grams | *y* if the study uses n-grams.|
|KWIC|*y* if the study uses concordance analysis and/or shows concordance examples.|
|semtags|*y* if the study uses semantic tagging|
|corpus_methods_other|free-text form for studies using other corpus methods. Methods are separated by commas|
|cooc_measure|association statistic used in keyness or collocation analysis. Only specified for a sample of articles.|
|cooccurrence_aggregation|How the keywords or collocates were organised. Only specified for a sample of articles.|


		
### Download CADSbib
Find the full [csv](https://osf.io/pgsrv?view_only=fe0899ce01c64bbf87dae83e82dece18) table on OSF.


To access the references in a citation-friendly manner, I also provide a [bib file](https://osf.io/yke9n?view_only=fe0899ce01c64bbf87dae83e82dece18") on OSF. _Please note:_ the bib file was auto-generated and contains errors.

### Get involved in CADSbib
If you'd like to contribute to CADSbib with references, annotations or corrections, please do get in touch with me!