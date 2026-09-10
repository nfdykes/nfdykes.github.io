// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "List of university-level courses",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-i-printed-my-thesis-twice",
        
          title: "I printed my thesis twice",
        
        description: "On submitting a PhD in Germany, or, why you should read the Promotionsordnung more carefully than I did.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/i-printed-my-thesis-twice/";
          
        },
      },{id: "post-concordances-on-paper",
        
          title: "Concordances on paper",
        
        description: "Teaching concordance analysis to non-linguists at the Data, Gender and Society summer school.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/concordances-on-paper/";
          
        },
      },{id: "post-cadsbib-an-annotated-bibliography-for-corpus-and-discourse-research",
        
          title: "CADSbib. An annotated bibliography for corpus and discourse research",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cads-survey/";
          
        },
      },{id: "news-i-had-a-great-time-presenting-and-discussing-my-research-at-reproducibilitea-in-the-humaniteas-in-cologne-slides-from-my-talk-beyond-the-gold-standard-transparency-in-qualitative-corpus-analysis-on-osf",
          title: 'I had a great time presenting and discussing my research at ReproducibiliTea in...',
          description: "",
          section: "News",},{id: "news-on-may-27-2025-i-gave-a-talk-at-the-research-topics-in-digital-linguistics-seminar-from-the-digital-linguistics-group-at-tu-darmstadt-the-slides-are-available-on-osf",
          title: 'On May 27, 2025, I gave a talk at the “Research Topics in...',
          description: "",
          section: "News",},{id: "news-between-june-and-july-the-rc21-team-gave-four-talks-and-a-workshop-on-applying-our-flexiconc-tool-to-literary-stylistics-you-can-find-details-on-some-of-them-on-the-project-page",
          title: 'Between June and July, the RC21 team gave four talks and a workshop...',
          description: "",
          section: "News",},{id: "news-our-department-page-now-has-a-post-on-the-mini-conference-we-organised-at-dh2025-in-lisbon-the-times-they-are-a-changing-besides-chairing-sessions-and-participating-in-the-pre-conference-and-on-site-planning-i-presented-some-research-on-behalf-of-the-rc21-team-where-we-used-flexiconc-to-identify-temporal-trends-in-water-discourse-in-german-bundestag-debates-there-will-be-more-on-this-soon-watch-this-space",
          title: 'Our department page now has a post on the mini conference we organised...',
          description: "",
          section: "News",},{id: "news-our-summer-school-data-gender-and-society-took-place-from-september-22-26-2025-i-am-writing-up-a-blog-post-on-my-own-sessions-in-the-meantime-you-can-find-an-event-description-photos-and-a-video-on-the-department-page",
          title: 'Our summer school Data, Gender and Society took place from September 22-26, 2025....',
          description: "",
          section: "News",},{id: "news-i-submitted-my-phd-dissertation-a-methodological-framework-for-corpus-based-discourse-analysis-in-summer-when-exactly-it-depends-anyway-i-just-sent-off-a-book-proposal-and-am-really-looking-forward-to-what-s-next",
          title: 'I submitted my PhD dissertation, a Methodological Framework for Corpus-Based Discourse Analysis, in...',
          description: "",
          section: "News",},{id: "news-i-ll-be-involved-in-two-presentations-at-this-year-s-corpora-and-discourse-conference-in-lancaster-body-movement-and-sensation-in-fanfiction-on-jane-austen-with-anastasia-glawion-and-michaela-mahlberg-a-multivariate-analysis-of-quotation-in-german-parliamentary-debates-really-looking-forward-to-this-in-june",
          title: 'I’ll be involved in two presentations at this year’s Corpora and Discourse conference...',
          description: "",
          section: "News",},{id: "news-new-publication-regular-expressions-for-corpus-queries-co-authored-with-james-tauber-will-be-published-in-the-upcoming-3rd-edition-of-the-international-encyclopedia-of-language-and-linguistics-in-it-we-show-how-regular-expressions-help-to-study-linguistic-phenomena-in-discourse-morphology-and-syntax",
          title: 'New publication: Regular expressions for corpus queries, co-authored with James Tauber, will be...',
          description: "",
          section: "News",},{id: "news-we-just-published-a-handout-for-using-our-flexiconc-tool-in-clic-which-explains-all-the-ways-that-flexiconc-makes-concordance-analysis-flexible-and-transparent-find-the-pdf-on-github",
          title: 'We just published a handout for using our FlexiConc tool in CLiC, which...',
          description: "",
          section: "News",},{id: "news-i-will-be-at-the-gal-research-school-impulse-und-methoden-der-diversitäts-und-inklusionslinguistik-taking-place-in-bayreuth-germany-from-may-7-9-i-am-very-much-looking-forward-to-the-event-as-well-as-my-talk-and-workshop-contributions-presentation-gegenöffentlichkeit-oder-interaktion-visuelle-triangulation-analytischer-positionen-in-der-korpusbasierten-diskursanalyse-am-beispiel-von-verschwörungsnahen-inhalten-auf-telegram-methods-workshop-nathan-dykes-amp-amp-philipp-heinrich-was-können-algorithmen-zur-diskursanalyse-beitragen-flexible-und-transparente-tools-für-computergestützte-korpusanalysen",
          title: 'I will be at the GAL research school Impulse und Methoden der Diversitäts-...',
          description: "",
          section: "News",},{id: "news-it-s-done-my-dissertation-a-methodological-framework-for-corpus-based-discourse-analysis-is-published-and-freely-available-in-open-access-at-doi-org-10-25593-open-fau-3360-a-revised-version-is-under-contract-with-bloomsbury-academic-in-the-corpus-and-discourse-series-as-traceable-interpretation-through-linguistic-description-lexis-semantics-and-lexicogrammar-more-on-that-as-it-takes-shape",
          title: 'It’s done: my dissertation A Methodological Framework for Corpus-Based Discourse Analysis is published...',
          description: "",
          section: "News",},{id: "news-new-chapter-as-of-september-2026-i-am-a-postdoctoral-researcher-at-the-university-of-turku-after-eight-years-at-fau-erlangen-nürnberg-i-am-very-much-looking-forward-to-the-move-north-and-to-what-corpus-based-discourse-analysis-can-do-in-a-new-research-environment-you-can-now-reach-me-at-nathan-dykes-utu-fi",
          title: 'New chapter: as of September 2026 I am a postdoctoral researcher at the...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/nfdykes.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%61%74%68%61%6E.%64%79%6B%65%73@%75%74%75.%66%69", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nfdykes", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4650-1455", "_blank");
        },
      },{
        id: 'social-osf',
        title: 'Open Science Framework',
        section: 'Socials',
        handler: () => {
          window.open("https://osf.io/6qu9b/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9KfiiyQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
